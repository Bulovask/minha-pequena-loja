import { Sessao } from "@/model/Sessao";
import { notificar } from "@/functions/notificacoes/notificar";
import { isBefore, isSameDay } from "date-fns";
import { Produto } from "@/subschemas/Produto";
import { FornecedorModel } from "@/model/Fornecedor";
import { HydratedDocument } from "mongoose";

export async function processarChegadaDeMercadoria(sessao: HydratedDocument<Sessao>): Promise<void> {
  const hoje = sessao.data;
  // Filtramos apenas recibos pendentes que chegaram na data
  const recibosPendentes = sessao.loja.reciboDeCompras.filter(r =>
    !r.entregue && (isBefore(r.dataEntrega, hoje) || isSameDay(r.dataEntrega, hoje))
  );

  for (const recibo of recibosPendentes) {
    const produtoNoEstoque = sessao.loja.estoque.find(p =>
      p._id.toString() === recibo.produto._id.toString() // Comparação segura de ID
    );

    if (produtoNoEstoque) {
      produtoNoEstoque.estoque += recibo.produto.estoque;
    } else {
      // OPA! Produto novo na loja. 
      // Precisamos buscar o "template" completo dele no fornecedor para pegar as regras de venda
      const fornecedor = await FornecedorModel.findById(recibo.fornecedor);
      const templateCompleto = fornecedor?.produtos.find((p: Produto) => p._id === recibo.produto._id);

      if (templateCompleto) {
        sessao.loja.estoque.push({
          ...templateCompleto.toObject(),
          estoque: recibo.produto.estoque, // Usa a quantidade do recibo
          ativo: true
        });
      }
    }

    recibo.entregue = true; // Marca como entregue em vez de deletar
    sessao.markModified('loja.reciboDeCompras');
    sessao.markModified('loja.estoque');
    notificar(sessao, "Logística",
      `Carga recebida: ${recibo.produto.estoque}x unidades de ${recibo.produto.nome} foram estocadas.`);
  }
}