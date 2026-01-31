import { EstadoAtual } from "@/domain/regras-do-jogo/interfaces"

export const estadoAtual: EstadoAtual = {
  id: '',
  loja: {
    id: '',
    nome: '',
    caixaAtual: 0,
    emprestimos: [{
      id: "",
      valor: 1500,
      jurosMensal: 0.183,
      valorParcela: 150,
      numeroDeParcelas: 10,
      dataDeContratacao: new Date(2000, 10, 13)
    }],
    contas: {
      energia: 0,
      agua: 0,
      internet: 0
    },
    funcionarios: [
      {
        id: '',
        nome: 'Ageu Assunção Simões Galindo',
        habilidade: 0.1,
        salario: 1500,
        jogador: true
      },
      {
        id: '',
        nome: 'Antônio Bezerra',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Bruno Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'José Guilherme',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Gustavo da Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Antônio Bezerra',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Bruno Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'José Guilherme',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Gustavo da Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Antônio Bezerra',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Bruno Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'José Guilherme',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Gustavo da Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Antônio Bezerra',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Bruno Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'José Guilherme',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Gustavo da Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Antônio Bezerra',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'Bruno Silva',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      },
      {
        id: '',
        nome: 'José Guilherme',
        habilidade: 0.1,
        salario: 1500,
        jogador: false
      }
    ],
    fornecedores: [],
    estoque: [
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 15,
        estoque: 10000000000000000000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 17,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },

      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
      {
        id: '',
        nome: 'Caderno Espiral Capa Dura 200mm x 275mm 80 Folhas - Maracutaia',
        custoDeObtencao: 8,
        precoDeMercado: 15,
        valorDeVenda: 30,
        estoque: 1000000000000,
        pararSeAcabar: false,
        funcaoDeVenda: {
          regras: [
            {
              mes: 1,
              multiplicador: 0.9
            }
          ],
          multiplicador: 0.3
        },
      },
    ],
    recibosDeCompras: [],
    percentualDeAjusteDePrecos: 0
  },
  data: new Date(2025, 0, 1),
  logs: [],
  listaDeFornecedores: [],
  listaDeFuncionarios: [],
  mensagensRecentes: []
}