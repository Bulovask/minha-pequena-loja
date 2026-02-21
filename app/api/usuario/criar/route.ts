import { NextRequest, NextResponse } from "next/server";
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { nome, anoEscolar, turma } = body;

    const novoUsuario = new usuarioModel({
      nome, anoEscolar, turma
    });

    const usuarioSalvo = await novoUsuario.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: "Usuário criado com sucesso!",
        usuario: usuarioSalvo,
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}