import { Schema, InferSchemaType } from 'mongoose';
import { RegrasDeVendaSchema } from './RegrasDeVenda';

export const ProdutoSchema = new Schema({
  nome: { type: Number, required: true },
  custoDeObtencao: { type: Number, required: true },
  precoDeMercado: { type: Number, required: true },
  valorDeVenda: { type: Number, required: true },
  estoque: { type: Number, required: true },
  pararSeAcabar: { type: Boolean, required: true },

  regrasDeVenda: { type: RegrasDeVendaSchema, required: true }
}, { _id: false });


export type Produto = InferSchemaType<typeof ProdutoSchema>;