// @/functions/tempo/proximoTurno.ts
import { ptBR } from "date-fns/locale";
import { addDays, getDay, format } from "date-fns";
import { Sessao } from "@/model/Sessao";
import { vender } from "../vendas/vender";
import { pagarDespesas } from "../pagamentos/pagarDespesas";
import { processarChegadaDeMercadoria } from "../estoque/processarChegadaDeMercadoria";
// import { avancarDias } from "./avancarDias";
import { HydratedDocument } from "mongoose";

const DOMINGO = 0; // Para referência, embora não seja usado diretamente aqui

export async function proximoTurno(sessao: HydratedDocument<Sessao>, dias: number) {
  let diasSimuladosEfetivamente = 0;

  for (let i = 1; i <= dias; i++) {
    // Avançamos a data REAL da sessão para este dia do loop
    sessao.data = addDays(new Date(sessao.data), 1); 
    const mesAtual = sessao.data.getMonth();

    // 1. Chegada de mercadoria (Agora com a data da sessão já atualizada)
    await processarChegadaDeMercadoria(sessao);

    // 2. Vendas do dia
    const podeContinuar = getDay(sessao.data) === DOMINGO ? true : vender(sessao, mesAtual);
        
    // 3. Pagamentos
    if (sessao.data.getDate() === 28) {
      pagarDespesas(sessao, sessao.data);
    }

    if (!podeContinuar) {
      // Se parou por falta de estoque, não contamos este dia como "totalmente simulado" 
      // ou paramos aqui.
      break; 
    }

    diasSimuladosEfetivamente++;
  }
  
  // Como atualizamos a data dentro do loop, não precisamos do avancarDias(dias) 
  // que somaria tudo de novo. Apenas garantimos que o Mongoose saiba que mudou.
  return diasSimuladosEfetivamente;
}