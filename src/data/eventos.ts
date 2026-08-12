/**
 * Agenda de eventos.
 * Estrutura pronta para migrar para o Supabase (tabela `eventos`).
 * Por enquanto, array estático — ver src/lib/eventos.ts.
 */

export type Evento = {
  id: string;
  titulo: string;
  /** ISO date (YYYY-MM-DD) */
  data: string;
  horario: string;
  local: string;
  descricao: string;
  imagem: string;
  categoria: string;
};

export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "[PREENCHER: nome do evento]",
    data: "2026-09-13",
    horario: "[PREENCHER: horário]",
    local: "Templo — Comunhão Sal e Luz",
    descricao:
      "[PREENCHER: descrição do evento]. Um encontro para toda a igreja, com louvor, palavra e comunhão.",
    imagem:
      "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1200&q=70",
    categoria: "Culto especial",
  },
  {
    id: "2",
    titulo: "[PREENCHER: encontro de mulheres]",
    data: "2026-09-27",
    horario: "[PREENCHER: horário]",
    local: "Templo — Comunhão Sal e Luz",
    descricao:
      "[PREENCHER: descrição]. Uma manhã de comunhão, café e Palavra com o Ministério de Mulheres.",
    imagem:
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1200&q=70",
    categoria: "Mulheres",
  },
  {
    id: "3",
    titulo: "[PREENCHER: ação social / missões]",
    data: "2026-10-11",
    horario: "[PREENCHER: horário]",
    local: "[PREENCHER: local]",
    descricao:
      "[PREENCHER: descrição]. Mobilização da igreja em favor da comunidade e das nossas frentes missionárias.",
    imagem:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70",
    categoria: "Missões",
  },
  {
    id: "4",
    titulo: "[PREENCHER: evento Underground]",
    data: "2026-10-25",
    horario: "[PREENCHER: horário]",
    local: "[PREENCHER: local]",
    descricao:
      "[PREENCHER: descrição]. Noite de música, conversa honesta e Jesus no centro.",
    imagem:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=70",
    categoria: "Underground",
  },
];

const MESES = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

/** Divide a data ISO em dia/mês para o badge dos cards (padrão do template) */
export function formatarBadge(dataISO: string) {
  const [, mes, dia] = dataISO.split("-");
  return { dia, mes: MESES[Number(mes) - 1] ?? "" };
}

export function formatarDataLonga(dataISO: string) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia} de ${MESES[Number(mes) - 1]} de ${ano}`;
}
