import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { notificar } from "../notificacoes/notificar";

// Sub-função para limpar ainda mais o código
export function atualizarStatusEmprestimo(sessao: Sessao, emprestimo: Emprestimo, total: number, economia: number) {
  const todasPagas = emprestimo.parcelas.every(p => p.pagamento?.dataPagamento);
  emprestimo.status = todasPagas ? 'QUITADO' : 'ATIVO';

  if (total > 0) {
    let msg = `${total} parcela(s) paga(s).`;
    if (economia > 0) msg += ` Economia de R$ ${economia.toFixed(2)} por antecipação.`;
    notificar(sessao, "Bulobanco", msg);
    if (todasPagas) notificar(sessao, "Bulobanco", "Empréstimo finalizado!");
  }
}