import Image from "next/image";
import Link from "next/link";

/**
 * Cabeçalho das páginas internas: imagem de fundo, título display
 * e breadcrumb — mesmo padrão de "page title" do template Nazareth.
 */
export function PageHero({
  eyebrow,
  titulo,
  descricao,
  imagem = "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=70",
  altImagem = "[PLACEHOLDER] Foto da comunidade da Comunhão Sal e Luz reunida",
  trilha = [],
}: {
  eyebrow?: string;
  titulo: string;
  descricao?: string;
  imagem?: string;
  altImagem?: string;
  trilha?: { href: string; label: string }[];
}) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-center overflow-hidden py-20 lg:min-h-[54vh]">
      <Image
        src={imagem}
        alt={altImagem}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-profundo-900/75" />

      <div className="container-site">
        {eyebrow ? (
          <span className="eyebrow text-terracota-300">{eyebrow}</span>
        ) : null}

        <h1 className="max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl">
          {titulo}
        </h1>

        {descricao ? (
          <p className="mt-6 max-w-2xl text-lg text-white/80">{descricao}</p>
        ) : null}

        {trilha.length > 0 ? (
          <nav aria-label="Trilha de navegação" className="mt-8">
            <ol className="flex flex-wrap items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-terracota-400">
                  Home
                </Link>
              </li>
              {trilha.map((item, i) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-terracota-500">
                    /
                  </span>
                  {i === trilha.length - 1 ? (
                    <span className="text-white" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-terracota-400"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
