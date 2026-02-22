import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { isAfter, differenceInCalendarDays } from "date-fns";
import { notificar } from "@/functions/notificacoes/notificar";


export function pagarProximaParcelaDoEmprestimo(sessao: Sessao, emprestimo: Emprestimo, dataDePagamento: Date): boolean {
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
    notificar(sessao, "Bulobanco", `Saldo insuficiente: Não foi possível pagar a parcela ${parcelaPendente.numero}!`)
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

  if (todasPagas) notificar(sessao, "Bulobanco", "Empréstimo quitado!");
  else notificar(sessao, "Bulobanco", "Empréstimo: Parcela paga com sucesso!");

  return true;
}
