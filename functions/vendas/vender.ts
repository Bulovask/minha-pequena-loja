// @/functions/vendas/venderUmDia.ts
import { Sessao } from "@/model/Sessao";
import { HydratedDocument } from 'mongoose';

export function vender(sessao: HydratedDocument<Sessao>, mesAtual: number): boolean {
  const { loja } = sessao;

  // 1. Verificações de interrupção
  const algumProdutoAcabouEPara = loja.estoque.some(p => p.estoque <= 0 && p.pararSeAcabar && p.ativo);
  const estoqueGeralAcabou = loja.estoque.every(p => p.estoque <= 0);

  if (algumProdutoAcabouEPara || estoqueGeralAcabou) {
    return false; // Indica que a simulação deve parar
  }

  const forcaDeVendaEquipe = loja.funcionarios.reduce((acc, f) => acc + f.habilidade / 100, 0);

  for (const produto of loja.estoque) {
    if (produto.estoque <= 0 || !produto.ativo) continue;

    // Cálculo da Regra de Venda para o mês atual
    const regraMes = produto.regrasDeVenda.regras.find(r => r.mes === mesAtual);
    const multiplicadorBase = regraMes ? regraMes.multiplicador : produto.regrasDeVenda.multiplicador;

    // Lógica de preço
    let fatorPreco = Math.pow(produto.precoDeMercado / produto.valorDeVenda, 2);
    if (fatorPreco > 3) fatorPreco = 3;

    const variacao = Math.random() + 0.7;
    const potencialVenda = (multiplicadorBase * fatorPreco * forcaDeVendaEquipe * variacao * 15) | 0; // Arredonda para baixo

    const vendaEfetiva = Math.min(potencialVenda, produto.estoque);

    loja.caixaAtual += produto.valorDeVenda * vendaEfetiva;
    produto.estoque -= vendaEfetiva;
    sessao.markModified('loja.estoque');
    sessao.markModified('loja.caixaAtual');
  }

  return true; // Simulação continua
}