import Link from "next/link";
import { igreja } from "@/data/igreja";
import { ministerios } from "@/data/ministerios";
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
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-terracota-500">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2c2.8 3.4 5.5 6 5.5 9.6A5.5 5.5 0 0 1 12 17a5.5 5.5 0 0 1-5.5-5.4C6.5 8 9.2 5.4 12 2Zm0 4.6c-1.4 1.9-3 3.4-3 5a3 3 0 0 0 6 0c0-1.6-1.6-3.1-3-5ZM7 19h10v2H7v-2Z" />
              </svg>
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl text-white">
                Comunhão
              </span>
              <span className="block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-terracota-500">
                Sal e Luz
              </span>
            </span>
          </div>

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
