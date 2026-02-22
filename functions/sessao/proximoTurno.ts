import { addDays } from "date-fns";
import { Sessao } from "@/model/Sessao";
import { avancarDias } from "./avancarDias";
import { vender } from "../vendas/vender";
import { pagarDespesas } from "../pagamentos/pagarDespesas";

export function proximoTurno(estadoAtual: Sessao, dias: number) {
  const diasRestantes = vender(estadoAtual, dias);

  for (let i = 0; i < dias - diasRestantes; i++) {
    const dataSimulada = addDays(new Date(estadoAtual.data), i);
    if (dataSimulada.getDate() == 28) pagarDespesas(estadoAtual, dataSimulada);
  }

  avancarDias(estadoAtual, dias - diasRestantes);
}