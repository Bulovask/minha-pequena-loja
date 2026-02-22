import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { pagarProximaParcelaDoEmprestimo } from "../emprestimo/pagarProximaParcelaDoEmprestimo";
import { notificar } from "../notificacoes/notificar";

export function pagarDespesas(sessao: Sessao, dataDePagamento: Date) {
  const { loja } = sessao;
  const { contas } = loja;

  if (contas) {
    const debito = ((contas.agua || 0) + (contas.energia || 0) + (contas.internet || 0));
    if (debito > 0) {
      loja.caixaAtual -= debito;
      notificar(
        sessao, "Bulobanco", 
        `Pagamento confirmado: R$ ${debito.toFixed(2)} referente às suas contas de consumo (Água, Luz e Internet).`
      );
    }
  }

  let totalPagoEmSalarios = 0;
  loja.funcionarios.forEach(funcionario => {
    totalPagoEmSalarios += funcionario.salario;
    loja.caixaAtual -= funcionario.salario;
  });
  notificar(sessao, "Store Manager", `Folha de Pagamento: R$ ${totalPagoEmSalarios.toFixed(2)} debitados. Todos os colaboradores foram remunerados.`);

  loja.emprestimos.forEach(emprestimoDoc => {
    const emprestimo = emprestimoDoc as unknown as Emprestimo;

    if (emprestimo.status !== 'QUITADO') {
      let pagou = pagarProximaParcelaDoEmprestimo(sessao, emprestimo, dataDePagamento);

      while (pagou && (emprestimo.status as string) !== 'QUITADO') {
        pagou = pagarProximaParcelaDoEmprestimo(sessao, emprestimo, dataDePagamento);
      }
    }
  });
}