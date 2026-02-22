import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { isAfter, differenceInCalendarDays } from "date-fns";


export function pagarParcelaDoEmprestimo(sessao: Sessao, emprestimo: Emprestimo, dataDePagamento: Date): boolean {
  const parcelaPendente = emprestimo.parcelas.find(p => !p.pagamento?.dataPagamento);

  if (!parcelaPendente) return false;

  if (isAfter(parcelaPendente.dataVencimento, dataDePagamento)) {
    return false;
  }

  const valorBase = emprestimo.contrato.valorDaParcela;
  let valorFinalACobrar = valorBase;

  const diasDeAtraso = differenceInCalendarDays(dataDePagamento, parcelaPendente.dataVencimento);

  if (diasDeAtraso > 0) {
    const multaFixa = valorBase * 0.02;
    const jurosDiarios = valorBase * (0.005 * diasDeAtraso);

    let encargos = multaFixa + jurosDiarios;
    const tetoEncargos = valorBase * 0.50;
    if (encargos > tetoEncargos) encargos = tetoEncargos;

    valorFinalACobrar = valorBase + encargos;
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
