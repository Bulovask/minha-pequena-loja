import { Sessao } from "@/model/Sessao";
import { Notificacao } from "@/subschemas/Notificacao";

export function notificar(sessao: Sessao, app: string, mensagem: string) {
  const notificacao: Notificacao = {
    data: sessao.data,
    app, mensagem
  }
  
  sessao.notificacoes.push(notificacao);
}