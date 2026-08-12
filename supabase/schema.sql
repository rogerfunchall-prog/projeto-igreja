-- ============================================================
-- Schema do Supabase — Comunhão Sal e Luz
-- Rode este script no SQL Editor do seu projeto Supabase.
-- ============================================================

-- ---------- Mensagens do formulário de contato ----------
create table if not exists public.contatos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  assunto text,
  mensagem text not null,
  lido boolean not null default false,
  criado_em timestamptz not null default now()
);

-- ---------- Pedidos de oração (acesso restrito) ----------
create table if not exists public.pedidos_oracao (
  id uuid primary key default gen_random_uuid(),
  nome text,                       -- opcional: pedido pode ser anônimo
  contato text,                    -- opcional
  pedido text not null,
  sigilo boolean not null default false,
  atendido boolean not null default false,
  criado_em timestamptz not null default now()
);

-- ---------- Interesse em participar de ministérios ----------
create table if not exists public.interesses_ministerio (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  contato text not null,
  ministerio text not null,
  mensagem text,
  respondido boolean not null default false,
  criado_em timestamptz not null default now()
);

-- ---------- Agenda de eventos (futuro: alimentar o site) ----------
create table if not exists public.eventos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  data date not null,
  horario text,
  local text,
  descricao text,
  imagem_url text,
  categoria text,
  publicado boolean not null default true,
  criado_em timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- O site escreve pelo servidor usando a SERVICE ROLE KEY,
-- que ignora RLS. Nenhuma política de SELECT é criada para as
-- tabelas sensíveis — ou seja, ninguém lê pedidos de oração
-- pelo anon key. A leitura acontece só no painel do Supabase.
-- ============================================================

alter table public.contatos enable row level security;
alter table public.pedidos_oracao enable row level security;
alter table public.interesses_ministerio enable row level security;
alter table public.eventos enable row level security;

-- Eventos publicados podem ser lidos publicamente (para a agenda dinâmica).
drop policy if exists "eventos publicados sao publicos" on public.eventos;
create policy "eventos publicados sao publicos"
  on public.eventos for select
  using (publicado = true);

-- Índices úteis para o painel administrativo
create index if not exists contatos_criado_em_idx on public.contatos (criado_em desc);
create index if not exists pedidos_oracao_criado_em_idx on public.pedidos_oracao (criado_em desc);
create index if not exists eventos_data_idx on public.eventos (data asc);
