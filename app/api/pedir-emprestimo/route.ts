import { NextResponse, NextRequest } from "next/server";
import { estadoAtual } from "@/db/dbfake";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { parcelas, valorContratado, jurosMensal } = body;

    if(parcelas < 1 || valorContratado < 100 || valorContratado > 1000000 || jurosMensal < 0.001)

    const dados = {
      emprestimo: estadoAtual.loja.emprestimos
    }

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