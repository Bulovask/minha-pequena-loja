import { Schema, model, models, InferSchemaType } from 'mongoose';
import { ProdutoSchema } from '@/subschemas/Produto';

const FornecedorSchema = new Schema({
  nome: { type: String, required: true },
  tempoDeEntrega: { type: Number, required: true },
  produtos: [ProdutoSchema],
});


export type Fornecedor = InferSchemaType<typeof FornecedorSchema>
export const FornecedorModel = models.Fornecedor || model<Fornecedor>('Fornecedor', FornecedorSchema, "fornecedores");