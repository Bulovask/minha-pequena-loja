import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { isAfter, differenceInCalendarDays } from "date-fns";
import { notificar } from "@/functions/notificacoes/notificar";

export function pagarPrimeirasParcelasDoEmprestimo(
  sessao: Sessao, 
  emprestimo: Emprestimo, 
  quantidade: number
): boolean {
  // 1. Pega as parcelas não pagas na ordem correta
  const pendentes = emprestimo.parcelas
    .filter(p => !p.pagamento?.dataPagamento)
    .sort((a, b) => a.numero - b.numero);

  if (pendentes.length === 0) return false;

  const parcelasParaProcessar = pendentes.slice(0, quantidade);
  let totalProcessado = 0;

  for (const parcela of parcelasParaProcessar) {
    const valorBase = emprestimo.contrato.valorDaParcela;
    let valorFinalACobrar = valorBase;

    // Cálculo de Atraso
    const diasDeAtraso = differenceInCalendarDays(sessao.data, parcela.dataVencimento);
    if (diasDeAtraso > 0) {
      const multaFixa = valorBase * 0.02;
      const jurosDiarios = valorBase * (0.005 * diasDeAtraso);
      const encargos = Math.min(multaFixa + jurosDiarios, valorBase * 0.50);
      valorFinalACobrar += encargos;
    }

    valorFinalACobrar = Math.round(valorFinalACobrar * 100) / 100;

    // --- REGRA DE OURO PARA EMPRÉSTIMO ---
    // Se o caixa não cobre a parcela, interrompemos o loop aqui.
    if (sessao.loja.caixaAtual < valorFinalACobrar) {
      emprestimo.status = 'ATRASADO';
      notificar(sessao, "Bulobanco", `Saldo insuficiente para pagar a parcela ${parcela.numero}.`);
      break; // Para de tentar pagar as próximas
    }

    // Efetiva o pagamento
    sessao.loja.caixaAtual -= valorFinalACobrar;
    parcela.pagamento = {
      dataPagamento: sessao.data,
      valorPago: valorFinalACobrar
    };
    
    totalProcessado++;
  }

  // Atualiza status final do empréstimo
  const todasPagas = emprestimo.parcelas.every(p => p.pagamento?.dataPagamento);
  if (todasPagas) {
    emprestimo.status = 'QUITADO';
    notificar(sessao, "Bulobanco", "Empréstimo finalizado!");
  } else if (totalProcessado > 0) {
    emprestimo.status = 'ATIVO';
    notificar(sessao, "Bulobanco", `${totalProcessado} parcela(s) paga(s).`);
  }

  return totalProcessado > 0;
}