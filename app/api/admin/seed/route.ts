import { NextResponse } from "next/server";
import { seedFornecedores } from "@/scripts/populateFornecedores";
import { seedFuncionarios } from "@/scripts/populateFuncionarios";

export async function GET() {
  try {
    // Executa ambos os seeds em paralelo para ganhar tempo
    await Promise.all([
      seedFornecedores(),
      seedFuncionarios()
    ]);

    return NextResponse.json({ 
      success: true, 
      message: "Mercado de Trabalho e Fornecedores resetados com sucesso!" 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error:  error instanceof Error ? error.message : "Falha ao popular o banco de dados." 
    }, { status: 500 });
  }
}