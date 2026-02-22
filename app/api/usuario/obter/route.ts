import { NextRequest, NextResponse } from "next/server";
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { usuarioId } = body;

    if (!usuarioId) throw new Error("O ID do usuário é obrigatório.");

    const usuario = await usuarioModel.findById(usuarioId);

    if (!usuario) throw new Error("Usuário não encontrado.");

    return NextResponse.json({
      success: true,
      data: {
        msg: "Usuário encontrado!",
        usuario
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}