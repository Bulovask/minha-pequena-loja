import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { demitirFuncionario } from "@/functions/funcionarios/demitirFuncionario";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { sessaoId, funcionarioId } = body;

    // 1. Busca a sessão do jogador
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    if (!sessao) throw new Error("Sessão não encontrada.");

    // 2. Executa a função de demissão
    // Ela já calcula multa de rescisão e remove do array
    const sucesso = demitirFuncionario(sessao, funcionarioId);

    if (!sucesso) {
      throw new Error("Não foi possível processar a demissão. Verifique se o funcionário existe ou se é o proprietário.");
    }

    // 3. Persiste as alterações no banco de dados
    await sessao.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: "Vínculo empregatício encerrado.",
        caixaAtual: sessao.loja.caixaAtual,
        funcionarios: sessao.loja.funcionarios
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao processar desligamento."
    }, { status: 400 });
  }
}