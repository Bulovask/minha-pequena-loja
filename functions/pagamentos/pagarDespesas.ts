import { Sessao } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { pagarParcelaDoEmprestimo } from "../emprestimo/pagarParcelaDoEmprestimo";

export function pagarDespesas(sessao: Sessao, dataDePagamento: Date) {
  const { loja } = sessao;
  const { contas } = loja;

  if (contas )
    loja.caixaAtual -= ((contas.agua || 0) + (contas.energia || 0) + (contas.internet || 0));

  loja.funcionarios.forEach(funcionario => loja.caixaAtual -= funcionario.salario);

  loja.emprestimos.forEach(emprestimoDoc => {
    const emprestimo = emprestimoDoc as unknown as Emprestimo;

    if (emprestimo.status !== 'QUITADO') {
      let pagou = pagarParcelaDoEmprestimo(sessao, emprestimo, dataDePagamento);

      while (pagou && (emprestimo.status as string) !== 'QUITADO') {
        pagou = pagarParcelaDoEmprestimo(sessao, emprestimo, dataDePagamento);
      }

    }
  });
}