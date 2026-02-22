import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { notificar } from "@/functions/notificacoes/notificar";
import { calcularValorParcela } from "@/functions/emprestimo/simular/calcularValorParcela";

export function pagarProximaParcelaDoEmprestimo(sessao: Sessao, emprestimo: Emprestimo, dataDePagamento: Date): boolean {
  // 1. Encontra a primeira parcela pendente
  const parcelaPendente = emprestimo.parcelas.find(p => !p.pagamento?.dataPagamento);

  if (!parcelaPendente) return false;

  // 2. Calcula o valor usando o motor (trata atraso ou antecipação)
  const info = calcularValorParcela(
    emprestimo.contrato.valorDaParcela,
    emprestimo.contrato.taxaJuros,
    parcelaPendente.dataVencimento,
    dataDePagamento
  );

  // 3. Verificação de saldo
  if (sessao.loja.caixaAtual < info.valorFinal) {
    emprestimo.status = 'ATRASADO';
    notificar(sessao, "Bulobanco", `Saldo insuficiente para pagar a parcela ${parcelaPendente.numero}!`);
    return false;
  }

  // 4. Efetivação do pagamento
  sessao.loja.caixaAtual -= info.valorFinal;
  parcelaPendente.pagamento = {
    dataPagamento: dataDePagamento,
    valorPago: info.valorFinal
  };

  // 5. Atualização de status e notificação
  const todasPagas = emprestimo.parcelas.every(p => p.pagamento?.dataPagamento);
  emprestimo.status = todasPagas ? 'QUITADO' : 'ATIVO';

  const mensagem = todasPagas 
    ? "Empréstimo quitado!" 
    : `Parcela ${parcelaPendente.numero} paga com sucesso!${info.desconto > 0 ? ` (Economia de R$ ${info.desconto.toFixed(2)})` : ''}`;

  notificar(sessao, "Bulobanco", mensagem);

  return true;
}