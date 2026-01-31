export interface Usuario {
  id: string;
  nome: string;
  anoEscolar: string;
  turma: string;
  estadoAtual: EstadoAtual
}

export interface EstadoAtual {
  id: string;
  loja: Loja;
  data: Date;
  logs: Log[];
  mensagensRecentes: {
    id: number, args: {
      [key: string]: number | string | boolean
    }
  }[];

  listaDeFuncionarios: Funcionario[];
  listaDeFornecedores: Fornecedor[];
}

export interface Loja {
  id: string;
  nome: string;

  caixaAtual: number;
  emprestimos: Emprestimo[]; // M = C * (1 + i)^t, i = 1.83% ao mês (0.0183)
  contas: {
    energia: number;
    agua: number;
    internet: number;
  }

  funcionarios: Funcionario[];
  fornecedores: Fornecedor[];
  estoque: Produto[];

  recibosDeCompras: ReciboDeCompra[];
  percentualDeAjusteDePrecos: number;
}

export interface Emprestimo {
  id: string;
  valor: number;
  jurosMensal: number;
  valorParcela: number;
  numeroDeParcelas: number;
  dataDeContratacao: Date;
}

export interface Funcionario {
  id: string;
  nome: string;
  habilidade: number;
  salario: number;
  jogador: boolean;
}

export interface FuncaoDeVenda {
  regras: { mes: number, multiplicador: number }[];
  multiplicador: number
}

export interface Produto {
  id: string;
  nome: string;
  custoDeObtencao: number;
  precoDeMercado: number;
  valorDeVenda: number;
  estoque: number;
  pararSeAcabar: boolean;

  funcaoDeVenda: FuncaoDeVenda
}

export interface Fornecedor {
  id: string;
  nome: string;
  tempoDeEntrega: number;
  produtos: Produto[];
}

export interface Log {
  [key: string]: string | number | boolean | object 
}

export interface ReciboDeCompra {
  id: string;
  dataCompra: Date;
  dataEntrega: Date;
  produto: Produto;
  fornecedor: Fornecedor;
  loja: Loja;
}












// Estado geral da loja
export interface StoreState {
  id: string;
  ownerName: string;
  storeName: string;

  currentTurn: number; // semana atual

  cash: number;

  employees: EmployeeState;

  products: ProductState[];

  suppliers: SupplierState[];

  history: TurnHistory[]; // opcional no início
}

export interface EmployeeState {
  count: number;
  costPerTurn: number; // salário semanal total ou por funcionário
  salesCapacity: number; // limite de vendas por turno
}

export interface ProductState {
  id: string;
  name: string;

  stock: number;

  buyPrice: number;  // preço atual de compra
  sellPrice: number; // preço definido pelo aluno

  seasonalFactor?: number; // multiplicador opcional de demanda
}

export interface SupplierState {
  id: string;
  name: string;

  productIds: string[];

  priceModifier: number; // ex: 0.9 mais barato, 1.1 mais caro
  deliveryTime: number;  // em turnos
  minOrder: number;
}

export interface TurnHistory {
  turn: number;
  revenue: number;
  expenses: number;
  profit: number;
}
