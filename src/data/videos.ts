/**
 * Vídeos do canal oficial do YouTube: youtube.com/@comunhaosaleluz
 *
 * Títulos, datas de publicação e IDs obtidos diretamente do canal
 * (nenhum dado foi inventado). Para adicionar um vídeo novo, copie o ID
 * da URL (a parte depois de `watch?v=`) e inclua no topo da lista.
 *
 * Futuramente isto pode ser automatizado via YouTube Data API v3
 * ou pelo feed RSS do canal.
 */

export type Video = {
  /** ID do vídeo no YouTube (parte final da URL) */
  id: string;
  titulo: string;
  /** Preletor da mensagem */
  preletor: string;
  /** Data de publicação no formato ISO (YYYY-MM-DD) */
  data: string;
};

/** Ordem: do mais recente para o mais antigo. */
export const videos: Video[] = [
  {
    id: "a9c8hUM_AD8",
    titulo: "Um pai mal compreendido",
    preletor: "Bispo Cláudio Gonçalves",
    data: "2026-08-12",
  },
  {
    id: "wiEYzj60hps",
    titulo: "Como você tem administrado aquilo que não é teu?",
    preletor: "Bispo Cláudio Gonçalves",
    data: "2026-08-11",
  },
  {
    id: "iNzENP7l7jE",
    titulo: "A ceia não é para os perfeitos, é para os culpados",
    preletor: "Bispo Cláudio Gonçalves",
    data: "2026-08-05",
  },
  {
    id: "b1fvDdfealc",
    titulo: "Ossos que trazem vida",
    preletor: "Pr. Cláudio Gonçalves",
    data: "2020-06-14",
  },
];

/** Um ID válido tem 11 caracteres — usamos isso para detectar placeholders. */
export const videoValido = (id: string) => /^[\w-]{11}$/.test(id);

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/** Formata "2026-08-12" como "12 de agosto de 2026" */
export function formatarDataVideo(dataISO: string) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${Number(dia)} de ${MESES[Number(mes) - 1]} de ${ano}`;
}

/** URL do link direto para o vídeo no YouTube */
export const urlVideo = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;
