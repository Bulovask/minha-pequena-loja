import { Sessao } from "@/model/Sessao";
import { addDays } from "date-fns";


export function avancarDias(sessao: Sessao, dias: number) {
  sessao.data = addDays(sessao.data, dias)
}