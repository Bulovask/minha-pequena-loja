import { NextRequest, NextResponse } from "next/server";
import { sessaoModel } from "@/model/Sessao";
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { usuarioId } = body;

    if (!usuarioId) throw new Error("O campo 'usuarioId' é obrigatório para obter as sessões.");

    const usuarioExiste = await usuarioModel.findById(usuarioId);
    if (!usuarioExiste) throw new Error("Usuário não encontrado.");

    const sessoes = await sessaoModel.find({
      usuario: usuarioId,
      ativo: true
    }).select('loja.nome loja.caixaAtual data').sort({ data: -1 });

    return NextResponse.json({
      success: true,
      data: {
        msg: "Sessões obtidas com sucesso!",
        usuarioNome: usuarioExiste.nome,
        total: sessoes.length,
        sessoes: sessoes
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}