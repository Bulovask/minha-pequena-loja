import { addMonths, isBefore, setDate } from "date-fns";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { Sessao } from "@/model/Sessao";
import { notificar } from "../notificacoes/notificar";
import { Types } from "mongoose";

export function pedirEmprestimo(sessao: Sessao, valor: number, juros: number, parcelas: number) {
  const P = valor;
  const i = juros;
  const n = parcelas;
  
  const pmtBruto = P * ((i * (1 + i) ** n) / ((1 + i) ** n - 1));
  const PMT = Math.round(pmtBruto * 100) / 100;

  const emprestimo: unknown = {
    contrato: {
      _id: new Types.ObjectId(),
      dataContratacao: new Date(sessao.data),
      valorEmprestado: valor,
      taxaJuros: juros,
      totalParcelas: n,
      valorDaParcela: PMT,
      valorTotalAReceber: Math.round(PMT * n * 100) / 100
    },
    parcelas: [],
    status: "ATIVO"
  };

  const d = new Date(sessao.data);
  const primeiroPagamento = isBefore(d, setDate(d, 14)) 
    ? setDate(d, 28) 
    : setDate(addMonths(d, 1), 28);

  for (let j = 0; j < n; j++) {
    (emprestimo as Emprestimo).parcelas.push({
      numero: j + 1,
      dataVencimento: addMonths(primeiroPagamento, j),
      valorOriginal: PMT
    });
  }

  sessao.loja.emprestimos.push(emprestimo as Emprestimo);
  sessao.loja.caixaAtual += valor;

  notificar(sessao, "Bulobanco", `Empréstimo efetuado com sucesso o valor de R$ ${valor.toFixed(2)} já está disponível em sua conta.`);

  return emprestimo;
}