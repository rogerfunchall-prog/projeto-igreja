/**
 * Vídeos em destaque do canal do YouTube.
 *
 * [PREENCHER] — substituir pelos IDs dos 3 vídeos mais recentes do canal
 * youtube.com/comunhaosaleluz. Futuramente isto pode ser automatizado
 * via YouTube Data API v3 ou pelo feed RSS do canal.
 */

export type Video = {
  /** ID do vídeo no YouTube (parte final da URL) */
  id: string;
  titulo: string;
  data: string;
};

export const videos: Video[] = [
  { id: "PREENCHER_ID_1", titulo: "[PREENCHER: título do vídeo mais recente]", data: "[PREENCHER: data]" },
  { id: "PREENCHER_ID_2", titulo: "[PREENCHER: título do 2º vídeo]", data: "[PREENCHER: data]" },
  { id: "PREENCHER_ID_3", titulo: "[PREENCHER: título do 3º vídeo]", data: "[PREENCHER: data]" },
];

/** Um ID válido tem 11 caracteres — usamos isso para detectar placeholders. */
export const videoValido = (id: string) => /^[\w-]{11}$/.test(id);
