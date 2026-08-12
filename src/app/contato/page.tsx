import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TituloSecao } from "@/components/TituloSecao";
import { FormularioContato } from "@/components/FormularioContato";
import {
  IconeEnvelope,
  IconeFacebook,
  IconeInstagram,
  IconePin,
  IconeRelogio,
  IconeYoutube,
} from "@/components/Icones";
import { igreja } from "@/data/igreja";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Comunhão Sal e Luz: endereço em Limeira–SP, e-mail, horário de atendimento e formulário de contato.",
};

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        titulo="Fale com a gente"
        descricao="Dúvidas, visitas, pedidos ou só um oi: estamos por aqui."
        imagem="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?auto=format&fit=crop&w=1920&q=70"
        altImagem="[PLACEHOLDER] Equipe de recepção da igreja acolhendo visitantes na entrada"
        trilha={[{ href: "/contato", label: "Contato" }]}
      />

      {/* ---------------- Formulário + dados ---------------- */}
      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* Formulário */}
          <div>
            <span className="eyebrow">Escreva pra gente</span>
            <h2 className="mt-1 text-3xl sm:text-4xl">
              Sua mensagem chega direto na nossa secretaria
            </h2>
            <p className="mt-5 text-lg text-tinta-suave">
              Respondemos de terça a sexta, das 9h às 18h. Se for um pedido de
              oração, use a{" "}
              <a href="/pedido-de-oracao" className="link-sublinhado text-terracota-600">
                página de pedidos de oração
              </a>
              .
            </p>

            <div className="mt-10 border border-tinta/10 bg-white p-7 lg:p-9">
              <FormularioContato />
            </div>
          </div>

          {/* Dados de contato */}
          <aside className="space-y-6">
            <div className="border border-tinta/10 bg-white p-7">
              <IconePin className="h-7 w-7 text-terracota-500" />
              <h3 className="mt-4 text-xl">Endereço</h3>
              <p className="mt-2 text-tinta-suave">
                {igreja.endereco.logradouro}
                <br />
                {igreja.endereco.bairro}
                <br />
                {igreja.endereco.cidade} – {igreja.endereco.estado}
                <br />
                <span className="text-sm">
                  Referência: {igreja.endereco.referencia}
                </span>
                <br />
                <span className="text-sm">CEP: {igreja.endereco.cep}</span>
              </p>
              <a
                href={igreja.mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-terracota-600 hover:text-terracota-700"
              >
                Traçar rota
              </a>
            </div>

            <div className="border border-tinta/10 bg-white p-7">
              <IconeEnvelope className="h-7 w-7 text-terracota-500" />
              <h3 className="mt-4 text-xl">E-mail e telefone</h3>
              <p className="mt-2 text-tinta-suave">
                <a
                  href={`mailto:${igreja.contato.email}`}
                  className="link-sublinhado"
                >
                  {igreja.contato.email}
                </a>
                <br />
                {igreja.contato.telefone}
              </p>
            </div>

            <div className="border border-tinta/10 bg-white p-7">
              <IconeRelogio className="h-7 w-7 text-terracota-500" />
              <h3 className="mt-4 text-xl">Atendimento</h3>
              <p className="mt-2 text-tinta-suave">
                {igreja.contato.atendimento}
              </p>
            </div>

            <div className="border border-tinta/10 bg-white p-7">
              <h3 className="text-xl">Redes sociais</h3>
              <p className="mt-2 font-script text-2xl text-terracota-500">
                {igreja.hashtag}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={igreja.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Comunhão Sal e Luz"
                  className="flex h-11 w-11 items-center justify-center border border-tinta/15 text-tinta transition-colors hover:border-terracota-500 hover:bg-terracota-500 hover:text-white"
                >
                  <IconeInstagram />
                </a>
                <a
                  href={igreja.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Comunhão Sal e Luz"
                  className="flex h-11 w-11 items-center justify-center border border-tinta/15 text-tinta transition-colors hover:border-terracota-500 hover:bg-terracota-500 hover:text-white"
                >
                  <IconeFacebook />
                </a>
                <a
                  href={igreja.redes.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canal do YouTube da Comunhão Sal e Luz"
                  className="flex h-11 w-11 items-center justify-center border border-tinta/15 text-tinta transition-colors hover:border-terracota-500 hover:bg-terracota-500 hover:text-white"
                >
                  <IconeYoutube />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- Mapa ---------------- */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-site">
          <TituloSecao
            eyebrow="Como chegar"
            titulo="Estamos no antigo Supermercado Covabra"
            alinhamento="esquerda"
          />
          <div className="mt-10 overflow-hidden border border-tinta/10">
            <iframe
              src={igreja.mapaEmbed}
              title="Mapa com a localização da Comunhão Sal e Luz em Limeira/SP"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[460px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
