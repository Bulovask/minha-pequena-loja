import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { Produto } from "@/subschemas/Produto";

export async function GET(
  req: NextRequest,
  { params }: { params: { sessaoId: string } }
) {
  try {
    await dbConnect();
    const { sessaoId } = params;

    // 1. Busca apenas a parte de estoque e caixa para a visão geral
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true })
      .select("loja.estoque loja.caixaAtual");

    if (!sessao) {
      return NextResponse.json(
        { success: false, error: "Sessão não encontrada." },
        { status: 404 }
      );
    }

    // 2. Calculamos o valor total investido no estoque (patrimônio imobilizado)
    const valorTotalEstoque = sessao.loja.estoque.reduce(
      (acc: number, prod: Produto) => acc + (prod.custoDeObtencao * prod.estoque), 
      0
    );

    // 3. Identificamos itens com estoque baixo (ex: menos de 10 unidades)
    const itensCriticos = sessao.loja.estoque.filter((prod: Produto) => prod.estoque < 10);

    return NextResponse.json({
      success: true,
      data: {
        estoque: sessao.loja.estoque,
        resumo: {
          caixaAtual: sessao.loja.caixaAtual,
          valorPatrimonial: Math.round(valorTotalEstoque * 100) / 100,
          totalItensDiferentes: sessao.loja.estoque.length,
          alertaReposicao: itensCriticos.length
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao carregar inventário."
    }, { status: 500 });
  }
}