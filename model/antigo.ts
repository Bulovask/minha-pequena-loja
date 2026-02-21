import { Fornecedor, Funcionario } from '../domain/regras-do-jogo/interfaces';
import mongoose, { Schema } from 'mongoose';
import { Sessao, RegrasDeVenda, Produto, Loja, Emprestimo, ParcelaAberta, ParcelaPaga, PedidoDeEmprestimo, ReciboDeCompra } from '@/domain/regras-do-jogo/interfaces';

// OK
const RegraDeVendaSchema = new Schema<RegrasDeVenda>({
  multiplicador: { type: Number, required: true, default: 1 },
  regras: [{
    mes: { type: Number, required: true },
    multiplicador: { type: Number, required: true }
  }]
}, { _id: false });

// OK
const ProdutoSchema = new Schema<Produto>({
  nome: String,
  custoDeObtencao: Number,
  precoDeMercado: Number,
  valorDeVenda: Number,
  estoque: Number,
  pararSeAcabar: Boolean,
  regrasDeVenda: RegraDeVendaSchema
});

// OK
const ParcelaAbertaSchema = new Schema<ParcelaAberta>({
  data: Date,
  valor: Number
});

const ParcelaPagaSchema = new Schema<ParcelaPaga>({

});

// OK
const PedidoDeEmprestimoSchema = new Schema<PedidoDeEmprestimo>({
  valor: Number,
  juros: Number,
  parcelas: Number
});

// OK
const EmprestimoSchema = new Schema<Emprestimo>({
  parcelasAbertas: [ParcelaAbertaSchema],
  parcelasPagas: [ParcelaPagaSchema],
  contrato: {
    type: {
      dataDeContratacao: Date,
      pedido: PedidoDeEmprestimoSchema,
      valorTotal: Number,
      valorDasParcelas: Number,
    }, require: true
  }
});

const ReciboDeCompraSchema = new Schema<ReciboDeCompra>({
  dataCompra: Date,
  dataEntrega: Date,
  produto: ProdutoSchema,
  fornecedor: {
    type: Schema.Types.ObjectId,
    ref: 'Fornecedor'
  },
  loja: {
    type: Schema.Types.ObjectId,
    ref: 'Sessao.loja'
  }
});

const FuncionarioSchema = new Schema<Funcionario>({

});

// OK
const LojaSchema = new Schema<Loja>({
  nome: String,
  caixaAtual: Number,
  estoque: [{ type: ProdutoSchema }],
  emprestimos: [EmprestimoSchema],
  contas: {
    energia: { type: Number },
    agua: { type: Number },
    internet: { type: Number }
  },
  funcionarios: [{ type: FuncionarioSchema }],
  recibosDeCompras: [ReciboDeCompraSchema],
  percentualDeAjusteDePrecos: { type: Number }
});

// OK
const SessaoSchema = new Schema<Sessao>({
  loja: { type: LojaSchema, required: true },
  data: { type: Date, required: true, default: new Date(2015, 1, 1) },

  logs: [{ type: Schema.Types.Mixed, default: {} }],

  mensagensRecentes: [{
    id: { type: Number, required: true },
    args: { type: Schema.Types.Mixed, default: {} }
  }]
});

export default mongoose.models.Sessao || mongoose.model<Sessao>('Sessao', SessaoSchema);
