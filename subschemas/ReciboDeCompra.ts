import { Schema, InferSchemaType } from 'mongoose';
import { ProdutoSimplificadoSchema } from './ProdutoSimplificado';


export const ReciboDeCompraSchema = new Schema({
  dataCompra: { type: Date, required: true },
  dataEntrega: { type: Date, required: true },
  entregue: { type: Boolean, default: false }, // Para não precisar deletar o recibo
  
  // Usamos o simplificado para economizar KB de dados
  produto: { type: ProdutoSimplificadoSchema, required: true }, 
  
  fornecedor: { type: Schema.Types.ObjectId, ref: 'Fornecedor' },
  nomeLoja: { type: String, required: true },
}, { _id: false });

export type ReciboDeCompra = InferSchemaType<typeof ReciboDeCompraSchema>;