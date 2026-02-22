import { addDays } from "date-fns";
import { Sessao } from "@/model/Sessao";

export function vender(sessao: Sessao, dias: number) {
  const { loja } = sessao;
  const forcaDeVendaEquipe = loja.funcionarios.reduce((acc, f) => acc + f.habilidade, 0);

  const regrasPorProduto = loja.estoque.map(p => {
    const mapa: number[] = [];
    p.regrasDeVenda.regras.forEach(r => mapa[r.mes] = r.multiplicador);
    return mapa;
  });

  for (let i = 0; i < dias; i++) {
    const dataSimulada = addDays(sessao.data, i);
    const mesAtual = dataSimulada.getMonth();

    const algumProdutoAcabou = loja.estoque.some(p => p.estoque <= 0 && p.pararSeAcabar);
    const estoqueAcabou = loja.estoque.every(p => p.estoque <= 0);

    // if (algumProdutoAcabou || estoqueAcabou) return dias - i;

    for (let j = 0; j < loja.estoque.length; j++) {
      const produto = loja.estoque[j];
      if (produto.estoque <= 0) continue;

      const precoSugerido = produto.precoDeMercado;
      const precoJogador = produto.valorDeVenda;

      let fatorPreco = Math.pow(precoSugerido / precoJogador, 2);
      if (fatorPreco > 3) fatorPreco = 3;

      const multiplicadorBase = regrasPorProduto[j][mesAtual] || produto.regrasDeVenda.multiplicador;
      const multiplicadorFinal = multiplicadorBase * fatorPreco;

      const variacao = Math.random() + 0.7;
      const potencialVenda = (multiplicadorFinal * forcaDeVendaEquipe * variacao * 15) | 0;

      const vendaEfetiva = Math.min(potencialVenda, produto.estoque);

      loja.caixaAtual += produto.valorDeVenda * vendaEfetiva;
      produto.estoque -= vendaEfetiva;
    };
  }
  return 0;
}