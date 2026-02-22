import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { notificar } from "@/functions/notificacoes/notificar";
import { calcularValorParcela } from "./simular/calcularValorParcela";


export function pagarPrimeirasParcelasDoEmprestimo(sessao: Sessao, emprestimo: Emprestimo, quantidade: number): boolean {
  const pendentes = emprestimo.parcelas
    .filter(p => !p.pagamento?.dataPagamento)
    .sort((a, b) => a.numero - b.numero);

  if (pendentes.length === 0) return false;

  const parcelasParaProcessar = pendentes.slice(0, quantidade);
  let totalProcessado = 0;
  let economiaTotal = 0;

  for (const parcela of parcelasParaProcessar) {
    // Chamada do motor de cálculo
    const info = calcularValorParcela(
      emprestimo.contrato.valorDaParcela,
      emprestimo.contrato.taxaJuros,
      parcela.dataVencimento,
      sessao.data
    );

    if (sessao.loja.caixaAtual < info.valorFinal) {
      emprestimo.status = 'ATRASADO';
      notificar(sessao, "Bulobanco", `Saldo insuficiente para a parcela ${parcela.numero}.`);
      break; 
    }

    // Aplicação
    sessao.loja.caixaAtual -= info.valorFinal;
    economiaTotal += info.desconto;
    parcela.pagamento = { dataPagamento: sessao.data, valorPago: info.valorFinal };
    totalProcessado++;
  }

  atualizarStatusEmprestimo(sessao, emprestimo, totalProcessado, economiaTotal);
  return totalProcessado > 0;
}





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