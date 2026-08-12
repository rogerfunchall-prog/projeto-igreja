"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { igreja } from "@/data/igreja";
import { ministerios } from "@/data/ministerios";
import {
  IconeEnvelope,
  IconeFacebook,
  IconeInstagram,
  IconePin,
  IconeYoutube,
} from "./Icones";

/**
 * Cabeçalho reproduzindo a estrutura do template Nazareth:
 *  1. Barra superior escura com endereço, e-mail e redes sociais
 *  2. Barra principal com logo + menu horizontal + CTA "Contribua"
 *  3. Vira sticky compacto ao rolar a página
 *  4. Menu off-canvas no mobile (mobile-first: maior parte do tráfego vem do Instagram)
 */

const NAV = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/ministerios", label: "Ministérios", submenu: true },
  { href: "/agenda", label: "Agenda" },
  { href: "/cultos-online", label: "Cultos Online" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 80);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Fecha o menu mobile a cada navegação
  useEffect(() => {
    setMenuAberto(false);
    setSubmenuAberto(false);
  }, [pathname]);

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const ativo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-50">
      {/* ---------- 1. Barra superior ---------- */}
      <div className="hidden bg-profundo-800 text-white/70 lg:block">
        <div className="container-site flex h-11 items-center justify-between text-[0.8rem]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <IconePin className="h-4 w-4 text-terracota-500" />
              {igreja.endereco.completo}
            </span>
            <a
              href={`mailto:${igreja.contato.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <IconeEnvelope className="h-4 w-4 text-terracota-500" />
              {igreja.contato.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-script text-xl text-terracota-400">
              {igreja.hashtag}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={igreja.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Comunhão Sal e Luz"
                className="transition-colors hover:text-terracota-400"
              >
                <IconeInstagram className="h-4 w-4" />
              </a>
              <a
                href={igreja.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Comunhão Sal e Luz"
                className="transition-colors hover:text-terracota-400"
              >
                <IconeFacebook className="h-4 w-4" />
              </a>
              <a
                href={igreja.redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal do YouTube da Comunhão Sal e Luz"
                className="transition-colors hover:text-terracota-400"
              >
                <IconeYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- 2. Barra principal (sticky) ---------- */}
      <div
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          rolou
            ? "border-tinta/10 bg-creme-50/95 shadow-sm backdrop-blur"
            : "border-transparent bg-creme-100"
        }`}
      >
        <div className="container-site flex items-center justify-between gap-6 py-4">
          <Logo />

          {/* Menu desktop */}
          <nav aria-label="Navegação principal" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li
                  key={item.href}
                  className={item.submenu ? "group relative" : undefined}
                >
                  <Link
                    href={item.href}
                    className={`text-[0.78rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                      ativo(item.href)
                        ? "text-terracota-500"
                        : "text-tinta hover:text-terracota-500"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.submenu ? (
                    <ul className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 border border-tinta/10 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {ministerios.map((m) => (
                        <li key={m.slug}>
                          <Link
                            href={`/ministerios/${m.slug}`}
                            className="block px-5 py-2.5 text-sm text-tinta-suave transition-colors hover:bg-creme-200 hover:text-terracota-500"
                          >
                            {m.nome}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA de oração sempre visível (requisito do projeto) */}
            <Link
              href="/pedido-de-oracao"
              className="hidden text-[0.78rem] font-bold uppercase tracking-[0.14em] text-tinta transition-colors hover:text-terracota-500 lg:block"
            >
              Pedido de Oração
            </Link>

            <Link
              href="/contribua"
              className="hidden bg-terracota-500 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-terracota-600 sm:block"
            >
              Contribua
            </Link>

            {/* Botão hambúrguer */}
            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-tinta/15 xl:hidden"
            >
              <span
                className={`block h-0.5 w-5 bg-tinta transition-transform ${
                  menuAberto ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-tinta transition-opacity ${
                  menuAberto ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-tinta transition-transform ${
                  menuAberto ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- 3. Menu mobile off-canvas ---------- */}
      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="fixed inset-0 z-40 bg-profundo-800/95 backdrop-blur xl:hidden"
      >
        <nav
          aria-label="Navegação mobile"
          className="container-site h-full overflow-y-auto pb-24 pt-24"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block flex-1 py-4 font-display text-2xl text-white"
                  >
                    {item.label}
                  </Link>
                  {item.submenu ? (
                    <button
                      type="button"
                      onClick={() => setSubmenuAberto((v) => !v)}
                      aria-expanded={submenuAberto}
                      aria-label="Abrir lista de ministérios"
                      className="p-4 text-2xl text-terracota-400"
                    >
                      {submenuAberto ? "−" : "+"}
                    </button>
                  ) : null}
                </div>

                {item.submenu && submenuAberto ? (
                  <ul className="pb-3 pl-4">
                    {ministerios.map((m) => (
                      <li key={m.slug}>
                        <Link
                          href={`/ministerios/${m.slug}`}
                          className="block py-2.5 text-white/70"
                        >
                          {m.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}

            <li className="border-b border-white/10">
              <Link
                href="/pedido-de-oracao"
                className="block py-4 font-display text-2xl text-white"
              >
                Pedido de Oração
              </Link>
            </li>
          </ul>

          <Link
            href="/contribua"
            className="mt-8 flex items-center justify-center bg-terracota-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white"
          >
            Contribua
          </Link>

          <div className="mt-8 flex items-center gap-5 text-white/60">
            <a
              href={igreja.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconeInstagram className="h-6 w-6" />
            </a>
            <a
              href={igreja.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconeFacebook className="h-6 w-6" />
            </a>
            <a
              href={igreja.redes.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <IconeYoutube className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/** Marca da igreja — símbolo do sal (losango) + luz (chama) em terracota */
function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="Comunhão Sal e Luz — página inicial"
    >
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
        <span className="block font-display text-xl text-tinta">
          Comunhão
        </span>
        <span className="block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-terracota-500">
          Sal e Luz
        </span>
      </span>
    </Link>
  );
}
