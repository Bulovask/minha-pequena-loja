import { Schema, InferSchemaType } from 'mongoose';


export const ParcelaSchema = new Schema({
  numero: { type: Number, required: true },
  dataVencimento: { type: Date, required: true },
  valorOriginal: { type: Number, required: true },

  pagamento: {
    dataPagamento: Date,
    valorPago: Number,
  }
}, { _id: false });


export type Parcela = InferSchemaType<typeof ParcelaSchema>;