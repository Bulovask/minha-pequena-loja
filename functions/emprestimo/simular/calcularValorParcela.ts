// @/functions/emprestimo/calcularValorParcela.ts
import { differenceInCalendarDays } from "date-fns";

export interface ResultadoCalculo {
  valorFinal: number;
  encargos: number;
  desconto: number;
  isAtrasado: boolean;
}

export function calcularValorParcela(valorBase: number, taxaMensal: number, dataVencimento: Date, dataReferencia: Date): ResultadoCalculo {
  const diasDeDiferenca = differenceInCalendarDays(dataVencimento, dataReferencia);
  
  let encargos = 0;
  let desconto = 0;
  let valorFinal = valorBase;

  // CASO 1: ATRASADO
  if (diasDeDiferenca < 0) {
    const diasDeAtraso = Math.abs(diasDeDiferenca);
    const multaFixa = valorBase * 0.02;
    const jurosDiarios = valorBase * (0.005 * diasDeAtraso);
    encargos = Math.min(multaFixa + jurosDiarios, valorBase * 0.50);
    valorFinal += encargos;
  } 
  // CASO 2: ADIANTADO
  else if (diasDeDiferenca > 0) {
    const mesesDeAntecipacao = diasDeDiferenca / 30;
    // Fórmula VP = VF / (1 + (i * t))
    const valorPresente = valorBase / (1 + (taxaMensal * mesesDeAntecipacao));
    desconto = valorBase - valorPresente;
    valorFinal = valorPresente;
  }

  return {
    valorFinal: Math.round(valorFinal * 100) / 100,
    encargos: Math.round(encargos * 100) / 100,
    desconto: Math.round(desconto * 100) / 100,
    isAtrasado: diasDeDiferenca < 0
  };
}