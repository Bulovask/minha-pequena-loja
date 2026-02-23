import { Funcionario } from '@/model/Funcionario';
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { FuncionarioModel } from "@/model/Funcionario"; // O modelo que você definiu

export async function GET(
  req: NextRequest,
  { params }: { params: { sessaoId: string } }
) {
  try {
    await dbConnect();
    const { sessaoId } = params;

    // 1. Busca a sessão para saber quem já trabalha lá
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    if (!sessao) throw new Error("Sessão não encontrada.");

    // 2. Extrai os IDs dos funcionários atuais para filtrar
    const idsContratados = sessao.loja.funcionarios.map((f: Funcionario) => f._id);

    // 3. Busca candidatos no banco global que NÃO estão na lista de contratados
    // Usamos o operador $nin (Not In) do MongoDB
    const candidatosDisponiveis = await FuncionarioModel.find({
      _id: { $nin: idsContratados },
      dono: false // Candidatos nunca podem ser "dono" na lista global
    }).limit((Math.random() * 16 + 7) >> 0); // Limita a 7 a 15 opções para não sobrecarregar a tela

    return NextResponse.json({
      success: true,
      data: {
        candidatos: candidatosDisponiveis,
        quantidadeAtual: sessao.loja.funcionarios.length
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao listar candidatos."
    }, { status: 500 });
  }
}