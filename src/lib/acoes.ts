"use server";

import { getSupabaseServer } from "./supabase";

/**
 * Server Actions dos formulários do site.
 * Validação em duas camadas: client-side (HTML5 + React) e aqui no servidor.
 */

export type EstadoFormulario = {
  status: "inicial" | "sucesso" | "erro";
  mensagem: string;
  /** Erros por campo, para feedback inline */
  erros?: Record<string, string>;
};

export const estadoInicial: EstadoFormulario = {
  status: "inicial",
  mensagem: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** ---------------- Formulário de contato ---------------- */
export async function enviarContato(
  _anterior: EstadoFormulario,
  formData: FormData,
): Promise<EstadoFormulario> {
  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const assunto = String(formData.get("assunto") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  const erros: Record<string, string> = {};
  if (nome.length < 2) erros.nome = "Informe seu nome.";
  if (!EMAIL_RE.test(email)) erros.email = "Informe um e-mail válido.";
  if (mensagem.length < 10)
    erros.mensagem = "Escreva sua mensagem com pelo menos 10 caracteres.";

  if (Object.keys(erros).length > 0) {
    return {
      status: "erro",
      mensagem: "Confira os campos destacados e tente novamente.",
      erros,
    };
  }

  const supabase = getSupabaseServer();

  if (!supabase) {
    // Supabase ainda não configurado — não perdemos a mensagem silenciosamente.
    console.warn("[contato] Supabase não configurado. Payload:", {
      nome,
      email,
      assunto,
      mensagem,
    });
    return {
      status: "erro",
      mensagem:
        "O envio de mensagens ainda está sendo configurado. Por enquanto, escreva para contato@comunhaosaleluz.com.br.",
    };
  }

  const { error } = await supabase.from("contatos").insert({
    nome,
    email,
    assunto: assunto || null,
    mensagem,
  });

  if (error) {
    console.error("[contato] Erro ao salvar no Supabase:", error.message);
    return {
      status: "erro",
      mensagem:
        "Não conseguimos enviar sua mensagem agora. Tente novamente em alguns minutos.",
    };
  }

  return {
    status: "sucesso",
    mensagem:
      "Mensagem recebida! Nossa equipe responde de terça a sexta, das 9h às 18h.",
  };
}

/** ---------------- Pedido de oração ---------------- */
export async function enviarPedidoOracao(
  _anterior: EstadoFormulario,
  formData: FormData,
): Promise<EstadoFormulario> {
  // Nome é opcional: a pessoa pode pedir oração anonimamente.
  const nome = String(formData.get("nome") ?? "").trim();
  const contato = String(formData.get("contato") ?? "").trim();
  const pedido = String(formData.get("pedido") ?? "").trim();
  const sigilo = formData.get("sigilo") === "on";

  if (pedido.length < 5) {
    return {
      status: "erro",
      mensagem: "Escreva seu pedido para que possamos orar por você.",
      erros: { pedido: "Escreva seu pedido de oração." },
    };
  }

  const supabase = getSupabaseServer();

  if (!supabase) {
    console.warn("[oracao] Supabase não configurado. Payload:", {
      nome,
      contato,
      sigilo,
    });
    return {
      status: "erro",
      mensagem:
        "O envio de pedidos ainda está sendo configurado. Por enquanto, escreva para contato@comunhaosaleluz.com.br.",
    };
  }

  const { error } = await supabase.from("pedidos_oracao").insert({
    nome: nome || null,
    contato: contato || null,
    pedido,
    sigilo,
  });

  if (error) {
    console.error("[oracao] Erro ao salvar no Supabase:", error.message);
    return {
      status: "erro",
      mensagem:
        "Não conseguimos registrar seu pedido agora. Tente novamente em alguns minutos.",
    };
  }

  return {
    status: "sucesso",
    mensagem:
      "Recebemos seu pedido. Nossa equipe de intercessão vai orar por você.",
  };
}

/** ---------------- Quero participar de um ministério ---------------- */
export async function enviarInteresseMinisterio(
  _anterior: EstadoFormulario,
  formData: FormData,
): Promise<EstadoFormulario> {
  const nome = String(formData.get("nome") ?? "").trim();
  const contato = String(formData.get("contato") ?? "").trim();
  const ministerio = String(formData.get("ministerio") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  const erros: Record<string, string> = {};
  if (nome.length < 2) erros.nome = "Informe seu nome.";
  if (contato.length < 5)
    erros.contato = "Informe um WhatsApp ou e-mail para contato.";

  if (Object.keys(erros).length > 0) {
    return {
      status: "erro",
      mensagem: "Confira os campos destacados e tente novamente.",
      erros,
    };
  }

  const supabase = getSupabaseServer();

  if (!supabase) {
    console.warn("[ministerio] Supabase não configurado. Payload:", {
      nome,
      contato,
      ministerio,
    });
    return {
      status: "erro",
      mensagem:
        "O envio ainda está sendo configurado. Fale com a gente pelo Instagram @comunhaosaleluz.",
    };
  }

  const { error } = await supabase.from("interesses_ministerio").insert({
    nome,
    contato,
    ministerio,
    mensagem: mensagem || null,
  });

  if (error) {
    console.error("[ministerio] Erro ao salvar no Supabase:", error.message);
    return {
      status: "erro",
      mensagem: "Não conseguimos enviar agora. Tente novamente em instantes.",
    };
  }

  return {
    status: "sucesso",
    mensagem:
      "Recebemos seu interesse! A liderança do ministério vai entrar em contato.",
  };
}
