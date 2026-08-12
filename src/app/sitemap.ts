import type { MetadataRoute } from "next";
import { igreja } from "@/data/igreja";
import { ministerios } from "@/data/ministerios";

/** Sitemap gerado automaticamente a partir das rotas do site. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = igreja.site;
  const agora = new Date();

  const paginas = [
    { rota: "", prioridade: 1 },
    { rota: "/quem-somos", prioridade: 0.8 },
    { rota: "/ministerios", prioridade: 0.9 },
    { rota: "/agenda", prioridade: 0.8 },
    { rota: "/cultos-online", prioridade: 0.9 },
    { rota: "/contribua", prioridade: 0.7 },
    { rota: "/contato", prioridade: 0.7 },
    { rota: "/pedido-de-oracao", prioridade: 0.7 },
  ];

  return [
    ...paginas.map((p) => ({
      url: `${base}${p.rota}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: p.prioridade,
    })),
    ...ministerios.map((m) => ({
      url: `${base}/ministerios/${m.slug}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
