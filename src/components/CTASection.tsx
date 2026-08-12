import { Botao } from "./Botao";

/**
 * Faixa de chamada para ação com imagem de fundo em parallax simulado
 * (equivalente ao bloco "See What God Can Do Through You" do Nazareth).
 */
export function CTASection({
  eyebrow,
  titulo,
  descricao,
  acaoPrimaria,
  acaoSecundaria,
  imagem = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=70",
}: {
  eyebrow?: string;
  titulo: string;
  descricao?: string;
  acaoPrimaria: { href: string; label: string };
  acaoSecundaria?: { href: string; label: string; externo?: boolean };
  imagem?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Fundo fixo + overlay escuro para garantir contraste AA do texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${imagem})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-profundo-900/80" />

      <div className="container-site flex flex-col items-center py-24 text-center lg:py-32">
        {eyebrow ? (
          <span className="eyebrow text-terracota-300">{eyebrow}</span>
        ) : null}

        <h2 className="max-w-3xl text-3xl text-white sm:text-4xl lg:text-5xl">
          {titulo}
        </h2>

        {descricao ? (
          <p className="mt-6 max-w-2xl text-lg text-white/80">{descricao}</p>
        ) : null}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Botao href={acaoPrimaria.href}>{acaoPrimaria.label}</Botao>
          {acaoSecundaria ? (
            <Botao
              href={acaoSecundaria.href}
              variante="claro"
              externo={acaoSecundaria.externo}
            >
              {acaoSecundaria.label}
            </Botao>
          ) : null}
        </div>
      </div>
    </section>
  );
}
