import { addDays, format } from "date-fns"
import { EstadoAtual } from "./interfaces";
import { mensagens } from "./mensagens";

export function _pagarDespesas(estadoAtual: EstadoAtual, dataDePagamento: Date) {
  const { loja, mensagensRecentes: msgs } = estadoAtual;
  const { contas } = loja;

  loja.caixaAtual -= (contas.agua + contas.energia + contas.internet);
  msgs.push({ id: mensagens.contasPagas.id, args: { data: format(dataDePagamento, "dd/MM/yyy") } });

  loja.funcionarios.forEach(funcionario => { loja.caixaAtual -= funcionario.salario });
  if (loja.funcionarios.length > 0)
    msgs.push({ id: mensagens.salariosPagos.id, args: {} });

  loja.emprestimos.forEach(emprestimo => {
    if (emprestimo.numeroDeParcelas > 0) {
      emprestimo.numeroDeParcelas--;
      emprestimo.valor -= emprestimo.valorParcela;
      loja.caixaAtual -= emprestimo.valorParcela;

      const dataDeContratacao = format(emprestimo.dataDeContratacao, "dd/MM/yyy");
      const zerou = emprestimo.numeroDeParcelas <= 0;
      if (zerou) msgs.push({ id: mensagens.emprestimoPago.id, args: { data: dataDeContratacao } });
      else msgs.push({ id: mensagens.parcelaDoEmprestimoPaga.id, args: { data: dataDeContratacao } });
    }
  });
}

export function _vender(estadoAtual: EstadoAtual, dias: number) {
  const { loja, mensagensRecentes: msgs } = estadoAtual;
  const forcaDeVendaEquipe = loja.funcionarios.reduce((acc, f) => acc + f.habilidade, 0);
  
  const regrasPorProduto = loja.estoque.map(p => {
    const mapa: number[] = [];
    p.funcaoDeVenda.regras.forEach(r => mapa[r.mes] = r.multiplicador);
    return mapa;
  });

  for (let i = 0; i < dias; i++) {
    const dataSimulada = addDays(estadoAtual.data, i);
    const mesAtual = dataSimulada.getMonth();

    const algumProdutoAcabou = loja.estoque.some(p => p.estoque <= 0 && p.pararSeAcabar);
    const estoqueAcabou = loja.estoque.every(p => p.estoque <= 0);

    if (algumProdutoAcabou) msgs.push({ id: mensagens.estoqueZerado.id, args: {} });
    if (estoqueAcabou) msgs.push({ id: mensagens.todosProdutosEsgotados.id, args: {} });
    if (algumProdutoAcabou || estoqueAcabou) return dias - i;

    for (let j = 0; j < loja.estoque.length; j++) {
      const produto = loja.estoque[j];
      if (produto.estoque <= 0) continue;

      const precoSugerido = produto.precoDeMercado;
      const precoJogador = produto.valorDeVenda;

      let fatorPreco = Math.pow(precoSugerido / precoJogador, 2);
      if (fatorPreco > 3) fatorPreco = 3;

      const multiplicadorBase = regrasPorProduto[j][mesAtual] || produto.funcaoDeVenda.multiplicador;
      const multiplicadorFinal = multiplicadorBase * fatorPreco;

      const variacao = Math.random() + 0.7;
      const potencialVenda = Math.round(multiplicadorFinal * forcaDeVendaEquipe * variacao * 15);

      const vendaEfetiva = Math.min(potencialVenda, produto.estoque);

      loja.caixaAtual += produto.valorDeVenda * vendaEfetiva;
      produto.estoque -= vendaEfetiva;
    };
  }
  return 0;
}

export function _avancarDias(estadoAtual: EstadoAtual, dias: number) {
  estadoAtual.data = addDays(estadoAtual.data, dias)
}

export function _calcularEmprestimo(estadoAtual: EstadoAtual, valor: number, numeroDeParcelas: number) {
  const jurosMensal = 0.0183; // 1.83% ao mês
  const valorComJuros = valor * Math.pow((1 + jurosMensal), numeroDeParcelas);
  const valorParcela = valorComJuros / numeroDeParcelas;

  estadoAtual.loja.emprestimos.push({
    id: (Math.random() * 1000000).toFixed(0),
    valor: valorComJuros,
    jurosMensal,
    valorParcela,
    numeroDeParcelas,
    dataDeContratacao: estadoAtual.data
  });
}