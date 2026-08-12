import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { Botao } from "@/components/Botao";
import { CTASection } from "@/components/CTASection";
import { IconePin, IconeRelogio, IconeSeta } from "@/components/Icones";
import { PlayerYoutube } from "@/components/PlayerYoutube";
import { igreja, horariosCulto } from "@/data/igreja";
import { videos, formatarDataVideo, urlVideo } from "@/data/videos";

export const metadata: Metadata = {
  title: "Cultos Online",
  description:
    "Assista aos cultos da Comunhão Sal e Luz ao vivo e sob demanda pelo YouTube, e confira os horários dos cultos presenciais em Limeira–SP.",
};

export default function CultosOnline() {
  const [destaque, ...anteriores] = videos;

  return (
    <>
      <PageHero
        eyebrow="Cultos online"
        titulo="Assista de onde você estiver"
        descricao="Se você não pode vir até o templo, o culto vai até você. Transmissões e mensagens completas no nosso canal."
        imagem="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=70"
        altImagem="[PLACEHOLDER] Equipe de louvor durante a transmissão do culto"
        trilha={[{ href: "/cultos-online", label: "Cultos Online" }]}
      />

      {/* ---------------- Player em destaque ---------------- */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Última mensagem"
            titulo="Assista ao culto mais recente"
            descricao="Direto do nosso canal no YouTube. Clique para assistir sem sair do site."
          />

          <div className="mt-12 border border-tinta/10 bg-profundo-800">
            <div className="relative aspect-16/9">
              <PlayerYoutube
                id={destaque.id}
                titulo={destaque.titulo}
                prioridade
              />
            </div>

            <div className="flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:justify-between lg:px-9">
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-terracota-400">
                  {formatarDataVideo(destaque.data)} · {destaque.preletor}
                </p>
                <h3 className="mt-2 font-display text-2xl text-white lg:text-3xl">
                  {destaque.titulo}
                </h3>
              </div>

              <a
                href={urlVideo(destaque.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-terracota-400"
              >
                Abrir no YouTube
                <IconeSeta className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Botao href={igreja.redes.youtube} externo>
              Inscreva-se no canal
            </Botao>
            <Botao href="/pedido-de-oracao" variante="contorno">
              Pedir oração
            </Botao>
          </div>
        </div>
      </section>

      {/* ---------------- Outras mensagens ---------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Mais mensagens"
            titulo="Reveja o que Deus falou com a gente"
            alinhamento="esquerda"
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {anteriores.map((video) => (
              <article
                key={video.id}
                className="flex flex-col border border-tinta/10 bg-creme-50"
              >
                <div className="relative aspect-16/9 bg-profundo-800">
                  <PlayerYoutube id={video.id} titulo={video.titulo} />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-bronze">
                    {formatarDataVideo(video.data)}
                  </p>
                  <h3 className="mt-2 text-xl">{video.titulo}</h3>
                  <p className="mt-2 text-sm text-tinta-suave">
                    {video.preletor}
                  </p>

                  <a
                    href={urlVideo(video.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-terracota-600 transition-colors hover:text-terracota-700"
                  >
                    Abrir no YouTube
                    <IconeSeta className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Cultos presenciais ---------------- */}
      <section className="bg-profundo-800 py-20 lg:py-24">
        <div className="container-site">
          <TituloSecao
            eyebrow="Presencial"
            titulo="Melhor ainda é estar junto"
            descricao="Nossos horários de culto no templo, em Limeira–SP."
            claro
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {horariosCulto.map((c) => (
              <div
                key={c.dia}
                className="border border-white/15 bg-white/5 p-7 transition-colors hover:border-terracota-500"
              >
                <IconeRelogio className="h-6 w-6 text-terracota-500" />
                <p className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-terracota-400">
                  {c.dia}
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  {c.titulo}
                </p>
                <p className="text-white/80">{c.horario}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 border border-white/15 p-6 text-white/80">
            <IconePin className="mt-1 h-5 w-5 shrink-0 text-terracota-500" />
            <p>
              {igreja.endereco.completo} — {igreja.endereco.referencia}.{" "}
              <a
                href={igreja.mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sublinhado text-terracota-400"
              >
                Traçar rota no mapa
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Assistiu e quer conversar?"
        titulo="Estamos aqui de terça a sexta, das 9h às 18h"
        acaoPrimaria={{ href: "/contato", label: "Falar com a igreja" }}
        acaoSecundaria={{ href: "/pedido-de-oracao", label: "Pedido de oração" }}
      />
    </>
  );
}
