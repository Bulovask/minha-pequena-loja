// @/subschemas/ProdutoSimplificado.ts
import { Schema } from 'mongoose';

export const ProdutoSimplificadoSchema = new Schema({
  _id: { type: String, required: true },
  nome: { type: String, required: true },
  custoDeObtencao: { type: Number, required: true },
  estoque: { type: Number, required: true }, // Aqui representa a quantidade comprada
}, { _id: false });