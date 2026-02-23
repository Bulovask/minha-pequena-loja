import dbConnect from "@/lib/mongoose";
import { FornecedorModel } from "@/model/Fornecedor";

const fornecedoresExemplo = [
  {
    nome: "Atacadão Express (Local)",
    tempoDeEntrega: 1, // Entrega amanhã!
    produtos: [
      {
        _id: "prod_arroz_01", // ID fixo para o mesmo produto em fornecedores diferentes
        ativo: true,
        nome: "Arroz Premium 5kg",
        custoDeObtencao: 22.00, // Mais caro por ser rápido
        precoDeMercado: 30.00,
        valorDeVenda: 28.00,
        estoque: 0,
        pararSeAcabar: true,
        regrasDeVenda: {
          multiplicador: 1.2,
          regras: [
            { mes: 0, multiplicador: 1.5 }, // Janeiro (férias) vende mais
            { mes: 5, multiplicador: 0.8 }  // Junho vende menos
          ]
        }
      }
    ]
  },
  {
    nome: "Distribuidora Nacional",
    tempoDeEntrega: 5, // Demora mais
    produtos: [
      {
        _id: "prod_arroz_01", // Mesmo produto, outro preço
        ativo: true,
        nome: "Arroz Premium 5kg",
        custoDeObtencao: 18.50, // Bem mais barato!
        precoDeMercado: 30.00,
        valorDeVenda: 28.00,
        estoque: 0,
        pararSeAcabar: true,
        regrasDeVenda: {
          multiplicador: 1.2,
          regras: [{ mes: 0, multiplicador: 1.5 }]
        }
      }
    ]
  },
  {
    nome: "Fazenda Direta (Produtor)",
    tempoDeEntrega: 12, // Logística lenta
    produtos: [
      {
        _id: "prod_arroz_01",
        ativo: true,
        nome: "Arroz Premium 5kg",
        custoDeObtencao: 15.00, // Preço imbatível
        precoDeMercado: 30.00,
        valorDeVenda: 28.00,
        estoque: 0,
        pararSeAcabar: true,
        regrasDeVenda: {
          multiplicador: 1.2,
          regras: [{ mes: 0, multiplicador: 1.5 }]
        }
      }
    ]
  }
];

export async function seedFornecedores() {
  await dbConnect();
  try {
    await FornecedorModel.deleteMany({}); // Limpa os antigos
    await FornecedorModel.insertMany(fornecedoresExemplo);
    console.log("✅ Fornecedores populados com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao popular banco:", error);
  }
}