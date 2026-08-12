"use client";

import type { EstadoFormulario } from "@/lib/acoes";

/** Campos de formulário com rótulo, erro inline e alvo de toque generoso. */

const BASE_CAMPO =
  "w-full border bg-white px-4 py-3.5 text-base text-tinta placeholder:text-tinta-suave/60 transition-colors focus:border-terracota-500 focus:outline-none";

export function Rotulo({
  htmlFor,
  children,
  opcional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  opcional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-tinta"
    >
      {children}
      {opcional ? (
        <span className="ml-2 font-normal normal-case tracking-normal text-tinta-suave">
          (opcional)
        </span>
      ) : null}
    </label>
  );
}

export function Campo({
  id,
  name,
  label,
  type = "text",
  required = false,
  opcional = false,
  placeholder,
  erro,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  opcional?: boolean;
  placeholder?: string;
  erro?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <Rotulo htmlFor={id} opcional={opcional}>
        {label}
      </Rotulo>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className={`${BASE_CAMPO} ${
          erro ? "border-red-500" : "border-tinta/15"
        }`}
      />
      {erro ? (
        <p id={`${id}-erro`} className="mt-2 text-sm text-red-600">
          {erro}
        </p>
      ) : null}
    </div>
  );
}

export function AreaTexto({
  id,
  name,
  label,
  required = false,
  opcional = false,
  placeholder,
  erro,
  rows = 6,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  opcional?: boolean;
  placeholder?: string;
  erro?: string;
  rows?: number;
}) {
  return (
    <div>
      <Rotulo htmlFor={id} opcional={opcional}>
        {label}
      </Rotulo>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className={`${BASE_CAMPO} resize-y ${
          erro ? "border-red-500" : "border-tinta/15"
        }`}
      />
      {erro ? (
        <p id={`${id}-erro`} className="mt-2 text-sm text-red-600">
          {erro}
        </p>
      ) : null}
    </div>
  );
}

/** Mensagem de feedback do envio (papel de "toast" acessível). */
export function Feedback({ estado }: { estado: EstadoFormulario }) {
  if (estado.status === "inicial" || !estado.mensagem) return null;

  const sucesso = estado.status === "sucesso";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-start gap-3 border-l-4 p-4 text-base ${
        sucesso
          ? "border-green-600 bg-green-50 text-green-900"
          : "border-red-500 bg-red-50 text-red-900"
      }`}
    >
      <span aria-hidden="true" className="mt-0.5 text-xl leading-none">
        {sucesso ? "✓" : "!"}
      </span>
      <p>{estado.mensagem}</p>
    </div>
  );
}
