import Link from "next/link";
import { igreja } from "@/data/igreja";
import { ministerios } from "@/data/ministerios";
import { Logo } from "./Logo";
import {
  IconeEnvelope,
  IconeFacebook,
  IconeInstagram,
  IconePin,
  IconeRelogio,
  IconeYoutube,
} from "./Icones";

/**
 * Rodapé no padrão Nazareth: bloco escuro em 4 colunas
 * (marca + endereço, navegação, ministérios, mini-mapa) e barra de copyright.
 */
export function Footer() {
  return (
    <footer className="bg-profundo-800 text-white/70">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* --- Marca + contato --- */}
        <div>
          <Logo variante="clara" />

          <p className="mt-6 text-sm leading-relaxed">
            Uma igreja em Limeira–SP onde você é bem-vindo do jeito que você é.
            Venha conhecer, venha pertencer.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3">
              <IconePin className="mt-0.5 h-4 w-4 shrink-0 text-terracota-500" />
              <span>
                {igreja.endereco.logradouro}
                <br />
                {igreja.endereco.bairro}, {igreja.endereco.cidade} –{" "}
                {igreja.endereco.estado}
                <br />
                <span className="text-white/50">
                  ({igreja.endereco.referencia})
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <IconeEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-terracota-500" />
              <a
                href={`mailto:${igreja.contato.email}`}
                className="link-sublinhado"
              >
                {igreja.contato.email}
              </a>
            </li>
            <li className="flex gap-3">
              <IconeRelogio className="mt-0.5 h-4 w-4 shrink-0 text-terracota-500" />
              <span>{igreja.contato.atendimento}</span>
            </li>
          </ul>
        </div>

        {/* --- Navegação --- */}
        <div>
          <h3 className="text-lg text-white">Navegação</h3>
          <span className="mt-3 block h-0.5 w-10 bg-terracota-500" />
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { href: "/quem-somos", label: "Quem Somos" },
              { href: "/ministerios", label: "Ministérios" },
              { href: "/agenda", label: "Agenda e Eventos" },
              { href: "/cultos-online", label: "Cultos Online" },
              { href: "/contribua", label: "Contribua" },
              { href: "/pedido-de-oracao", label: "Pedido de Oração" },
              { href: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-sublinhado">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Ministérios --- */}
        <div>
          <h3 className="text-lg text-white">Ministérios</h3>
          <span className="mt-3 block h-0.5 w-10 bg-terracota-500" />
          <ul className="mt-6 space-y-3 text-sm">
            {ministerios.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/ministerios/${m.slug}`}
                  className="link-sublinhado"
                >
                  {m.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Mini-mapa --- */}
        <div>
          <h3 className="text-lg text-white">Como chegar</h3>
          <span className="mt-3 block h-0.5 w-10 bg-terracota-500" />
          <div className="mt-6 overflow-hidden border border-white/10">
            <iframe
              src={igreja.mapaEmbed}
              title="Mapa da localização da Comunhão Sal e Luz"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-44 w-full grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <a
            href={igreja.mapaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-terracota-400 hover:text-terracota-300"
          >
            Traçar rota
          </a>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={igreja.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Comunhão Sal e Luz"
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-terracota-500 hover:bg-terracota-500 hover:text-white"
            >
              <IconeInstagram />
            </a>
            <a
              href={igreja.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Comunhão Sal e Luz"
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-terracota-500 hover:bg-terracota-500 hover:text-white"
            >
              <IconeFacebook />
            </a>
            <a
              href={igreja.redes.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal do YouTube da Comunhão Sal e Luz"
              className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-terracota-500 hover:bg-terracota-500 hover:text-white"
            >
              <IconeYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* --- Barra de copyright --- */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-[0.8rem] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {igreja.nome}. Todos os direitos
            reservados.
          </p>
          <p className="font-script text-xl text-terracota-400">
            {igreja.hashtag}
          </p>
        </div>
      </div>
    </footer>
  );
}
