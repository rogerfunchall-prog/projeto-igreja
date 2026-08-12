import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { EventCard } from "@/components/EventCard";
import { CTASection } from "@/components/CTASection";
import { eventos, formatarDataLonga } from "@/data/eventos";
import { horariosCulto } from "@/data/igreja";

export const metadata: Metadata = {
  title: "Agenda e Eventos",
  description:
    "Confira os próximos eventos e os horários de culto da Comunhão Sal e Luz em Limeira–SP.",
};

export default function Agenda() {
  // Ordena por data crescente (quando migrar para o Supabase, ordenar na query)
  const proximos = [...eventos].sort((a, b) => a.data.localeCompare(b.data));

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        titulo="O que vem por aí"
        descricao="Eventos, encontros e mobilizações da nossa comunidade."
        imagem="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1920&q=70"
        altImagem="[PLACEHOLDER] Igreja reunida em um evento especial"
        trilha={[{ href: "/agenda", label: "Agenda" }]}
      />

      {/* ---------------- Horários fixos de culto ---------------- */}
      <section className="bg-profundo-800 py-16 lg:py-20">
        <div className="container-site">
          <TituloSecao
            eyebrow="Toda semana"
            titulo="Horários de culto"
            claro
            alinhamento="esquerda"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {horariosCulto.map((c) => (
              <div
                key={c.dia}
                className="border border-white/15 bg-white/5 p-7 transition-colors hover:border-terracota-500"
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-terracota-400">
                  {c.dia}
                </p>
                <p className="mt-2 font-display text-2xl text-white">
                  {c.titulo}
                </p>
                <p className="mt-1 text-white/80">{c.horario}</p>
                <p className="mt-4 text-sm text-white/60">{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Próximos eventos (cards) ---------------- */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Próximos eventos"
            titulo="Marque no seu calendário"
            descricao="Esta lista será alimentada pelo Supabase — hoje os dados vêm de um arquivo estático (src/data/eventos.ts)."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {proximos.map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Lista cronológica (leitura rápida) ---------------- */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-site">
          <TituloSecao
            eyebrow="Visão geral"
            titulo="Todos os eventos em ordem"
            alinhamento="esquerda"
          />

          <ul className="mt-10 divide-y divide-tinta/10 border-y border-tinta/10">
            {proximos.map((evento) => (
              <li
                key={evento.id}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="w-48 shrink-0 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-terracota-500">
                  {formatarDataLonga(evento.data)}
                </span>
                <span className="flex-1 font-display text-xl">
                  {evento.titulo}
                </span>
                <span className="text-sm text-tinta-suave">
                  {evento.horario} · {evento.local}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Não perca nada"
        titulo="Siga a gente no Instagram"
        descricao="Avisos de última hora, fotos dos encontros e a agenda sempre atualizada."
        acaoPrimaria={{ href: "/contato", label: "Falar com a igreja" }}
        acaoSecundaria={{
          href: "https://instagram.com/comunhaosaleluz",
          label: "@comunhaosaleluz",
          externo: true,
        }}
      />
    </>
  );
}
