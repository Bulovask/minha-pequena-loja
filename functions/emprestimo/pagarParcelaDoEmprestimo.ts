import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";


export function pagarParcelaDoEmprestimo(sessao: Sessao, emprestimo: Emprestimo, dataDePagamento: Date): boolean {
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
