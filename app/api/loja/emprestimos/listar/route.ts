import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { Emprestimo } from "@/subschemas/Emprestimo";
import { Parcela } from "@/subschemas/Parcela";

export async function GET(
  req: NextRequest,
  { params }: { params: { sessaoId: string } }
) {
  try {
    await dbConnect();
    const { sessaoId } = params;

    // Buscamos apenas os campos necessários da loja e empréstimos
    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true })
      .select("loja.emprestimos loja.caixaAtual data");

    if (!sessao) {
      return NextResponse.json(
        { success: false, error: "Sessão não encontrada." },
        { status: 404 }
      );
    }

    // Mapeamos os empréstimos para um formato simplificado
    const listaSimplificada = sessao.loja.emprestimos.map((emp: Emprestimo) => {
      const pagas = emp.parcelas.filter((p: Parcela) => p.pagamento).length;
      const total = emp.contrato.totalParcelas;
      
      return {
        id: emp.contrato._id,
        status: emp.status,
        progresso: `${pagas}/${total}`,
        valorRestante: Math.round((emp.contrato.valorTotalAReceber - (pagas * emp.contrato.valorDaParcela)) * 100) / 100,
        proximoVencimento: emp.parcelas.find(p => !p.pagamento)?.dataVencimento || null,
        valorParcela: emp.contrato.valorDaParcela
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        caixaAtual: sessao.loja.caixaAtual,
        dataSessao: sessao.data,
        emprestimos: listaSimplificada
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Erro ao listar empréstimos."
    }, { status: 500 });
  }
}