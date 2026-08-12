import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FormularioOracao } from "@/components/FormularioOracao";
import { igreja } from "@/data/igreja";

export const metadata: Metadata = {
  title: "Pedido de Oração",
  description:
    "Envie seu pedido de oração para a equipe de intercessão da Comunhão Sal e Luz. Você pode enviar anonimamente e pedir sigilo.",
};

export default function PedidoDeOracao() {
  return (
    <>
      <PageHero
        eyebrow="Vamos orar com você"
        titulo="Conta pra gente o que está pesando"
        descricao="Você não precisa carregar isso sozinho. Pode ser anônimo, pode ser em sigilo."
        imagem="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=70"
        altImagem="[PLACEHOLDER] Mãos unidas em oração durante um momento de intercessão"
        trilha={[{ href: "/pedido-de-oracao", label: "Pedido de Oração" }]}
      />

      <section className="bg-creme-100 py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Contexto pastoral */}
          <div>
            <span className="eyebrow">Como funciona</span>
            <h2 className="mt-1 text-3xl sm:text-4xl">
              Alguém vai orar por você de verdade
            </h2>

            <div className="mt-6 space-y-5 text-lg text-tinta-suave">
              <p>
                Nosso grupo de intercessão recebe cada pedido e ora por ele. Não
                é formulário automático: tem gente do outro lado.
              </p>
              <p>
                Se você marcar &ldquo;manter em sigilo&rdquo;, seu pedido não vai
                para nenhum grupo de WhatsApp nem será lido em voz alta em culto
                — fica apenas com a equipe.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Você não precisa se identificar.",
                "Não julgamos o seu pedido, seja ele qual for.",
                "Se deixar um contato, podemos responder com uma palavra.",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 bg-terracota-500"
                  />
                  <span className="text-tinta-suave">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 border-l-4 border-terracota-500 pl-5 font-display text-2xl text-tinta">
              &ldquo;Lancem sobre ele toda a sua ansiedade, porque ele tem
              cuidado de vocês.&rdquo;
              <span className="mt-2 block font-sans text-base text-tinta-suave">
                1 Pedro 5:7
              </span>
            </p>

            <p className="mt-8 text-sm text-tinta-suave">
              Se for uma emergência, fale direto com a igreja:{" "}
              <a
                href={`mailto:${igreja.contato.email}`}
                className="link-sublinhado text-terracota-600"
              >
                {igreja.contato.email}
              </a>{" "}
              — atendimento {igreja.contato.atendimento.toLowerCase()}.
            </p>
          </div>

          {/* Formulário */}
          <div className="border border-tinta/10 bg-white p-7 lg:p-10">
            <h2 className="text-2xl">Seu pedido de oração</h2>
            <p className="mt-2 text-tinta-suave">
              Só o campo do pedido é obrigatório.
            </p>

            <div className="mt-8">
              <FormularioOracao />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
