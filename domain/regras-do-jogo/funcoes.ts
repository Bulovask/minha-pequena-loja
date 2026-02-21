import { addDays, addMonths, isBefore, setDate } from "date-fns"
import { _avancarDias, _pagarDespesas, _vender } from "./funcoes-auxiliares"

export function proximoTurno(estadoAtual: Sessao, dias: number) {
  const diasRestantes = _vender(estadoAtual, dias);

  for (let i = 0; i < dias - diasRestantes; i++) {
    const dataSimulada = addDays(new Date(estadoAtual.data), i);
    if (dataSimulada.getDate() == 28) _pagarDespesas(estadoAtual, dataSimulada);
  }

  _avancarDias(estadoAtual, dias - diasRestantes);
}

export function pagarUltimaParcela(estadoAtual: Sessao) {

}