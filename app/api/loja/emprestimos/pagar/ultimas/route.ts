import { NextResponse, NextRequest } from "next/server";
import { pagarUltimasParcelasDoEmprestimo } from "@/functions/emprestimo/pagarUltimasParcelasDoEmprestimo";
import dbConnect from "@/lib/mongoose";
import { sessaoModel } from "@/model/Sessao";
import { usuarioModel } from "@/model/Usuario"; // Garantindo o registro do model para o populate
import { Emprestimo } from "@/subschemas/Emprestimo";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    await usuarioModel.init();

    const body = await req.json();
    const { sessaoId, emprestimoId, quantidade } = body;

    const sessao = await sessaoModel.findOne({ _id: sessaoId, ativo: true });
    if (!sessao) throw new Error("Sessão não encontrada ou inativa.");

    // 2. Localiza o empréstimo específico dentro da loja
    const emprestimo = sessao.loja.emprestimos.find(
      (e: Emprestimo) => e.contrato?._id?.toString() === emprestimoId
    );

    if (!emprestimo) throw new Error("Empréstimo não encontrado nesta sessão.");

    // 3. Executa a função de pagamento
    // Passamos a data atual da sessão para o cálculo de atrasos ser justo
    const sucesso = pagarUltimasParcelasDoEmprestimo(
      sessao,
      emprestimo,
      Number(quantidade)
    );

    if (!sucesso) {
      throw new Error("Não foi possível processar o pagamento. Verifique seu saldo ou se o empréstimo já foi quitado.");
    }

    // 4. Salva as alterações (Sessão é um Documento do Mongoose, então save() funciona)
    await sessao.save();

    return NextResponse.json({
      success: true,
      data: {
        msg: "Pagamento processado com sucesso!",
        caixaAtual: sessao.loja.caixaAtual,
        statusEmprestimo: emprestimo.status,
        // Retornamos apenas o empréstimo atualizado para o front atualizar o estado
        emprestimo: emprestimo 
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro inesperado ao processar pagamento."
    });
  }
}