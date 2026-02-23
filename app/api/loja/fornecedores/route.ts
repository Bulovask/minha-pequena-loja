import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { FornecedorModel } from "@/model/Fornecedor";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // 1. Busca todos os fornecedores e seus respectivos produtos
    const fornecedores = await FornecedorModel.find({});

    if (!fornecedores || fornecedores.length === 0) {
      return NextResponse.json({
        success: true,
        data: [],
        msg: "Nenhum fornecedor cadastrado no mercado global."
      });
    }

    // 2. Retornamos a lista formatada
    return NextResponse.json({
      success: true,
      data: fornecedores
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error:  error instanceof Error ? error.message : "Erro ao carregar o mercado de fornecedores."
    }, { status: 500 });
  }
}