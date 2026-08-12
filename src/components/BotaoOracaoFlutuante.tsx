import Link from "next/link";
import { IconeCoracao } from "./Icones";

/**
 * Botão flutuante de pedido de oração — requisito do projeto:
 * "CTA de oração sempre visível".
 * No mobile fica acima do polegar; no desktop, canto inferior direito.
 */
export function BotaoOracaoFlutuante() {
  return (
    <Link
      href="/pedido-de-oracao"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 bg-terracota-500 px-5 py-4 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white shadow-2xl transition-colors hover:bg-terracota-600"
    >
      <IconeCoracao className="h-5 w-5" />
      <span className="hidden sm:inline">Pedido de Oração</span>
      <span className="sr-only sm:hidden">Fazer um pedido de oração</span>
    </Link>
  );
}
