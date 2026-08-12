import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TituloSecao } from "@/components/TituloSecao";
import { Botao } from "@/components/Botao";
import { MinistryCard } from "@/components/MinistryCard";
import { EventCard } from "@/components/EventCard";
import { CTASection } from "@/components/CTASection";
import {
  IconeEnvelope,
  IconePin,
  IconePlay,
  IconeRelogio,
  IconeSeta,
} from "@/components/Icones";
import { igreja, horariosCulto } from "@/data/igreja";
import { ministerios } from "@/data/ministerios";
import { eventos } from "@/data/eventos";
import { videos, videoValido } from "@/data/videos";

/**
 * HOME — segue a mesma sequência de seções do template Nazareth:
 * hero slider → destaque de culto → ministérios → convite (2 colunas)
 * → vídeos → eventos → localização → contribuição → CTA final.
 */
export default function Home() {
  const proximoCulto = horariosCulto[0];

  return (
    <>
      <Hero />

      {/* ============================================================
          PRÓXIMO CULTO
          (dado estático; ligar ao Supabase quando a agenda for dinâmica)
          ============================================================ */}
      <section className="relative bg-profundo-800 py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow text-terracota-300">Próximo culto</span>
            <h2 className="mt-1 text-3xl text-white sm:text-4xl">
              {proximoCulto.titulo}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              {proximoCulto.descricao} Chegue um pouco antes — vai ter alguém na
              porta esperando por você.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-white/15 bg-white/5 p-7">
              <IconeRelogio className="h-7 w-7 text-terracota-500" />
              <p className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/50">
                Quando
              </p>
              <p className="mt-1 font-display text-2xl text-white">
                {proximoCulto.dia}
              </p>
              <p className="text-white/80">{proximoCulto.horario}</p>
            </div>

            <div className="border border-white/15 bg-white/5 p-7">
              <IconePin className="h-7 w-7 text-terracota-500" />
              <p className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/50">
                Onde
              </p>
              <p className="mt-1 text-white">
                {igreja.endereco.logradouro}
                <br />
                <span className="text-white/70">
                  {igreja.endereco.bairro} — {igreja.endereco.cidade}/
                  {igreja.endereco.estado}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          NOSSOS MINISTÉRIOS
          ============================================================ */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Nossos ministérios"
            titulo="Tem um lugar pra você — e pra sua família"
            descricao="Seis frentes organizadas por perfil de público. Escolha por onde começar."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ministerios.map((m, i) => (
              <MinistryCard
                key={m.slug}
                ministerio={m}
                prioridade={i < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          VEM PRA COMUNHÃO — bloco de convite em 2 colunas
          (equivalente ao bloco "Beliefs / Community" do Nazareth)
          ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=70"
              alt="[PLACEHOLDER] Pessoas conversando e se abraçando no pátio da igreja depois do culto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-terracota-500 p-7 text-white">
              <p className="font-script text-3xl leading-none">
                {igreja.hashtag}
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Vem pra Comunhão</span>
            <h2 className="mt-1 text-3xl sm:text-4xl">
              Sem crachá, sem roteiro, sem julgamento
            </h2>

            <p className="mt-6 text-lg text-tinta-suave">
              Se você nunca entrou numa igreja, se está voltando depois de anos,
              ou se está só de passagem por Limeira: pode vir. Ninguém vai te
              cobrar nada, ninguém vai te expor. É só chegar e sentar.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Você não precisa se vestir de um jeito específico.",
                "As crianças têm um espaço próprio, cuidado e seguro.",
                "Se quiser só observar da última fileira, está tudo bem.",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 bg-terracota-500"
                  />
                  <span className="text-tinta-suave">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Botao href="/quem-somos">Quem somos</Botao>
              <Botao href="/contato" variante="contorno">
                Como chegar
              </Botao>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FIQUE POR DENTRO — últimos vídeos do YouTube
          ============================================================ */}
      <section className="bg-creme-200 py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <TituloSecao
              eyebrow="Fique por dentro"
              titulo="Últimas mensagens no nosso canal"
              alinhamento="esquerda"
            />
            <Botao href="/cultos-online" variante="contorno">
              Ver todos os cultos
            </Botao>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.id}
                className="group border border-tinta/10 bg-white"
              >
                <div className="relative aspect-16/9 bg-profundo-800">
                  {videoValido(video.id) ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    // Placeholder visível enquanto os IDs reais não forem preenchidos
                    <a
                      href={igreja.redes.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70 transition-colors hover:text-white"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracota-500 text-white">
                        <IconePlay className="h-6 w-6" />
                      </span>
                      <span className="px-6 text-center text-sm">
                        [PREENCHER: ID do vídeo do YouTube]
                      </span>
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-bronze">
                    {video.data}
                  </p>
                  <h3 className="mt-2 text-xl">{video.titulo}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          AGENDA — próximos eventos
          ============================================================ */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Agenda"
            titulo="O que vem por aí na Comunhão"
            descricao="Encontros, eventos especiais e mobilizações da igreja."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {eventos.slice(0, 3).map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Botao href="/agenda" variante="contorno">
              Ver agenda completa
            </Botao>
          </div>
        </div>
      </section>

      {/* ============================================================
          LOCALIZAÇÃO — faixa com mapa (padrão "Location" do Nazareth)
          ============================================================ */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow">Onde nos encontrar</span>
              <h2 className="mt-1 text-3xl sm:text-4xl">
                Na Comunhão Sal e Luz você é recebido por gente que quer te
                conhecer de verdade
              </h2>

              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <IconePin className="mt-1 h-5 w-5 shrink-0 text-terracota-500" />
                  <span>
                    {igreja.endereco.logradouro}
                    <br />
                    {igreja.endereco.bairro}, {igreja.endereco.cidade}–
                    {igreja.endereco.estado}
                    <br />
                    <span className="text-tinta-suave">
                      Referência: {igreja.endereco.referencia}
                    </span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <IconeEnvelope className="mt-1 h-5 w-5 shrink-0 text-terracota-500" />
                  <a
                    href={`mailto:${igreja.contato.email}`}
                    className="link-sublinhado"
                  >
                    {igreja.contato.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <IconeRelogio className="mt-1 h-5 w-5 shrink-0 text-terracota-500" />
                  <span>Atendimento: {igreja.contato.atendimento}</span>
                </li>
              </ul>

              <div className="mt-10">
                <Botao href={igreja.mapaLink} externo>
                  Traçar rota
                </Botao>
              </div>
            </div>
          </div>

          <div className="min-h-[380px]">
            <iframe
              src={igreja.mapaEmbed}
              title="Mapa com a localização da Comunhão Sal e Luz em Limeira/SP"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTRIBUIÇÃO — banner discreto
          ============================================================ */}
      <section className="bg-terracota-500 py-14">
        <div className="container-site flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="font-script text-3xl text-white/80">Contribua</p>
            <h2 className="text-2xl text-white sm:text-3xl">
              Sua generosidade sustenta o que Deus faz por aqui
            </h2>
          </div>

          <Link
            href="/contribua"
            className="inline-flex items-center gap-3 border border-white bg-white px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-terracota-600 transition-colors hover:bg-transparent hover:text-white"
          >
            Dízimos e ofertas
            <IconeSeta className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <CTASection
        eyebrow="Vamos orar com você"
        titulo="Conta pra gente o que está pesando"
        descricao="Você não precisa passar por isso sozinho. Envie seu pedido de oração — em sigilo, se preferir. Nossa equipe de intercessão vai orar por você."
        acaoPrimaria={{ href: "/pedido-de-oracao", label: "Fazer um pedido de oração" }}
        acaoSecundaria={{ href: "/contato", label: "Falar com a igreja" }}
      />
    </>
  );
}
