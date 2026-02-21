import { addDays, format } from "date-fns"
import { Sessao } from "@/model/Sessao";
import { Parcela } from "@/subschemas/Parcela";
import { Emprestimo } from "@/subschemas/Emprestimo";


export function _pagarParcelaDoEmprestimo(sessao: Sessao, emprestimo: Emprestimo, dataDePagamento: Date): boolean {
  const parcelaPendente = emprestimo.parcelas.find(p => !p.pagamento?.dataPagamento);

  if (!parcelaPendente) return false;

  if (parcelaPendente.dataVencimento > dataDePagamento) {
    return false;
  }

  const valorBase = emprestimo.contrato.valorDaParcela;
  let valorFinalACobrar = valorBase;

  if (dataDePagamento > parcelaPendente.dataVencimento) {
    const milissegundosPorDia = 1000 * 60 * 60 * 24;
    const diferencaTempo = dataDePagamento.getTime() - parcelaPendente.dataVencimento.getTime();
    const diasDeAtraso = Math.ceil(diferencaTempo / milissegundosPorDia);

    if (diasDeAtraso > 0) {
      const multaFixa = valorBase * 0.02;
      const jurosDiarios = valorBase * (0.005 * diasDeAtraso);
      valorFinalACobrar = valorBase + multaFixa + jurosDiarios;
    }
  }

  if (sessao.loja.caixaAtual < valorFinalACobrar) {
    emprestimo.status = 'ATRASADO';
    return false;
  }

  valorFinalACobrar = Math.round(valorFinalACobrar * 100) / 100;
  sessao.loja.caixaAtual -= valorFinalACobrar;

  parcelaPendente.pagamento = {
    dataPagamento: dataDePagamento,
    valorPago: valorFinalACobrar
  };

  const todasPagas = emprestimo.parcelas.every(p => p.pagamento?.dataPagamento);
  emprestimo.status = todasPagas ? 'QUITADO' : 'ATIVO';

  return true;
}



export function _pagarDespesas(sessao: Sessao, dataDePagamento: Date) {
  const { loja } = sessao;
  const { contas } = loja;

  if (contas && contas.agua && contas.energia && contas.internet)
    loja.caixaAtual -= (contas.agua + contas.energia + contas.internet);

  loja.funcionarios.forEach(funcionario => loja.caixaAtual -= funcionario.salario);

  loja.emprestimos.forEach(emprestimoDoc => {
    const emprestimo = emprestimoDoc as unknown as Emprestimo;

    if (emprestimo.status !== 'QUITADO') {
      let pagou = _pagarParcelaDoEmprestimo(sessao, emprestimo, dataDePagamento);

      while (pagou && (emprestimo.status as string) !== 'QUITADO') {
        pagou = _pagarParcelaDoEmprestimo(sessao, emprestimo, dataDePagamento);
      }

    }
  });
}
export function _vender(sessao: Sessao, dias: number) {
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

export function _avancarDias(sessao: Sessao, dias: number) {
  sessao.data = addDays(sessao.data, dias)
}