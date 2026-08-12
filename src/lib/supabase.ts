import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase para uso em Server Actions.
 *
 * Usa a service role key quando disponível (inserções server-side em tabelas
 * protegidas por RLS, como `pedidos_oracao`). Caso as variáveis não estejam
 * configuradas, retorna `null` — os formulários então exibem uma mensagem
 * amigável em vez de quebrar o build/deploy.
 *
 * Configure as chaves em .env.local (ver .env.example).
 */
export function getSupabaseServer(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export const supabaseConfigurado = () =>
  Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
