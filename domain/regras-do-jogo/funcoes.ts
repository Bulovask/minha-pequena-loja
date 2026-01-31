import { addDays } from "date-fns"
import { EstadoAtual } from "./interfaces";

import { _avancarDias, _pagarDespesas, _vender } from "./funcoes-auxiliares"

export function proximoTurno(estadoAtual: EstadoAtual, dias: number) {
  estadoAtual.mensagensRecentes = [];

  const diasRestantes = _vender(estadoAtual, dias);

  for (let i = 0; i < dias - diasRestantes; i++) {
    const dataSimulada = addDays(new Date(estadoAtual.data), i);
    if (dataSimulada.getDate() == 28) _pagarDespesas(estadoAtual, dataSimulada);
  }

  _avancarDias(estadoAtual, dias - diasRestantes);
}