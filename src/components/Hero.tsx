"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Botao } from "./Botao";

/**
 * Hero em tela cheia com rotação de slides — reproduz o slider de abertura
 * do template Nazareth (eyebrow manuscrito + título display + CTA).
 *
 * Acessibilidade: a rotação para no hover/foco e respeita
 * prefers-reduced-motion; há controles manuais com rótulo.
 */

const SLIDES = [
  {
    eyebrow: "Bem-vindo à Comunhão",
    titulo: "Você tem um lugar aqui",
    texto:
      "Uma igreja em Limeira onde você chega do jeito que está e é recebido de braços abertos. Venha conhecer, venha pertencer.",
    imagem:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=75",
    alt: "[PLACEHOLDER] Pessoas reunidas de braços levantados durante um culto de celebração",
  },
  {
    eyebrow: "Vida em comunidade",
    titulo: "Fé não se vive sozinho",
    texto:
      "Somos famílias, jovens, crianças e avós caminhando juntos. Nossos ministérios existem para que ninguém fique de fora.",
    imagem:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=75",
    alt: "[PLACEHOLDER] Grupo de pessoas de diferentes idades conversando e sorrindo após o culto",
  },
  {
    eyebrow: "Sal e Luz na cidade",
    titulo: "Amar Limeira em atos, não em discurso",
    texto:
      "Da nossa base missionária ao apoio a quem precisa de recomeço: fé que serve a cidade e transforma histórias.",
    imagem:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=75",
    alt: "[PLACEHOLDER] Voluntários da igreja servindo em uma ação social na comunidade",
  },
];

const INTERVALO = 7000;

export function Hero() {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    const semMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (semMovimento || pausado) return;

    const timer = setInterval(
      () => setAtual((i) => (i + 1) % SLIDES.length),
      INTERVALO,
    );
    return () => clearInterval(timer);
  }, [pausado]);

  return (
    <section
      aria-label="Destaques da Comunhão Sal e Luz"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      {/* --- Camadas de imagem com crossfade --- */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.titulo}
          aria-hidden={i !== atual}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
            i === atual ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.imagem}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="scale-105 object-cover"
          />
        </div>
      ))}

      {/* Overlay em gradiente: garante contraste AA do texto sobre a foto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-profundo-900/90 via-profundo-900/70 to-profundo-900/40"
      />

      {/* --- Conteúdo --- */}
      <div className="container-site py-28 lg:py-36">
        <div key={atual} className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-terracota-300">
            {SLIDES[atual].eyebrow}
          </span>

          <h1 className="mt-1 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-7xl">
            {SLIDES[atual].titulo}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 lg:text-xl">
            {SLIDES[atual].texto}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Botao href="/ministerios">Conheça nossos ministérios</Botao>
            <Botao href="/cultos-online" variante="claro">
              Assista ao culto online
            </Botao>
          </div>
        </div>
      </div>

      {/* --- Controles --- */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 lg:bottom-10 lg:left-auto lg:right-10 lg:translate-x-0">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.titulo}
            type="button"
            onClick={() => setAtual(i)}
            aria-label={`Ver destaque ${i + 1}: ${slide.titulo}`}
            aria-current={i === atual}
            className={`h-2.5 transition-all duration-300 ${
              i === atual
                ? "w-10 bg-terracota-500"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
