import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import { sessaoModel } from "@/model/Sessao"
import { usuarioModel } from "@/model/Usuario";
import dbConnect from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { usuarioId } = body

    if (!usuarioId) throw new Error("O campo 'usuarioId' é obrigatório para criar uma sessão.");

    const usuarioExiste = await usuarioModel.findById(usuarioId);

    if (!usuarioExiste) throw new Error("Usuário não encontrado. Não é possível criar uma sessão para um ID inexistente.");

    const novaSessao = new sessaoModel({
      usuario: new Types.ObjectId(usuarioId),
      data: new Date(1990, 11, 1),
      loja: {
        nome: "Loja Nova",
        caixaAtual: 10000,
        contas: {
          energia: 30,
          agua: 30,
          internet: 30
        },
        funcionarios: [
          {
            nome: '{{usuario.nome}}',
            habilidade: 10,
            salario: 0,
            dono: true
          }
        ]
      }
    });

    await novaSessao.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: "Sessão criada com sucesso!",
        usuarioNome: usuarioExiste.nome,
        sessaoId: novaSessao._id,
        loja: {
          nome: novaSessao.loja.nome,
          caixaAtual: novaSessao.loja.caixaAtual
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