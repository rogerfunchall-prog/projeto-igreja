import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { CTASection } from "@/components/CTASection";
import { Botao } from "@/components/Botao";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a história, a visão, a missão e os valores da Comunhão Sal e Luz, igreja em Limeira–SP, e as iniciativas que sustentamos.",
};

/** Visão, missão e valores — textos a serem confirmados pela igreja. */
const PILARES = [
  {
    rotulo: "Visão",
    titulo: "Onde queremos chegar",
    texto:
      "[PREENCHER: declaração de visão da Comunhão Sal e Luz]. Este espaço deve receber o texto oficial aprovado pela liderança.",
  },
  {
    rotulo: "Missão",
    titulo: "O que nos move todos os dias",
    texto:
      "[PREENCHER: declaração de missão da Comunhão Sal e Luz]. Este espaço deve receber o texto oficial aprovado pela liderança.",
  },
  {
    rotulo: "Valores",
    titulo: "No que não abrimos mão",
    texto:
      "[PREENCHER: lista de valores da Comunhão Sal e Luz]. Este espaço deve receber o texto oficial aprovado pela liderança.",
  },
];

export default function QuemSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        titulo="Uma igreja que serve Limeira"
        descricao="Nossa história, o que cremos e as pessoas que caminham à frente desta comunidade."
        trilha={[{ href: "/quem-somos", label: "Quem Somos" }]}
      />

      {/* ---------------- História ---------------- */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Nossa história</span>
            <h2 className="mt-1 text-3xl sm:text-4xl">
              Como a Comunhão Sal e Luz começou
            </h2>

            <div className="mt-6 space-y-5 text-lg text-tinta-suave">
              <p>
                [PREENCHER: história da igreja — ano de fundação, como surgiu,
                quem estava no início, marcos importantes.]
              </p>
              <p>
                [PREENCHER: como a igreja chegou ao endereço atual na R.
                Comendador Vicente Leone, 426, no antigo Supermercado Covabra, e
                o que mudou desde então.]
              </p>
              <p className="border-l-4 border-terracota-500 pl-5 font-display text-2xl text-tinta">
                &ldquo;[PREENCHER: frase que representa o coração da igreja]&rdquo;
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-3/4 overflow-hidden sm:mt-10">
              <Image
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=70"
                alt="[PLACEHOLDER] Interior do templo da Comunhão Sal e Luz durante um culto"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=70"
                alt="[PLACEHOLDER] Membros da igreja reunidos em comunhão"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Visão / Missão / Valores ---------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="No que cremos"
            titulo="Visão, missão e valores"
            descricao="Os textos abaixo devem ser confirmados pela liderança antes da publicação."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {PILARES.map((p) => (
              <article
                key={p.rotulo}
                className="border border-tinta/10 bg-creme-50 p-8"
              >
                <span className="font-script text-3xl text-terracota-500">
                  {p.rotulo}
                </span>
                <h3 className="mt-2 text-2xl">{p.titulo}</h3>
                <p className="mt-4 text-tinta-suave">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Liderança pastoral ---------------- */}
      <section className="bg-creme-200 py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Liderança"
            titulo="Quem caminha à frente"
            descricao="A liderança pastoral que pastoreia e serve a Comunhão Sal e Luz."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=70"
                alt="[PLACEHOLDER] Foto do pastor titular da Comunhão Sal e Luz"
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-terracota-500">
                Pastor titular
              </span>
              <h3 className="mt-2 text-3xl">
                [PREENCHER: nome do pastor titular]
              </h3>
              <div className="mt-5 space-y-4 text-lg text-tinta-suave">
                <p>
                  [PREENCHER: biografia curta — tempo de ministério, formação,
                  família, chamado.]
                </p>
                <p>
                  [PREENCHER: mensagem de boas-vindas do pastor aos visitantes
                  do site.]
                </p>
              </div>

              <p className="mt-6 text-sm text-tinta-suave">
                [PREENCHER: demais membros do corpo pastoral e presbitério, se
                a igreja desejar listar nesta página.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Nossas iniciativas (prova social) ---------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Nossas iniciativas"
            titulo="Fé que sai das quatro paredes"
            descricao="Frentes de impacto que a igreja sustenta. Textos e números a confirmar com a liderança."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="group relative isolate overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=70"
                alt="[PLACEHOLDER] Equipe missionária da igreja em ação social no interior do Ceará"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-0 bg-linear-to-t from-profundo-900/90 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-terracota-400">
                  Missões
                </span>
                <h3 className="mt-2 text-2xl text-white">
                  Base missionária em Tarrafas–CE
                </h3>
                <p className="mt-3 text-white/80">
                  [PREENCHER/CONFIRMAR: descrição do trabalho realizado na base
                  missionária de Tarrafas, no Ceará — desde quando, o que é
                  feito e como a igreja apoia.]
                </p>
              </div>
            </article>

            <article className="group relative isolate overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=70"
                alt="[PLACEHOLDER] Voluntários em atividade de apoio a comunidade terapêutica"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-profundo-900/90 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-terracota-400">
                  Ação social
                </span>
                <h3 className="mt-2 text-2xl text-white">
                  Apoio a comunidade terapêutica
                </h3>
                <p className="mt-3 text-white/80">
                  [PREENCHER/CONFIRMAR: descrição do apoio à comunidade
                  terapêutica — qual instituição, que tipo de suporte a igreja
                  oferece e quantas pessoas são alcançadas.]
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 flex justify-center">
            <Botao href="/contribua" variante="contorno">
              Apoiar estas iniciativas
            </Botao>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Dê o primeiro passo"
        titulo="Venha nos conhecer neste domingo"
        descricao="Chegue sem aviso, sem compromisso. Vai ter alguém na porta esperando por você."
        acaoPrimaria={{ href: "/contato", label: "Como chegar" }}
        acaoSecundaria={{ href: "/ministerios", label: "Ver ministérios" }}
      />
    </>
  );
}
