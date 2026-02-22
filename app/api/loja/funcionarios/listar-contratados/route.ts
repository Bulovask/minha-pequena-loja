import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { Funcionario } from "@/model/Funcionario";

export async function GET(
  req: NextRequest,
  { params }: { params: { sessaoId: string } }
) {
  try {
    await dbConnect();
    const { sessaoId } = params;

    // 1. Busca apenas os campos necessários da sessão para performance
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true })
      .select("loja.funcionarios loja.caixaAtual");

    if (!sessao) {
      return NextResponse.json(
        { success: false, error: "Sessão não encontrada ou inativa." },
        { status: 404 }
      );
    }

    // 2. Calculamos o custo total da folha de pagamento para ajudar o front
    const totalFolhaSalarial = sessao.loja.funcionarios
      .filter((f: Funcionario) => !f.dono) // Dono não recebe salário
      .reduce((acc: number, f: Funcionario) => acc + f.salario, 0);

    return NextResponse.json({
      success: true,
      data: {
        funcionarios: sessao.loja.funcionarios,
        meta: {
          totalFuncionarios: sessao.loja.funcionarios.length,
          custoMensalSalarios: totalFolhaSalarial,
          caixaDisponivel: sessao.loja.caixaAtual
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao listar funcionários contratados."
    }, { status: 500 });
  }
}