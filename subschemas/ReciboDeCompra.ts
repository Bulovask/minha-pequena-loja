import { Schema, InferSchemaType } from 'mongoose';
import { ProdutoSchema } from './Produto';


export const ReciboDeCompraSchema = new Schema({
  dataCompra: { type: Date, required: true },
  dataEntrega: { type: Date, required: true },
  produto: { type: ProdutoSchema, required: true },
  fornecedor: { type: Schema.Types.ObjectId, ref: 'Fornecedor' },
  nomeLoja: { type: String, required: true },
}, { _id: false });


export type ReciboDeCompra = InferSchemaType<typeof ReciboDeCompraSchema>;