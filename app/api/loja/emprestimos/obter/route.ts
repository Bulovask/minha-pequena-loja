import { Parcela } from '@/subschemas/Parcela';
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";

export async function GET(
  req: NextRequest,
  { params }: { params: { sessaoId: string; emprestimoId: string } }
) {
  try {
    await dbConnect();
    const { sessaoId, emprestimoId } = params;

    // 1. Busca a sessão ativa
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    if (!sessao) {
      return NextResponse.json(
        { success: false, error: "Sessão não encontrada ou inativa." },
        { status: 404 }
      );
    }

    // 2. Filtra o empréstimo específico no array da loja
    const emprestimo = sessao.loja.emprestimos.find(
      (e: Emprestimo) => e.contrato?._id?.toString() === emprestimoId
    );

    if (!emprestimo) {
      return NextResponse.json(
        { success: false, error: "Empréstimo não encontrado." },
        { status: 404 }
      );
    }

    // 3. (Opcional) Calcular métricas rápidas para o frontend
    const totalPago = emprestimo.parcelas
      .filter((p: Parcela) => p.pagamento)
      .reduce((acc: number, p: Parcela) => acc + (p.pagamento?.valorPago || 0), 0);
    
    const parcelasRestantes = emprestimo.parcelas.filter((p: Parcela) => !p.pagamento).length;

    return NextResponse.json({
      success: true,
      data: {
        emprestimo,
        resumo: {
          totalPago: Math.round(totalPago * 100) / 100,
          parcelasRestantes,
          progresso: `${emprestimo.contrato.totalParcelas - parcelasRestantes}/${emprestimo.contrato.totalParcelas}`
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro ao buscar empréstimo."
    }, { status: 500 });
  }
}