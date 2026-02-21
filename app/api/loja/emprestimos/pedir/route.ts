import { NextResponse, NextRequest } from "next/server";
import { pedirEmprestimo } from "@/functions/emprestimo/pedirEmprestimo";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { parcelas, valor, juros, sessaoId } = body;

    const parcelasInvalidas = !parcelas || parcelas < 1 || parcelas > 60;
    const valorInvalido = !valor || valor < 1000 || valor > 1000000;
    const jurosInvalido = !juros || juros < 0.0001 || juros > 0.083;

    if (parcelasInvalidas || valorInvalido || jurosInvalido) {
      throw new Error("Dados do empréstimo inválidos. Verifique valor, parcelas e taxa de juros.");
    }

    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    if (!sessao) throw new Error("Sessão não encontrada ou inativa.");
    
    const novoEmprestimo = pedirEmprestimo(sessao, valor, juros, parcelas);
    await sessao.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: "Empréstimo contratado com sucesso!",
        dataSessao: sessao.data,
        caixaAtual: sessao.loja.caixaAtual,
        emprestimo: novoEmprestimo
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado."
    });
  }
}