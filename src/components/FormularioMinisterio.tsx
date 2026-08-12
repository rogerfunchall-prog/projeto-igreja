"use client";

import { useActionState } from "react";
import { enviarInteresseMinisterio, estadoInicial } from "@/lib/acoes";
import { AreaTexto, Campo, Feedback } from "./CamposFormulario";
import { BotaoSubmit } from "./Botao";

/**
 * Formulário "Quero participar" das subpáginas de ministério.
 * Salva em `interesses_ministerio` no Supabase.
 */
export function FormularioMinisterio({
  ministerio,
}: {
  ministerio: string;
}) {
  const [estado, acao, enviando] = useActionState(
    enviarInteresseMinisterio,
    estadoInicial,
  );

  return (
    <form action={acao} className="space-y-6" noValidate={false}>
      <input type="hidden" name="ministerio" value={ministerio} />

      <Feedback estado={estado} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Campo
          id="min-nome"
          name="nome"
          label="Seu nome"
          required
          autoComplete="name"
          placeholder="Como podemos te chamar?"
          erro={estado.erros?.nome}
        />
        <Campo
          id="min-contato"
          name="contato"
          label="WhatsApp ou e-mail"
          required
          autoComplete="tel"
          placeholder="(19) 90000-0000"
          erro={estado.erros?.contato}
        />
      </div>

      <AreaTexto
        id="min-mensagem"
        name="mensagem"
        label="Quer contar algo pra gente?"
        opcional
        rows={4}
        placeholder={`Ex.: nunca servi antes, mas gostaria de conhecer o ${ministerio}.`}
      />

      <BotaoSubmit disabled={enviando}>
        {enviando ? "Enviando..." : "Quero participar"}
      </BotaoSubmit>
    </form>
  );
}
