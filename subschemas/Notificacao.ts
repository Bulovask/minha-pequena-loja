import { Schema, InferSchemaType } from 'mongoose';


export const NotificacaoSchema = new Schema({
  app: { type: String, required: true },
  mensagem: { type: String, required: true },
  data: { type: Date, required: true }
}, { _id: false });


export type Notificacao = InferSchemaType<typeof NotificacaoSchema>;