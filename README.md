# Comunhão Sal e Luz — Site institucional

Site da **Comunhão Sal e Luz**, igreja evangélica em Limeira–SP.
Substitui o site atual (comunhaosaleluz.com.br).

Base de layout reproduzida do template **Nazareth** (Axiom Themes):
mesma tipografia, mesma paleta-âncora e a mesma sequência de seções da home.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Estilos | Tailwind CSS v4 (config CSS-first em `src/app/globals.css`) |
| Backend | Supabase (contato, pedidos de oração, interesse em ministérios, agenda) |
| Deploy | Vercel |
| Imagens | `next/image` com `remotePatterns` |

---

## Design system

### Tipografia (idêntica ao template Nazareth)

| Uso | Fonte |
|---|---|
| Títulos (display) | **Yeseva One** |
| Corpo de texto | **Roboto** |
| Eyebrow / acento manuscrito | **Reenie Beanie** |

Corpo em **17px** de base — legibilidade para o público 60+.

### Paletas avaliadas

1. **Terracota + Off-white + Azul profundo** — **ESCOLHIDA**
   `#F26837` · `#FFFAF2` · `#12212F`
   É a paleta-âncora do próprio Nazareth. Equilibra calor humano (terracota)
   com peso e seriedade (azul profundo), sem cair no azul corporativo genérico.
2. Âmbar/dourado + Azul profundo — bonito, mas o dourado puxa para um tom
   "celebração/prosperidade" que não combina com o tom acolhedor pedido.
3. Verde-oliva + Areia + Marrom — moderno e sóbrio, mas frio demais para
   uma igreja que quer comunicar abraço.

### Tokens

Definidos com `@theme` em `src/app/globals.css`:
`terracota-*`, `profundo-*`, `creme-*`, `bronze`, `tinta`, `tinta-suave`.
Utilitários próprios: `container-site`, `eyebrow`, `link-sublinhado`.

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              # fontes, SEO global, schema.org Church
│   ├── page.tsx                # Home
│   ├── globals.css             # design system
│   ├── quem-somos/
│   ├── ministerios/
│   │   ├── page.tsx            # hub
│   │   └── [slug]/page.tsx     # 6 subpáginas (SSG)
│   ├── agenda/
│   ├── cultos-online/
│   ├── contribua/
│   ├── contato/
│   ├── pedido-de-oracao/
│   ├── sitemap.ts
│   └── robots.ts
├── components/                 # Header, Footer, Hero, MinistryCard, EventCard, CTASection...
├── data/                       # igreja.ts, ministerios.ts, eventos.ts, videos.ts
└── lib/                        # supabase.ts, acoes.ts (Server Actions)
supabase/schema.sql             # tabelas + RLS
```

---

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha as chaves do Supabase
npm run dev
```

Outros comandos: `npm run build`, `npm run typecheck`, `npm run lint`.

---

## Supabase

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Rode `supabase/schema.sql` no SQL Editor.
3. Preencha `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Tabelas: `contatos`, `pedidos_oracao`, `interesses_ministerio`, `eventos`.
RLS está ativo em todas. Os formulários escrevem via **Server Action** com a
service role key — nada sensível é exposto no cliente. `pedidos_oracao` **não
tem política de SELECT pública**: só é lido pelo painel do Supabase.

Sem as chaves configuradas o site continua funcionando: os formulários exibem
uma mensagem orientando o contato por e-mail, em vez de quebrar.

---

## PENDÊNCIAS DE CONTEÚDO — `[PREENCHER]`

Nada institucional foi inventado. Itens a confirmar com a igreja:

**`src/data/igreja.ts`**
- [ ] Telefone e WhatsApp
- [ ] CEP
- [ ] Chave Pix (valor, tipo e titular)
- [ ] Horários reais dos cultos (e se existe encontro de sábado)

**`src/data/ministerios.ts`** (por ministério)
- [ ] Dia/horário de encontro
- [ ] WhatsApp
- [ ] Texto final de propósito (os atuais são rascunhos)
- [ ] Público do **Reina** — `[CONFIRMAR PÚBLICO]`

**`src/data/eventos.ts`**
- [ ] Eventos reais (títulos, datas, horários, locais, descrições)

**`src/data/videos.ts`** — ✅ concluído
- 4 vídeos reais do canal `@comunhaosaleluz` (IDs, títulos, preletor e datas
  de publicação obtidos do próprio canal). Para adicionar um vídeo novo, basta
  incluir o ID no topo da lista.

**`src/app/quem-somos/page.tsx`**
- [ ] História da igreja
- [ ] Visão, missão e valores
- [ ] Nome e biografia do pastor titular
- [ ] Texto confirmado sobre a base missionária em Tarrafas–CE
- [ ] Texto confirmado sobre o apoio à comunidade terapêutica

**`src/app/contribua/page.tsx`**
- [ ] QR Code do Pix

**Fotografia** — todas as imagens são placeholders (Unsplash) e estão marcadas
com `[PLACEHOLDER]` nos textos `alt`. Substituir por fotos reais da comunidade.

---

## Acessibilidade e performance

- Contraste AA garantido por overlays sobre todas as fotos com texto
- `alt` em 100% das imagens; `title` em todos os iframes
- Navegação completa por teclado + link "Pular para o conteúdo" + `:focus-visible` visível
- Slider do hero respeita `prefers-reduced-motion` e pausa no hover/foco
- Um único `<h1>` por página, hierarquia de headings correta
- `next/image` com `sizes` e `priority` apenas no above-the-fold
- Vídeos do YouTube usam **facade** (`PlayerYoutube`): carrega só a capa e
  injeta o iframe no clique — evita ~1 MB de scripts do YouTube por vídeo
- Todas as 19 rotas são estáticas (SSG) — First Load JS ~103 kB compartilhado

## SEO

- `title`/`description` únicos por página
- Dados estruturados schema.org **`Church`** no layout raiz
- `sitemap.xml` e `robots.txt` gerados pelo Next
- Open Graph e Twitter Card

---

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Configure as 3 variáveis de ambiente (Production + Preview).
3. Deploy — nenhuma configuração extra de build é necessária.
