import { NextRequest, NextResponse } from "next/server";
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { id } = body;

    if (!id) throw new Error("O ID do usuário é obrigatório.");

    const usuario = await usuarioModel.findById(id);

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