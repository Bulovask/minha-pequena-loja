import { Sessao } from "@/model/Sessao";
import { notificar } from "@/functions/notificacoes/notificar";
import { Funcionario } from "@/model/Funcionario";

export function demitirFuncionario(sessao: Sessao, funcionarioId: string): boolean {
  // 1. Localiza o funcionário no array da sessão
  // O Mongoose adiciona _id automaticamente em subdocumentos de arrays, a menos que especificado
  const index = sessao.loja.funcionarios.findIndex(
    (f: Funcionario) => f._id?.toString() === funcionarioId
  );

  if (index === -1) {
    notificar(sessao, "Store Manager", "Erro: Funcionário não encontrado.");
    return false;
  }

  const funcionario = sessao.loja.funcionarios[index];

  // 2. Regra de Segurança: Não pode demitir o Dono
  if (funcionario.dono) {
    notificar(sessao, "Store Manager", "Você não pode demitir o proprietário da loja!");
    return false;
  }

  // 3. Cálculo de Rescisão (Multa de demissão)
  // Vamos usar 40% do salário como custo de aviso prévio/rescisão
  const multaRescisao = funcionario.salario * 0.40;

  // 4. Verificação de Saldo
  // Como é uma obrigação trabalhista, vamos permitir que o caixa fique negativo
  // (Seguindo sua lógica de que contas de consumo/obrigações podem negativar)
  sessao.loja.caixaAtual -= multaRescisao;

  // 5. Remove do array
  sessao.loja.funcionarios.splice(index, 1);

  // 6. Notificações
  notificar(
    sessao,
    "Store Manager",
    `${funcionario.nome} foi desligado. Custo de rescisão: R$ ${multaRescisao.toFixed(2)}.`
  );

  if (sessao.loja.caixaAtual < 0) {
    notificar(
      sessao,
      "Banco",
      "Alerta: Sua conta entrou no negativo após o pagamento de rescisões."
    );
  }

  return true;
}