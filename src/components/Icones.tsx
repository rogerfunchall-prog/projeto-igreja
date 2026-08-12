/** Ícones inline (SVG) — evita dependência externa e mantém o bundle enxuto. */

type Props = { className?: string };

export function IconeInstagram({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.4.95.45.4.72.8.95 1.4.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.4-.4.45-.8.72-1.4.95-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.23-1-.5-1.4-.95-.45-.4-.72-.8-.95-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.4.4-.45.8-.72 1.4-.95.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5 0-4.74.07-.94.04-1.4.2-1.7.32-.36.14-.6.3-.86.56-.26.26-.42.5-.56.86-.12.3-.28.76-.32 1.7C3.75 8.75 3.74 9.1 3.74 12s0 3.25.08 4.5c.04.93.2 1.4.32 1.7.14.35.3.6.56.85.26.26.5.42.86.56.3.12.76.28 1.7.32 1.24.07 1.6.08 4.74.08s3.5 0 4.74-.08c.94-.04 1.4-.2 1.7-.32.36-.14.6-.3.86-.56.26-.25.42-.5.56-.85.12-.3.28-.77.32-1.7.07-1.25.08-1.6.08-4.5s0-3.25-.08-4.5c-.04-.93-.2-1.4-.32-1.7a2.3 2.3 0 0 0-.56-.86 2.3 2.3 0 0 0-.86-.56c-.3-.12-.76-.28-1.7-.32C15.5 4 15.14 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-2.98a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  );
}

export function IconeFacebook({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4.05 1.45-4.05 4.15V9.9H7.6V13h2.65v8h3.25Z" />
    </svg>
  );
}

export function IconeYoutube({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.76C18.25 5 12 5 12 5s-6.25 0-7.84.44A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.76C5.75 19 12 19 12 19s6.25 0 7.84-.44a2.5 2.5 0 0 0 1.76-1.76C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
    </svg>
  );
}

export function IconePin({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export function IconeEnvelope({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v.4l-10 5.6L2 6.4V6a1 1 0 0 1 1-1Zm-1 3.7V18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.7l-10 5.6L2 8.7Z" />
    </svg>
  );
}

export function IconeRelogio({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 4 2.3-1 1.7-5-2.9V6h2v6.6Z" />
    </svg>
  );
}

export function IconeSeta({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconePlay({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export function IconeCoracao({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-8-4.9-8-10.4A4.6 4.6 0 0 1 12 7.3 4.6 4.6 0 0 1 20 10.6C20 16.1 12 21 12 21Z" />
    </svg>
  );
}
