"use client";

import { useActionState } from "react";
import { enviarPedidoOracao, estadoInicial } from "@/lib/acoes";
import { AreaTexto, Campo, Feedback, Rotulo } from "./CamposFormulario";
import { BotaoSubmit } from "./Botao";

/**
 * Formulário de pedido de oração.
 * Nome e contato são opcionais — a pessoa pode pedir anonimamente.
 * Salva na tabela `pedidos_oracao`, separada e visível só para a administração.
 */
export function FormularioOracao() {
  const [estado, acao, enviando] = useActionState(
    enviarPedidoOracao,
    estadoInicial,
  );

  return (
    <form action={acao} className="space-y-6">
      <Feedback estado={estado} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Campo
          id="oracao-nome"
          name="nome"
          label="Seu nome"
          opcional
          autoComplete="name"
          placeholder="Pode deixar em branco"
        />
        <Campo
          id="oracao-contato"
          name="contato"
          label="WhatsApp ou e-mail"
          opcional
          placeholder="Se quiser que a gente responda"
        />
      </div>

      <AreaTexto
        id="oracao-pedido"
        name="pedido"
        label="Seu pedido de oração"
        required
        rows={7}
        placeholder="Conte com as suas palavras. Não precisa caber em uma linha."
        erro={estado.erros?.pedido}
      />

      <div className="border border-tinta/15 bg-creme-50 p-5">
        <div className="flex items-start gap-3">
          <input
            id="oracao-sigilo"
            name="sigilo"
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-terracota-500"
          />
          <div>
            <Rotulo htmlFor="oracao-sigilo">Manter em sigilo</Rotulo>
            <p className="text-sm text-tinta-suave">
              Marcando esta opção, seu pedido será visto apenas pela equipe de
              intercessão e não será compartilhado em nenhum grupo ou culto.
            </p>
          </div>
        </div>
      </div>

      <BotaoSubmit disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar pedido de oração"}
      </BotaoSubmit>
    </form>
  );
}
