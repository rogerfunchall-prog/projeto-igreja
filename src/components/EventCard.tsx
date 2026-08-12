import Image from "next/image";
import { formatarBadge, type Evento } from "@/data/eventos";
import { IconePin, IconeRelogio } from "./Icones";

/**
 * Card de evento com o badge de data em destaque (dia grande + mês),
 * exatamente o padrão de eventos do template Nazareth.
 */
export function EventCard({ evento }: { evento: Evento }) {
  const { dia, mes } = formatarBadge(evento.data);

  return (
    <article className="group border border-tinta/10 bg-white transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-16/9 overflow-hidden">
        <Image
          src={evento.imagem}
          alt={`[PLACEHOLDER] Imagem do evento ${evento.titulo}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge de data */}
        <div className="absolute left-6 top-0 flex w-16 flex-col items-center bg-terracota-500 py-3 text-white">
          <span className="font-display text-2xl leading-none">{dia}</span>
          <span className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.14em]">
            {mes}
          </span>
        </div>
      </div>

      <div className="p-7">
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-bronze">
          {evento.categoria}
        </span>

        <h3 className="mt-3 text-2xl transition-colors group-hover:text-terracota-500">
          {evento.titulo}
        </h3>

        <p className="mt-4 text-tinta-suave">{evento.descricao}</p>

        <ul className="mt-6 space-y-2 border-t border-tinta/10 pt-5 text-sm text-tinta-suave">
          <li className="flex items-center gap-2">
            <IconeRelogio className="h-4 w-4 text-terracota-500" />
            {evento.horario}
          </li>
          <li className="flex items-center gap-2">
            <IconePin className="h-4 w-4 text-terracota-500" />
            {evento.local}
          </li>
        </ul>
      </div>
    </article>
  );
}
