import { Schema, InferSchemaType } from 'mongoose';


export const FuncionarioSchema = new Schema({
  nome: { type: String, required: true },
  habilidade: { type: Number, required: true },
  salario: { type: Number, required: true },
  dono: { type: Boolean, required: true, default: false }
}, { _id: false });


export type Funcionario = InferSchemaType<typeof FuncionarioSchema>;