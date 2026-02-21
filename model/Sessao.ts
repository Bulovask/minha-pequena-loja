import { Schema, model, models, InferSchemaType } from 'mongoose';
import { LojaSchema } from "@/subschemas/Loja";


const SessaoSchema = new Schema({
  ativo: { type: Boolean, required: true, default: true },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
  loja: { type: LojaSchema, required: true },
  data: { type: Date, required: true }
}, {minimize: false});


export type Sessao = InferSchemaType<typeof SessaoSchema>;
export const sessaoModel = models.Sessao || model<Sessao>("Sessao", SessaoSchema, "sessoes");