import { NextRequest, NextResponse } from "next/server";
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function PATCH(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { id, nome, anoEscolar, turma } = body;

    if (!id) throw new Error("O ID do usuário é obrigatório.");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const camposParaAtualizar: any = {};

    if (nome && nome.trim()) camposParaAtualizar.nome = nome.trim();
    if (anoEscolar && anoEscolar.trim()) camposParaAtualizar.anoEscolar = anoEscolar.trim();
    if (turma && turma.trim()) camposParaAtualizar.turma = turma.trim();

    if (Object.keys(camposParaAtualizar).length === 0) {
      throw new Error("Nenhum dado válido foi fornecido para atualização.");
    }

    const usuarioAtualizado = await usuarioModel.findByIdAndUpdate(
      id,
      camposParaAtualizar,
      { new: true, runValidators: true }
    );

    if (!usuarioAtualizado) throw new Error("Usuário não encontrado.");

    return NextResponse.json({
      success: true,
      data: {
        msg: "Usuário atualizado!",
        usuario: usuarioAtualizado
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}