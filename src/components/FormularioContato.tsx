"use client";

import { useActionState } from "react";
import { enviarContato, estadoInicial } from "@/lib/acoes";
import { AreaTexto, Campo, Feedback } from "./CamposFormulario";
import { BotaoSubmit } from "./Botao";

/** Formulário de contato — salva na tabela `contatos` do Supabase. */
export function FormularioContato() {
  const [estado, acao, enviando] = useActionState(enviarContato, estadoInicial);

  return (
    <form action={acao} className="space-y-6">
      <Feedback estado={estado} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Campo
          id="contato-nome"
          name="nome"
          label="Seu nome"
          required
          autoComplete="name"
          placeholder="Nome completo"
          erro={estado.erros?.nome}
        />
        <Campo
          id="contato-email"
          name="email"
          label="E-mail"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          erro={estado.erros?.email}
        />
      </div>

      <Campo
        id="contato-assunto"
        name="assunto"
        label="Assunto"
        opcional
        placeholder="Ex.: quero conhecer a igreja"
      />

      <AreaTexto
        id="contato-mensagem"
        name="mensagem"
        label="Mensagem"
        required
        rows={6}
        placeholder="Escreva sua mensagem para a gente."
        erro={estado.erros?.mensagem}
      />

      <BotaoSubmit disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar mensagem"}
      </BotaoSubmit>
    </form>
  );
}
