import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { Produto } from "@/subschemas/Produto";

export async function PATCH(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const { sessaoId, produtoId, valorDeVenda, pararSeAcabar, ativo } = body;

    if (!sessaoId || !produtoId) throw new Error("Sessão e Produto são obrigatórios.");

    if (valorDeVenda !== undefined && (typeof valorDeVenda !== "number" || valorDeVenda < 0))
      throw new Error("Valor de venda deve ser um número positivo.");

    // Atualização focada apenas nos campos de decisão do jogador
    const sessaoAtualizada = await sessaoModel.findOneAndUpdate(
      {
        _id: sessaoId,
        "loja.estoque._id": produtoId
      },
      {
        $set: {
          "loja.estoque.$.valorDeVenda": valorDeVenda,
          "loja.estoque.$.pararSeAcabar": pararSeAcabar,
          "loja.estoque.$.ativo": ativo
        }
      },
      { new: true }
    );

    if (!sessaoAtualizada) {
      return NextResponse.json(
        { success: false, error: "Sessão ou Produto não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        msg: "Estratégia do produto atualizada!",
        // Retornamos o produto para o front-end confirmar a alteração
        produto: sessaoAtualizada.loja.estoque.find((p: Produto) => p._id === produtoId)
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao gerenciar produto."
    }, { status: 400 });
  }
}