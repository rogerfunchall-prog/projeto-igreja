/**
 * Cabeçalho de seção no padrão Nazareth:
 * eyebrow manuscrito (Reenie Beanie) + título display (Yeseva One).
 */
export function TituloSecao({
  eyebrow,
  titulo,
  descricao,
  alinhamento = "centro",
  claro = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  titulo: string;
  descricao?: string;
  alinhamento?: "centro" | "esquerda";
  claro?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  const alinha =
    alinhamento === "centro" ? "text-center mx-auto items-center" : "text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alinha}`}>
      {eyebrow ? (
        <span className={`eyebrow mb-1 ${claro ? "text-terracota-300" : ""}`}>
          {eyebrow}
        </span>
      ) : null}

      <Tag
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] ${
          claro ? "text-white" : ""
        }`}
      >
        {titulo}
      </Tag>

      {descricao ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            claro ? "text-white/80" : "text-tinta-suave"
          }`}
        >
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
