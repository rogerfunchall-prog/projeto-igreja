import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { Botao } from "@/components/Botao";
import { FormularioMinisterio } from "@/components/FormularioMinisterio";
import { IconeRelogio, IconeSeta } from "@/components/Icones";
import { getMinisterio, ministerios } from "@/data/ministerios";

/** Gera as 6 subpáginas estaticamente no build */
export function generateStaticParams() {
  return ministerios.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMinisterio(slug);

  if (!m) return { title: "Ministério não encontrado" };

  return {
    title: m.nome,
    description: `${m.nome} — ${m.frase} Liderança: ${m.lideres.join(" e ")}. Comunhão Sal e Luz, Limeira–SP.`,
  };
}

export default async function PaginaMinisterio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ministerio = getMinisterio(slug);

  if (!ministerio) notFound();

  const outros = ministerios.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Ministério"
        titulo={ministerio.nome}
        descricao={ministerio.frase}
        imagem={ministerio.galeria[0]}
        altImagem={`[PLACEHOLDER] Foto do ministério ${ministerio.nome} em atividade`}
        trilha={[
          { href: "/ministerios", label: "Ministérios" },
          { href: `/ministerios/${ministerio.slug}`, label: ministerio.nome },
        ]}
      />

      {/* ---------------- Liderança + propósito ---------------- */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[minmax(0,380px)_1fr]">
          {/* Card da liderança */}
          <aside>
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src={ministerio.fotoLider}
                alt={`[PLACEHOLDER] Foto de ${ministerio.lideres.join(" e ")}, liderança do ministério ${ministerio.nome}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>

            <div className="border border-t-0 border-tinta/10 bg-white p-7">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-terracota-500">
                {ministerio.lideres.length > 1 ? "Liderança" : "Liderança"}
              </span>
              <p className="mt-2 font-display text-2xl">
                {ministerio.lideres.join(" e ")}
              </p>

              <dl className="mt-6 space-y-4 border-t border-tinta/10 pt-5 text-sm">
                <div>
                  <dt className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-tinta-suave">
                    Encontros
                  </dt>
                  <dd className="mt-1 flex items-center gap-2">
                    <IconeRelogio className="h-4 w-4 text-terracota-500" />
                    {ministerio.encontro}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-tinta-suave">
                    Para quem
                  </dt>
                  <dd className="mt-1">{ministerio.publico}</dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-tinta-suave">
                    WhatsApp
                  </dt>
                  <dd className="mt-1">{ministerio.whatsapp}</dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* Propósito */}
          <div>
            <span className="eyebrow">Nosso propósito</span>
            <h2 className="mt-1 text-3xl sm:text-4xl">
              Por que o {ministerio.nome} existe
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-tinta-suave">
              {ministerio.proposito}
            </p>

            <div className="mt-10 border-l-4 border-terracota-500 bg-white p-7">
              <p className="font-display text-2xl">
                Quer fazer parte do {ministerio.nome}?
              </p>
              <p className="mt-3 text-tinta-suave">
                Você não precisa ter experiência nem currículo espiritual. Preencha
                abaixo e a liderança entra em contato com você.
              </p>
            </div>

            {/* Formulário "Quero participar" */}
            <div className="mt-8">
              <FormularioMinisterio ministerio={ministerio.nome} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Galeria ---------------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Galeria"
            titulo={`O ${ministerio.nome} em ação`}
            descricao="[PLACEHOLDER] Substituir por fotos reais do ministério."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ministerio.galeria.map((foto, i) => (
              <div
                key={foto}
                className={`relative overflow-hidden ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={foto}
                  alt={`[PLACEHOLDER] Foto ${i + 1} do ministério ${ministerio.nome}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Outros ministérios ---------------- */}
      <section className="bg-creme-200 py-20 lg:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <TituloSecao
              eyebrow="Explore mais"
              titulo="Outros ministérios"
              alinhamento="esquerda"
            />
            <Botao href="/ministerios" variante="contorno">
              Ver todos
            </Botao>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {outros.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/ministerios/${m.slug}`}
                  className="group flex h-full flex-col justify-between border border-tinta/10 bg-white p-7 transition-shadow hover:shadow-lg"
                >
                  <div>
                    <h3 className="text-xl transition-colors group-hover:text-terracota-500">
                      {m.nome}
                    </h3>
                    <p className="mt-3 text-sm text-tinta-suave">{m.frase}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-terracota-500">
                    Conhecer
                    <IconeSeta className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
