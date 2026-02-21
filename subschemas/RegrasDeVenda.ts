import { Schema, InferSchemaType } from 'mongoose';


export const RegrasDeVendaSchema = new Schema({
  regras: [{
    mes: { type: Number, required: true },
    multiplicador: { type: Number, required: true }
  }],
  multiplicador: { type: Number, required: true },
}, { _id: false });


export type RegrasDeVenda = InferSchemaType<typeof RegrasDeVendaSchema>;