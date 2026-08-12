import { Botao } from "@/components/Botao";

export default function NaoEncontrado() {
  return (
    <section className="bg-creme-100 py-28 lg:py-40">
      <div className="container-site flex flex-col items-center text-center">
        <span className="eyebrow">Ops</span>
        <h1 className="text-4xl sm:text-5xl">
          Não encontramos esta página
        </h1>
        <p className="mt-6 max-w-xl text-lg text-tinta-suave">
          O link pode ter mudado de lugar. Mas você não está perdido — volte para
          a home ou fale com a gente.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Botao href="/">Ir para a home</Botao>
          <Botao href="/contato" variante="contorno">
            Falar com a igreja
          </Botao>
        </div>
      </div>
    </section>
  );
}
