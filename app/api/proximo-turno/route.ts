import { NextRequest, NextResponse } from "next/server";

import { estadoAtual } from "@/db/dbfake";
import { proximoTurno } from "@/domain/regras-do-jogo/funcoes"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const dias = body.dias;

    if (dias > 0 && dias <= 366) proximoTurno(estadoAtual, dias);
    else throw new Error("Número de dias inválido. Deve ser entre 1 e 366.");

    const dados = {
      log: estadoAtual.logs,
      mensagens: estadoAtual.mensagensRecentes,
      caixaAtual: estadoAtual.loja.caixaAtual,
      emprestimos: estadoAtual.loja.emprestimos,
      data: estadoAtual.data,
      totalDeProdutosDistintos: estadoAtual.loja.estoque.length,
      estoque: estadoAtual.loja.estoque.map(p => ({
        id: p.id,
        nome: p.nome,
        estoque: p.estoque
      }))
    };

    return NextResponse.json({
      success: true,
      data: dados
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}