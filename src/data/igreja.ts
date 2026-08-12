/**
 * Dados institucionais da Comunhão Sal e Luz.
 * Fonte única de verdade — alterar aqui reflete em todo o site.
 *
 * ATENÇÃO: campos com [PREENCHER] devem ser confirmados pela igreja
 * antes do lançamento. Nunca substituir por informação inventada.
 */

export const igreja = {
  nome: "Comunhão Sal e Luz",
  nomeCurto: "Sal e Luz",
  hashtag: "#comunhaosaleluz",
  slogan: "Você tem um lugar aqui",

  endereco: {
    logradouro: "R. Comendador Vicente Leone, 426",
    bairro: "Jardim Nossa Sra. de Fátima",
    cidade: "Limeira",
    estado: "SP",
    referencia: "antigo Supermercado Covabra",
    completo:
      "R. Comendador Vicente Leone, 426 — Jardim Nossa Sra. de Fátima, Limeira – SP",
    cep: "[PREENCHER: CEP]",
  },

  contato: {
    email: "contato@comunhaosaleluz.com.br",
    telefone: "[PREENCHER: telefone]",
    whatsapp: "[PREENCHER: WhatsApp]",
    atendimento: "Terça a Sexta, 9h às 18h",
  },

  redes: {
    instagram: "https://instagram.com/comunhaosaleluz",
    facebook: "https://facebook.com/comunhaosaleluz",
    youtube: "https://youtube.com/comunhaosaleluz",
  },

  /** Chave Pix para dízimos e ofertas */
  pix: {
    chave: "[PREENCHER: chave Pix]",
    titular: "[PREENCHER: titular da conta]",
    tipo: "[PREENCHER: CNPJ / e-mail / telefone]",
  },

  /** Google Maps embed do endereço real */
  mapaEmbed:
    "https://www.google.com/maps?q=R.+Comendador+Vicente+Leone,+426,+Jardim+Nossa+Senhora+de+Fatima,+Limeira+-+SP&output=embed",
  mapaLink:
    "https://www.google.com/maps/search/?api=1&query=R.+Comendador+Vicente+Leone,+426,+Limeira+-+SP",

  site: "https://comunhaosaleluz.com.br",
} as const;

/**
 * Horários de culto presencial.
 * [PREENCHER] — confirmar dias e horários reais com a secretaria.
 */
export const horariosCulto = [
  {
    dia: "Domingo",
    horario: "[PREENCHER: horário]",
    titulo: "Culto de Celebração",
    descricao: "Nosso principal encontro da semana, com toda a família.",
  },
  {
    dia: "Quarta-feira",
    horario: "[PREENCHER: horário]",
    titulo: "Culto de Oração e Ensino",
    descricao: "Um tempo de oração, palavra e comunhão no meio da semana.",
  },
  {
    dia: "Sábado",
    horario: "[PREENCHER: horário]",
    titulo: "Encontro de Jovens",
    descricao: "[CONFIRMAR: existência e horário deste encontro]",
  },
] as const;
