import { Schema, InferSchemaType } from 'mongoose';
import { EmprestimoSchema } from "@/subschemas/Emprestimo";
import { FuncionarioSchema } from './Funcionario';
import { ProdutoSchema } from './Produto';
import { ReciboDeCompraSchema } from './ReciboDeCompra';

export const LojaSchema = new Schema({
  inaugurada: {type: Boolean, default: false},
  nome: { type: String, required: true },
  
  caixaAtual: {type: Number, required: true},
  emprestimos: [{type: EmprestimoSchema}],
  contas: {
    energia: Number,
    agua: Number,
    internet: Number
  },

  funcionarios: [FuncionarioSchema],
  estoque: [ProdutoSchema],

  reciboDeCompras: [ReciboDeCompraSchema]
}, 
{ _id: false });


export type Loja = InferSchemaType<typeof LojaSchema>;