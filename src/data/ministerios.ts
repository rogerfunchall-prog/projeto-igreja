/**
 * Os 6 ministérios da Comunhão Sal e Luz.
 * Nomes de liderança são dados reais fornecidos pela igreja.
 * Textos de propósito são RASCUNHOS provisórios — a igreja deve revisar.
 */

export type Ministerio = {
  slug: string;
  nome: string;
  lideres: string[];
  /** Frase curta usada nos cards da home e do hub */
  frase: string;
  /** Texto de propósito (rascunho editável) */
  proposito: string;
  encontro: string;
  publico: string;
  /** Foto do(s) líder(es) — placeholder */
  fotoLider: string;
  /** Galeria do ministério — placeholders */
  galeria: string[];
  /** Contato para "quero participar" */
  whatsapp: string;
};

export const ministerios: Ministerio[] = [
  {
    slug: "diaconato",
    nome: "Diaconato",
    lideres: ["Pastor Nata Alvarenga"],
    frase: "Servir com as mãos e cuidar com o coração.",
    proposito:
      "Serviço e cuidado prático da igreja — estrutura, acolhimento e apoio à liderança pastoral. O Diaconato existe para que ninguém chegue à Comunhão e se sinta sozinho: da recepção na porta ao funcionamento de cada culto, é o ministério que sustenta o dia a dia da casa. [PREENCHER: texto final aprovado pela liderança]",
    encontro: "[PREENCHER: dia e horário de encontro]",
    publico: "Membros que desejam servir na estrutura e no acolhimento",
    fotoLider:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=70",
    galeria: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=70",
    ],
    whatsapp: "[PREENCHER: WhatsApp do Diaconato]",
  },
  {
    slug: "song",
    nome: "Song",
    lideres: ["César Pelicari", "Thiago Baro"],
    frase: "Louvor e adoração que conduzem a igreja à presença de Deus.",
    proposito:
      "Ministério de louvor e adoração, responsável pela música nos cultos e eventos. O Song reúne músicos, cantores e equipe técnica para servir com excelência e sensibilidade, criando um ambiente onde a igreja adora de coração. [PREENCHER: texto final aprovado pela liderança]",
    encontro: "[PREENCHER: dia e horário de ensaio]",
    publico: "Músicos, cantores e equipe técnica",
    fotoLider:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=70",
    galeria: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=900&q=70",
    ],
    whatsapp: "[PREENCHER: WhatsApp do Song]",
  },
  {
    slug: "reina",
    nome: "Reina",
    lideres: ["Pastora Elisangela Corbini"],
    frase: "Crescimento espiritual e comunhão que transformam.",
    proposito:
      "Ministério voltado a um público específico [CONFIRMAR PÚBLICO: jovens ou liderança feminina], focado em crescimento espiritual e comunhão. O Reina caminha lado a lado com cada participante em discipulado, oração e vida em comunidade. [PREENCHER: texto final aprovado pela liderança]",
    encontro: "[PREENCHER: dia e horário de encontro]",
    publico: "[CONFIRMAR PÚBLICO]",
    fotoLider:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=70",
    galeria: [
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=70",
    ],
    whatsapp: "[PREENCHER: WhatsApp do Reina]",
  },
  {
    slug: "underground",
    nome: "Ministério Underground",
    lideres: ["Fabrício Barros"],
    frase: "Para quem não se encaixa no formato tradicional de igreja.",
    proposito:
      "Ministério com linguagem jovem e urbana, voltado a quem não se identifica com o formato tradicional de igreja. O Underground abre espaço para perguntas honestas, arte, cultura de rua e encontro real com Jesus — sem máscara e sem jargão. [PREENCHER: texto final aprovado pela liderança]",
    encontro: "[PREENCHER: dia e horário de encontro]",
    publico: "Jovens e adultos de linguagem urbana",
    fotoLider:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=70",
    galeria: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=70",
    ],
    whatsapp: "[PREENCHER: WhatsApp do Underground]",
  },
  {
    slug: "infantil",
    nome: "Infantil",
    lideres: ["Pastora Tânia Bernini"],
    frase: "Cada criança conhecendo Jesus do seu jeito.",
    proposito:
      "Cuidado, ensino bíblico e atividades lúdicas para crianças durante os cultos. O Ministério Infantil recebe cada criança com segurança e alegria, ensinando a Palavra em linguagem própria para a idade, para que os pais adorem tranquilos. [PREENCHER: texto final aprovado pela liderança]",
    encontro: "[PREENCHER: dias e horários das turmas]",
    publico: "Crianças (faixas de idade a confirmar)",
    fotoLider:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=70",
    galeria: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=70",
    ],
    whatsapp: "[PREENCHER: WhatsApp do Infantil]",
  },
  {
    slug: "mulheres",
    nome: "Ministério de Mulheres",
    lideres: ["Pastora Marli Gonçalves"],
    frase: "Mulheres que se fortalecem umas às outras.",
    proposito:
      "Comunhão, discipulado e apoio mútuo entre as mulheres da igreja. Um espaço seguro para compartilhar a vida, estudar a Palavra e orar juntas — na alegria e nas fases difíceis. [PREENCHER: texto final aprovado pela liderança]",
    encontro: "[PREENCHER: dia e horário de encontro]",
    publico: "Mulheres de todas as idades",
    fotoLider:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=70",
    galeria: [
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=70",
    ],
    whatsapp: "[PREENCHER: WhatsApp do Ministério de Mulheres]",
  },
];

export function getMinisterio(slug: string) {
  return ministerios.find((m) => m.slug === slug);
}
