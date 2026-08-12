import type { Metadata } from "next";
import { Reenie_Beanie, Roboto, Yeseva_One } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BotaoOracaoFlutuante } from "@/components/BotaoOracaoFlutuante";
import { igreja } from "@/data/igreja";

/* ---------- Tipografia (mesma base do template Nazareth) ---------- */
const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-yeseva",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-roboto",
});

const reenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reenie",
});

export const metadata: Metadata = {
  metadataBase: new URL(igreja.site),
  title: {
    default: `${igreja.nome} — Igreja em Limeira/SP`,
    template: `%s | ${igreja.nome}`,
  },
  description:
    "Comunhão Sal e Luz é uma igreja em Limeira–SP. Você tem um lugar aqui: cultos, ministérios para toda a família e uma comunidade que acolhe.",
  keywords: [
    "igreja em Limeira",
    "igreja evangélica Limeira",
    "Comunhão Sal e Luz",
    "culto Limeira SP",
    "ministérios",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: igreja.nome,
    title: `${igreja.nome} — Você tem um lugar aqui`,
    description:
      "Igreja em Limeira–SP. Conheça nossos ministérios e assista aos cultos online.",
    url: igreja.site,
  },
  twitter: {
    card: "summary_large_image",
    title: `${igreja.nome} — Você tem um lugar aqui`,
    description: "Igreja em Limeira–SP. Você tem um lugar aqui.",
  },
  robots: { index: true, follow: true },
};

/** Dados estruturados schema.org — tipo Church */
const schemaChurch = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: igreja.nome,
  url: igreja.site,
  email: igreja.contato.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: igreja.endereco.logradouro,
    addressLocality: igreja.endereco.cidade,
    addressRegion: igreja.endereco.estado,
    addressCountry: "BR",
  },
  sameAs: [igreja.redes.instagram, igreja.redes.facebook, igreja.redes.youtube],
  employee: {
    "@type": "Person",
    name: igreja.lideranca.nome,
    jobTitle: igreja.lideranca.cargo,
  },
  logo: `${igreja.site}/logo-comunhao-sal-e-luz.png`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${yeseva.variable} ${roboto.variable} ${reenie.variable}`}
    >
      <body className="antialiased">
        {/* Atalho de acessibilidade para navegação por teclado */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-terracota-500 focus:px-5 focus:py-3 focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <BotaoOracaoFlutuante />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaChurch) }}
        />
      </body>
    </html>
  );
}
