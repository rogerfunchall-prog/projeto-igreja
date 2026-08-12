import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { MinistryCard } from "@/components/MinistryCard";
import { CTASection } from "@/components/CTASection";
import { ministerios } from "@/data/ministerios";

export const metadata: Metadata = {
  title: "Ministérios",
  description:
    "Conheça os 6 ministérios da Comunhão Sal e Luz: Diaconato, Song, Reina, Underground, Infantil e Ministério de Mulheres.",
};

export default function MinisteriosHub() {
  return (
    <>
      <PageHero
        eyebrow="Ministérios"
        titulo="Encontre o seu lugar"
        descricao="Seis frentes organizadas por perfil de público — para crianças, jovens, mulheres, servos e adoradores."
        imagem="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=70"
        altImagem="[PLACEHOLDER] Membros dos ministérios da Comunhão Sal e Luz reunidos"
        trilha={[{ href: "/ministerios", label: "Ministérios" }]}
      />

      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Nossas frentes"
            titulo="Seis ministérios, um só corpo"
            descricao="Cada ministério tem uma liderança dedicada e uma porta aberta. Clique para conhecer, ver os horários e dizer que você quer participar."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ministerios.map((m, i) => (
              <MinistryCard key={m.slug} ministerio={m} prioridade={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Tabela-resumo de liderança — leitura rápida para quem já conhece */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-site">
          <TituloSecao
            eyebrow="Liderança"
            titulo="Quem responde por cada ministério"
            alinhamento="esquerda"
          />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">
                Ministérios da Comunhão Sal e Luz e suas respectivas lideranças
              </caption>
              <thead>
                <tr className="border-b-2 border-tinta/15">
                  <th
                    scope="col"
                    className="py-4 pr-6 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-tinta-suave"
                  >
                    Ministério
                  </th>
                  <th
                    scope="col"
                    className="py-4 pr-6 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-tinta-suave"
                  >
                    Liderança
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-tinta-suave"
                  >
                    Encontro
                  </th>
                </tr>
              </thead>
              <tbody>
                {ministerios.map((m) => (
                  <tr key={m.slug} className="border-b border-tinta/10">
                    <th scope="row" className="py-5 pr-6 font-display text-xl">
                      {m.nome}
                    </th>
                    <td className="py-5 pr-6 text-tinta-suave">
                      {m.lideres.join(" e ")}
                    </td>
                    <td className="py-5 text-sm text-tinta-suave">
                      {m.encontro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Quer servir?"
        titulo="Todo mundo tem um dom para colocar em prática"
        descricao="Se você quer participar de um ministério mas não sabe por onde começar, fale com a gente. A gente te ajuda a encontrar o lugar certo."
        acaoPrimaria={{ href: "/contato", label: "Quero conversar" }}
        acaoSecundaria={{
          href: "https://instagram.com/comunhaosaleluz",
          label: "Chamar no Instagram",
          externo: true,
        }}
      />
    </>
  );
}
