import { NextRequest, NextResponse } from "next/server";
import { sessaoModel } from "@/model/Sessao";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { sessaoId } = body;

    if (!sessaoId) {
      throw new Error("O 'sessaoId' é obrigatório para desativar a sessão.");
    }

    // Usamos findByIdAndUpdate para mudar o status para inativo
    const sessaoDesativada = await sessaoModel.findByIdAndUpdate(
      sessaoId,
      { ativo: false },
      { new: true } // Retorna o documento atualizado
    );

    if (!sessaoDesativada) {
      throw new Error("Sessão não encontrada.");
    }

    return NextResponse.json({
      success: true,
      data: {
        msg: "Sessão desativada com sucesso!",
        id: sessaoDesativada._id,
        ativo: sessaoDesativada.ativo
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}