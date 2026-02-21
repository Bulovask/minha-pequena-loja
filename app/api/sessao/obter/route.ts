import { NextRequest, NextResponse } from "next/server";
import { sessaoModel } from "@/model/Sessao";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { sessaoId } = body;

    if (!sessaoId) throw new Error("O campo 'sessaoId' é obrigatório.");

    const sessao = await sessaoModel.findOne({
      _id: sessaoId,
      ativo: true
    }).populate('usuario', 'nome');

    if (!sessao) {
      throw new Error("Sessão não encontrada ou foi excluída.");
    }

    return NextResponse.json({
      success: true,
      data: {
        msg: "Sessão carregada com sucesso!",
        sessao
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}