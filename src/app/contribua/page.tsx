import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { CopiarPix } from "@/components/CopiarPix";
import { CTASection } from "@/components/CTASection";
import { igreja } from "@/data/igreja";

export const metadata: Metadata = {
  title: "Contribua",
  description:
    "Dízimos e ofertas da Comunhão Sal e Luz. Contribua por Pix e ajude a sustentar a obra em Limeira–SP e nossas frentes missionárias.",
};

/** Para onde vai a contribuição — transparência gera confiança. */
const DESTINOS = [
  {
    titulo: "A casa e o dia a dia",
    texto:
      "Estrutura do templo, energia, som, materiais do Infantil e tudo o que faz cada culto acontecer.",
  },
  {
    titulo: "Missões",
    texto:
      "Sustento da nossa base missionária em Tarrafas–CE e das ações que ela realiza. [CONFIRMAR detalhes]",
  },
  {
    titulo: "Ação social",
    texto:
      "Apoio a quem está em recomeço, incluindo a comunidade terapêutica que caminha com a gente. [CONFIRMAR detalhes]",
  },
];

export default function Contribua() {
  return (
    <>
      <PageHero
        eyebrow="Contribua"
        titulo="Dízimos e ofertas"
        descricao="Contribuir é adoração — um ato de confiança, não uma cobrança."
        imagem="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=70"
        altImagem="[PLACEHOLDER] Mãos unidas em oração durante o momento de contribuição"
        trilha={[{ href: "/contribua", label: "Contribua" }]}
      />

      {/* ---------------- Tom pastoral ---------------- */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Por que contribuímos</span>
            <h2 className="mt-1 text-3xl sm:text-4xl">
              Não é taxa, não é ingresso, não é obrigação
            </h2>

            <div className="mt-6 space-y-5 text-lg text-tinta-suave">
              <p>
                O dízimo e a oferta nascem da gratidão. Reconhecemos que tudo o
                que temos vem de Deus e devolvemos uma parte com alegria — não
                por medo, nem por pressão, e nunca para comprar bênção alguma.
              </p>
              <p>
                Se você está visitando a Comunhão pela primeira vez, você não
                precisa contribuir com nada. Sinta-se em casa. A contribuição é
                um passo de quem já caminha com a gente e quer sustentar junto o
                que Deus faz por aqui.
              </p>
              <p className="border-l-4 border-terracota-500 pl-5 font-display text-2xl text-tinta">
                &ldquo;Cada um dê conforme determinou em seu coração, não com
                tristeza ou por obrigação, pois Deus ama quem dá com
                alegria.&rdquo;
                <span className="mt-2 block text-base font-sans text-tinta-suave">
                  2 Coríntios 9:7
                </span>
              </p>
            </div>
          </div>

          {/* ---------------- Bloco Pix ---------------- */}
          <div className="border border-tinta/10 bg-white p-8 lg:p-10">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-terracota-500">
              Pix
            </span>
            <h3 className="mt-2 text-2xl">Contribua em poucos segundos</h3>
            <p className="mt-3 text-tinta-suave">
              Copie a chave abaixo e cole no aplicativo do seu banco.
            </p>

            <div className="mt-7">
              <CopiarPix chave={igreja.pix.chave} />
            </div>

            <dl className="mt-7 space-y-4 border-t border-tinta/10 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-tinta-suave">Tipo de chave</dt>
                <dd className="text-right font-medium">{igreja.pix.tipo}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-tinta-suave">Titular</dt>
                <dd className="text-right font-medium">
                  {igreja.pix.titular}
                </dd>
              </div>
            </dl>

            {/* QR Code — placeholder até a igreja gerar o código oficial */}
            <div className="mt-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-tinta-suave">
                QR Code
              </p>
              <div className="mt-3 flex aspect-square w-44 flex-col items-center justify-center gap-2 border-2 border-dashed border-tinta/20 bg-creme-100 p-4 text-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-tinta/30"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Zm8 0h2v2h-2v-2Zm4-2h2v2h-2v-2Zm2 2h2v2h-2v-2Zm-4 2h2v2h-2v-2Zm2 2h2v2h-2v-2Zm2-2h2v4h-2v-4Z" />
                </svg>
                <span className="text-xs text-tinta-suave">
                  [PREENCHER: gerar QR Code do Pix]
                </span>
              </div>
            </div>

            <p className="mt-7 text-sm text-tinta-suave">
              Dúvidas sobre contribuição? Escreva para{" "}
              <a
                href={`mailto:${igreja.contato.email}`}
                className="link-sublinhado text-terracota-600"
              >
                {igreja.contato.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Para onde vai ---------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Transparência"
            titulo="Para onde vai a sua contribuição"
            descricao="Descrições a serem confirmadas e detalhadas pela administração da igreja."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {DESTINOS.map((d, i) => (
              <article
                key={d.titulo}
                className="border border-tinta/10 bg-creme-50 p-8"
              >
                <span className="font-display text-4xl text-terracota-500/30">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-2xl">{d.titulo}</h3>
                <p className="mt-4 text-tinta-suave">{d.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Obrigado"
        titulo="Sua generosidade chega mais longe do que você imagina"
        descricao="Cada contribuição sustenta cultos, crianças, missões e recomeços. Que Deus multiplique."
        acaoPrimaria={{ href: "/quem-somos", label: "Ver nossas iniciativas" }}
        acaoSecundaria={{ href: "/contato", label: "Falar com a igreja" }}
      />
    </>
  );
}
