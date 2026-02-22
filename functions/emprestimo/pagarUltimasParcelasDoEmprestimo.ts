import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { notificar } from "@/functions/notificacoes/notificar";
import { differenceInCalendarDays } from "date-fns";

export function pagarUltimasParcelasDoEmprestimo(
  sessao: Sessao,
  emprestimo: Emprestimo,
  quantidade: number
): boolean {
  // 1. Filtra parcelas não pagas e ordena do FINAL para o INÍCIO (ex: 12, 11, 10...)
  const pendentes = emprestimo.parcelas
    .filter(p => !p.pagamento?.dataPagamento)
    .sort((a, b) => b.numero - a.numero);

  if (pendentes.length === 0) return false;

  const parcelasParaAmortizar = pendentes.slice(0, quantidade);
  let totalProcessado = 0;
  let economiaTotal = 0;


  for (const parcela of parcelasParaAmortizar) {
  // 1. Definição das bases para o cálculo
  const valorBase = emprestimo.contrato.valorDaParcela;
  const taxaMensal = emprestimo.contrato.taxaJuros; 
  const dataVencimento = parcela.dataVencimento;
  const hoje = sessao.data;

  // 2. Cálculo do tempo e do desconto dinâmico (Valor Presente)
  const diasDeAntecipacao = differenceInCalendarDays(dataVencimento, hoje);
  const mesesDeAntecipacao = diasDeAntecipacao / 30;

  // Fórmula: VP = VF / (1 + (i * t))
  // Isso remove exatamente os juros que ainda iriam decorrer
  const valorPresente = valorBase / (1 + (taxaMensal * mesesDeAntecipacao));

  const valorComDesconto = Math.round(valorPresente * 100) / 100;
  const economiaNestaParcela = valorBase - valorComDesconto;

  // 3. Verificação de saldo
  if (sessao.loja.caixaAtual < valorComDesconto) {
    notificar(sessao, "Bulobanco", `Saldo insuficiente para amortizar a parcela ${parcela.numero}.`);
    break;
  }

  // 4. Efetivação do pagamento
  sessao.loja.caixaAtual -= valorComDesconto;
  economiaTotal += economiaNestaParcela; // Agora usa a economia real calculada

  parcela.pagamento = {
    dataPagamento: hoje,
    valorPago: valorComDesconto
  };

  totalProcessado++;
}


  // Atualização de Status
  const todasPagas = emprestimo.parcelas.every(p => p.pagamento?.dataPagamento);
  emprestimo.status = todasPagas ? 'QUITADO' : 'ATIVO';

  if (totalProcessado > 0) {
    notificar(
      sessao,
      "Bulobanco",
      `Amortização: ${totalProcessado} parcelas finais pagas. Você economizou R$ ${economiaTotal.toFixed(2)} em juros!`
    );
  }

  return totalProcessado > 0;
}