import Image from "next/image";
import Link from "next/link";

/**
 * Marca da Comunhão Sal e Luz — emblema circular com cruz e pomba.
 *
 * Duas variantes do mesmo arquivo:
 *  - "escura"  : emblema original (preto), para fundos claros — header
 *  - "clara"   : emblema invertido (branco), para fundos escuros — footer
 */
export function Logo({
  variante = "escura",
  comLink = true,
}: {
  variante?: "escura" | "clara";
  comLink?: boolean;
}) {
  const claro = variante === "clara";

  const conteudo = (
    <>
      <Image
        src={
          claro
            ? "/logo-comunhao-sal-e-luz-branco.png"
            : "/logo-comunhao-sal-e-luz.png"
        }
        alt="Emblema da Comunhão Sal e Luz: cruz e pomba dentro de um círculo"
        width={512}
        height={512}
        // Header é above-the-fold; footer carrega sob demanda
        priority={!claro}
        sizes="56px"
        className="h-12 w-12 shrink-0 lg:h-14 lg:w-14"
      />

      <span className="leading-none">
        <span
          className={`block font-display text-xl ${
            claro ? "text-white" : "text-tinta"
          }`}
        >
          Comunhão
        </span>
        <span className="block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-terracota-500">
          Sal e Luz
        </span>
      </span>
    </>
  );

  if (!comLink) {
    return <div className="flex shrink-0 items-center gap-3">{conteudo}</div>;
  }

  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="Comunhão Sal e Luz — página inicial"
    >
      {conteudo}
    </Link>
  );
}
