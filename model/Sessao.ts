import { Schema, model, models, InferSchemaType } from 'mongoose';
import { LojaSchema } from "@/subschemas/Loja";
import { NotificacaoSchema } from "@/subschemas/Notificacao";


const SessaoSchema = new Schema({
  ativo: { type: Boolean, required: true, default: true },
  data: { type: Date, required: true },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  loja: { type: LojaSchema, required: true },
  notificacoes: [NotificacaoSchema]
}, {minimize: false});


export type Sessao = InferSchemaType<typeof SessaoSchema>;
export const sessaoModel = models.Sessao || model<Sessao>("Sessao", SessaoSchema, "sessoes");