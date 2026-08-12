import Image from "next/image";
import Link from "next/link";
import type { Ministerio } from "@/data/ministerios";
import { IconeSeta } from "./Icones";

/**
 * Card de ministério — foto do líder, nome, frase curta e link para a subpágina.
 * Zoom suave na imagem no hover, como no template Nazareth.
 */
export function MinistryCard({
  ministerio,
  prioridade = false,
}: {
  ministerio: Ministerio;
  prioridade?: boolean;
}) {
  return (
    <article className="group border border-tinta/10 bg-white transition-shadow duration-300 hover:shadow-xl">
      <Link
        href={`/ministerios/${ministerio.slug}`}
        className="block focus-visible:outline-none"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={ministerio.fotoLider}
            alt={`[PLACEHOLDER] Foto de ${ministerio.lideres.join(" e ")}, liderança do ministério ${ministerio.nome}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={prioridade}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-0 left-0 bg-terracota-500 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white">
            Ministério
          </span>
        </div>

        <div className="p-7">
          <h3 className="text-2xl transition-colors group-hover:text-terracota-500">
            {ministerio.nome}
          </h3>

          <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-terracota-500">
            {ministerio.lideres.join(" · ")}
          </p>

          <p className="mt-4 text-tinta-suave">{ministerio.frase}</p>

          <span className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-tinta transition-colors group-hover:text-terracota-500">
            Conhecer
            <IconeSeta className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
