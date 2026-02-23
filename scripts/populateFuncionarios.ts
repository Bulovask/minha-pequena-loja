import dbConnect from "@/lib/mongoose";
import { FuncionarioModel } from "@/model/Funcionario";

const funcionariosCandidatos = [
  {
    nome: "João Silva",
    habilidade: 2,
    salario: 1200,
    dono: false
  },
  {
    nome: "Maria Oliveira",
    habilidade: 5,
    salario: 2500,
    dono: false
  },
  {
    nome: "Ana Beatriz",
    habilidade: 4,
    salario: 1800,
    dono: false
  },
  {
    nome: "Carlos Expert",
    habilidade: 9,
    salario: 5500,
    dono: false
  },
  {
    nome: "Ricardo Souza",
    habilidade: 7,
    salario: 3800,
    dono: false
  }
];

export async function seedFuncionarios() {
  await dbConnect();
  try {
    // Limpa a lista global de candidatos (exceto donos)
    await FuncionarioModel.deleteMany({ dono: false }); 
    await FuncionarioModel.insertMany(funcionariosCandidatos);
    console.log("✅ Candidatos a funcionários populados com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao popular funcionários:", error);
    throw error;
  }
}