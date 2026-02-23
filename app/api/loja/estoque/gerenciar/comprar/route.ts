import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { FornecedorModel } from "@/model/Fornecedor";
import { addDays } from "date-fns";
import { notificar } from "@/functions/notificacoes/notificar";
import { Produto } from "@/subschemas/Produto";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // quantidade: quanto o jogador quer comprar
    const { sessaoId, fornecedorId, produtoId, quantidade } = body;

    if (!quantidade || quantidade <= 0) throw new Error("Quantidade inválida.");

    // 1. Busca a sessão e o fornecedor
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    const fornecedor = await FornecedorModel.findById(fornecedorId);

    if (!sessao || !fornecedor) {
      throw new Error("Sessão ou Fornecedor não encontrado.");
    }

    // 2. Localiza o produto dentro do catálogo do fornecedor
    const produtoCatalogo = fornecedor.produtos.find(
      (p: Produto) => p._id.toString() === produtoId
    );

    if (!produtoCatalogo) throw new Error("Produto não disponível neste fornecedor.");

    // 3. Cálculo financeiro
    const custoTotal = produtoCatalogo.custoDeObtencao * quantidade;

    if (sessao.loja.caixaAtual < custoTotal) {
      notificar(sessao, "Banco", `Saldo insuficiente para comprar ${quantidade}x ${produtoCatalogo.nome}.`);
      return NextResponse.json({ success: false, error: "Saldo insuficiente." }, { status: 400 });
    }

    // 4. Gera o Recibo de Compra (Agendamento da Entrega)
    const dataEntrega = addDays(sessao.data, fornecedor.tempoDeEntrega);

    // Criamos a cópia do produto com a quantidade comprada
    const produtoParaRecibo = {
      ...produtoCatalogo.toObject(),
      estoque: quantidade, // No recibo, 'estoque' representa a quantidade comprada
    };

    const novoRecibo = {
      dataCompra: sessao.data,
      dataEntrega: dataEntrega,
      produto: produtoParaRecibo,
      fornecedor: fornecedor._id,
      nomeLoja: sessao.loja.nome
    };

    // 5. Efetivação
    sessao.loja.caixaAtual -= custoTotal;
    sessao.loja.reciboDeCompras.push(novoRecibo);

    await sessao.save();

    notificar(
      sessao, 
      "Logística", 
      `Pedido confirmado! ${quantidade}x ${produtoCatalogo.nome} chegarão em ${fornecedor.tempoDeEntrega} dias.`
    );

    return NextResponse.json({
      success: true,
      data: {
        caixaAtual: sessao.loja.caixaAtual,
        entregaPrevista: dataEntrega,
        recibo: novoRecibo
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao processar compra."
    }, { status: 400 });
  }
}