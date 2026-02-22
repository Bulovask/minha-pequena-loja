import { Sessao } from "@/model/Sessao";
import { Funcionario } from "@/model/Funcionario";
import { notificar } from "@/functions/notificacoes/notificar";

export function contratarFuncionario(sessao: Sessao, candidato: Funcionario): boolean {
  // 1. Verificação de Regra de Negócio: Limite de funcionários (opcional)
  if (sessao.loja.funcionarios.length >= 10) {
    notificar(sessao, "Store Manager", "Limite de funcionários atingido! Amplie sua loja primeiro.");
    return false;
  }

  // 2. Verificar se o jogador tem dinheiro para o "custo de contratação" 
  // (Exemplo: 15% do salário como taxa administrativa/treinamento)
  const taxaContratacao = candidato.salario * 0.15;
  if (sessao.loja.caixaAtual < taxaContratacao) {
    notificar(sessao, "Store Manager", `Saldo insuficiente para contratar ${candidato.nome}. Custo: R$ ${taxaContratacao.toFixed(2)}`);
    return false;
  }

  // 3. Copiar o funcionário para a sessão
  // Criamos um objeto novo para garantir que não haja referências circulares de memória
  const novoFuncionario: Funcionario = {
    _id: candidato._id, // Mantemos o mesmo ID para referência
    nome: candidato.nome,
    habilidade: candidato.habilidade,
    salario: candidato.salario,
    dono: false // Apenas o jogador começa como dono
  };

  sessao.loja.funcionarios.push(novoFuncionario);
  sessao.loja.caixaAtual -= taxaContratacao;

  // 4. Feedback
  notificar(
    sessao, 
    "Store Manager", 
    `${candidato.nome} (Habilidade: ${candidato.habilidade}) foi contratado com sucesso!`
  );

  return true;
}