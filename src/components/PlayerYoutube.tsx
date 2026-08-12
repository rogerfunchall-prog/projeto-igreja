"use client";

import Image from "next/image";
import { useState } from "react";
import { IconePlay } from "./Icones";

/**
 * Player de YouTube com carregamento sob demanda ("facade").
 *
 * Em vez de embutir o iframe de imediato — o que puxa ~1 MB de scripts do
 * YouTube por vídeo e derruba o LCP/TBT —, mostramos a capa do vídeo e só
 * carregamos o player quando a pessoa clica. Isso mantém os Core Web Vitals
 * no verde mesmo com vários vídeos na mesma página.
 */
export function PlayerYoutube({
  id,
  titulo,
  prioridade = false,
}: {
  id: string;
  titulo: string;
  prioridade?: boolean;
}) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTocando(true)}
      aria-label={`Assistir ao vídeo: ${titulo}`}
      className="group absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt={`Capa do vídeo "${titulo}" no canal da Comunhão Sal e Luz`}
        fill
        priority={prioridade}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Véu escuro: garante contraste do botão sobre qualquer capa */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-profundo-900/35 transition-colors duration-300 group-hover:bg-profundo-900/20"
      />

      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-terracota-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 lg:h-20 lg:w-20"
      >
        <IconePlay className="ml-1 h-7 w-7 lg:h-8 lg:w-8" />
      </span>
    </button>
  );
}
