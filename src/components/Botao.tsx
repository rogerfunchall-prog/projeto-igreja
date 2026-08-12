import Link from "next/link";

/**
 * Botão no padrão do template Nazareth: retangular, caixa alta,
 * letter-spacing largo e transição de preenchimento no hover.
 */

type Variante = "solido" | "contorno" | "claro";

const VARIANTES: Record<Variante, string> = {
  solido:
    "bg-terracota-500 text-white border-terracota-500 hover:bg-terracota-600 hover:border-terracota-600",
  contorno:
    "bg-transparent text-tinta border-tinta/25 hover:bg-terracota-500 hover:text-white hover:border-terracota-500",
  claro:
    "bg-transparent text-white border-white/50 hover:bg-white hover:text-tinta hover:border-white",
};

const BASE =
  "inline-flex items-center justify-center gap-2 border px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300";

export function Botao({
  href,
  children,
  variante = "solido",
  className = "",
  externo = false,
}: {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
  className?: string;
  externo?: boolean;
}) {
  const classes = `${BASE} ${VARIANTES[variante]} ${className}`;

  if (externo) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Versão <button> para formulários */
export function BotaoSubmit({
  children,
  variante = "solido",
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  variante?: Variante;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${BASE} ${VARIANTES[variante]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}
