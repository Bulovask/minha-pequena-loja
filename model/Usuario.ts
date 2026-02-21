import { Schema, model, models, InferSchemaType } from 'mongoose';


const UsuarioSchema = new Schema({
  ativo: { type: Boolean, required: true, default: true },
  nome: { type: String, required: true },
  anoEscolar: { type: String, required: true },
  turma: { type: String, required: true },
}, { minimize: false });


export type Usuario = InferSchemaType<typeof UsuarioSchema>
export const usuarioModel = models.Usuario || model<Usuario>('Usuario', UsuarioSchema, "usuarios");