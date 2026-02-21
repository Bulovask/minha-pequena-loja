import { NextRequest, NextResponse } from "next/server";
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { id } = body;

    if (!id) throw new Error("O ID do usuário é obrigatório para esta operação.");

    const usuarioDesativado = await usuarioModel.findByIdAndUpdate(
      id,
      { ativo: false },
      { new: true }
    );

    if (!usuarioDesativado) throw new Error("Usuário não encontrado.");

    return NextResponse.json({
      success: true,
      data: {
        msg: "Usuário excluído com sucesso! (Se foi um erro entre em contato o mais rápido com os administradores).",
        usuario: {
          id: usuarioDesativado._id,
          nome: usuarioDesativado.nome,
          ativo: usuarioDesativado.ativo
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}