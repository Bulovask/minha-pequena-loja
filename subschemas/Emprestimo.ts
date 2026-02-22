import { Schema, InferSchemaType } from 'mongoose';
import { ParcelaSchema } from './Parcela';


export const EmprestimoSchema = new Schema({
  contrato: {
    type: {
      _id: { type: Schema.Types.ObjectId, auto: true, unique: true },
      dataContratacao: { type: Date, default: Date.now },
      valorEmprestado: { type: Number, required: true },
      taxaJuros: { type: Number, required: true },
      totalParcelas: { type: Number, required: true },
      valorDaParcela: { type: Number, required: true },
      valorTotalAReceber: { type: Number, required: true }
    }, required: true
  },
  parcelas: [ParcelaSchema],
  status: {
    type: String,
    enum: ['ATIVO', 'ATRASADO', 'QUITADO'],
    default: 'ATIVO'
  }
}, { _id: false });

export type Emprestimo = InferSchemaType<typeof EmprestimoSchema>;