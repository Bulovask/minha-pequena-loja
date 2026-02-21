import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import { proximoTurno } from "@/domain/regras-do-jogo/funcoes";
import { sessaoModel } from "@/model/Sessao";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const { sessaoId, dias } = body;

    if (!sessaoId) throw new Error("O campo 'sessaoId' é obrigatório.");
    if (!dias || dias <= 0 || dias > 366) throw new Error("Número de dias inválido. Deve ser entre 1 e 366.");

    const sessao = await sessaoModel.findOne({
      _id: sessaoId,
      ativo: true
    }).populate('usuario', 'nome');

    if (!sessao) throw new Error("Sessão não encontrada ou foi desativada.");

    proximoTurno(sessao, dias);

    const sessaoSalva = await sessao.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: `Turno avançado em ${dias} dia(s)!`,
        sessao: sessaoSalva
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}