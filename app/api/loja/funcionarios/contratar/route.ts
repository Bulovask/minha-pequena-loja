import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { FuncionarioModel } from "@/model/Funcionario";
import { contratarFuncionario } from "@/functions/funcionarios/contratarFuncionarios";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { sessaoId, candidatoId } = body;

    // 1. Busca a sessão do jogador
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    if (!sessao) throw new Error("Sessão não encontrada ou inativa.");

    // 2. Busca o candidato na lista global (coleção funcionarioss)
    const candidato = await FuncionarioModel.findById(candidatoId);
    if (!candidato) throw new Error("Candidato não encontrado no mercado de trabalho.");

    // 3. Executa a função de contratação (a que faz a cópia e cobra a taxa)
    const sucesso = contratarFuncionario(sessao, candidato);

    if (!sucesso) {
      // A função contratarFuncionario já dispara notificações internas via parâmetro sessao
      throw new Error("Não foi possível concluir a contratação. Verifique saldo ou limites.");
    }

    // 4. Salva a sessão com o novo funcionário no array
    await sessao.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: `${candidato.nome} agora faz parte da sua equipe!`,
        caixaAtual: sessao.loja.caixaAtual,
        funcionarios: sessao.loja.funcionarios // Retorna a lista atualizada
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado ao contratar."
    }, { status: 400 });
  }
}