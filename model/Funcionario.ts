import { Schema, InferSchemaType, model, models } from 'mongoose';


export const FuncionarioSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  nome: { type: String, required: true },
  habilidade: { type: Number, required: true },
  salario: { type: Number, required: true },
  dono: { type: Boolean, required: true, default: false }
});


export type Funcionario = InferSchemaType<typeof FuncionarioSchema>;
export const FuncionarioModel = models.Funcionario || model<Funcionario>('Funcionario', FuncionarioSchema, "funcionarios");
