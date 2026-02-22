import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { notificar } from "@/functions/notificacoes/notificar";
import { calcularValorParcela } from "@/functions/emprestimo/simular/calcularValorParcela";

export function pagarUltimasParcelasDoEmprestimo(
  sessao: Sessao,
  emprestimo: Emprestimo,
  quantidade: number
): boolean {
  // 1. Filtra do FINAL para o INÍCIO
  const pendentes = emprestimo.parcelas
    .filter(p => !p.pagamento?.dataPagamento)
    .sort((a, b) => b.numero - a.numero);

  if (pendentes.length === 0) return false;

  const parcelasParaAmortizar = pendentes.slice(0, quantidade);
  let totalProcessado = 0;
  let economiaTotal = 0;

  for (const parcela of parcelasParaAmortizar) {
    // 2. Reaproveita o mesmo motor de cálculo
    const info = calcularValorParcela(
      emprestimo.contrato.valorDaParcela,
      emprestimo.contrato.taxaJuros,
      parcela.dataVencimento,
      sessao.data
    );

    // 3. Verificação de saldo (Empréstimo nunca deixa o saldo negativo)
    if (sessao.loja.caixaAtual < info.valorFinal) {
      notificar(sessao, "Bulobanco", `Saldo insuficiente para amortizar a parcela ${parcela.numero}.`);
      break;
    }

    // 4. Efetivação
    sessao.loja.caixaAtual -= info.valorFinal;
    economiaTotal += info.desconto;
    
    parcela.pagamento = {
      dataPagamento: sessao.data,
      valorPago: info.valorFinal
    };

    totalProcessado++;
  }

  // 5. Atualiza status e notifica (reaproveitando a lógica de mensagens)
  if (totalProcessado > 0) {
    const todasPagas = emprestimo.parcelas.every(p => p.pagamento?.dataPagamento);
    emprestimo.status = todasPagas ? 'QUITADO' : 'ATIVO';

    notificar(
      sessao,
      "Bulobanco",
      `Amortização: ${totalProcessado} parcelas finais pagas. Economia de R$ ${economiaTotal.toFixed(2)}!`
    );
    
    if (todasPagas) notificar(sessao, "Bulobanco", "Empréstimo quitado com sucesso!");
  }

  return totalProcessado > 0;
}