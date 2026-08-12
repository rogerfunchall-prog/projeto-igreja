"use client";

import { useState } from "react";

/**
 * Botão "copiar chave Pix" com feedback acessível.
 * Detecta placeholder ([PREENCHER...]) e evita copiar um valor inválido.
 */
export function CopiarPix({ chave }: { chave: string }) {
  const [copiado, setCopiado] = useState(false);
  const [erro, setErro] = useState(false);

  const placeholder = chave.includes("[PREENCHER");

  async function copiar() {
    if (placeholder) return;
    try {
      await navigator.clipboard.writeText(chave);
      setCopiado(true);
      setErro(false);
      setTimeout(() => setCopiado(false), 3000);
    } catch {
      setErro(true);
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <p
          className="flex-1 border border-dashed border-terracota-500 bg-white px-5 py-4 font-mono text-base break-all"
          aria-label="Chave Pix da Comunhão Sal e Luz"
        >
          {chave}
        </p>

        <button
          type="button"
          onClick={copiar}
          disabled={placeholder}
          className="shrink-0 bg-terracota-500 px-7 py-4 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-terracota-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {copiado ? "Chave copiada!" : "Copiar chave"}
        </button>
      </div>

      <p role="status" aria-live="polite" className="mt-3 min-h-6 text-sm">
        {placeholder ? (
          <span className="text-tinta-suave">
            A chave Pix real ainda precisa ser informada pela igreja.
          </span>
        ) : copiado ? (
          <span className="text-green-700">
            Chave copiada. Cole no app do seu banco.
          </span>
        ) : erro ? (
          <span className="text-red-600">
            Não foi possível copiar automaticamente — selecione e copie a chave
            acima.
          </span>
        ) : null}
      </p>
    </div>
  );
}
