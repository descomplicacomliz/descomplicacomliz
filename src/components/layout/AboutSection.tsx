import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="sobre">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        <div className="relative" data-testid="img-about">
          <div
            className="overflow-hidden rounded-3xl shadow-xl"
            data-testid="box-about-photo"
          >
            <Image
              src="/foto-liz-secao-quem-sou.jpg"
              alt="Lizandra Bortoluzzi - Especialista em Finanças Comportamentais"
              width={540}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div
            className="absolute -bottom-6 -right-3 md:-right-6 grid h-32 w-32 place-items-center rounded-full bg-[hsl(var(--accent))] text-background shadow-lg"
            data-testid="badge-experience"
          >
            <div className="text-center">
              <div
                className="font-serif text-4xl font-semibold"
                data-testid="text-experience-amount"
              >
                24+
              </div>
              <div
                className="text-xs font-semibold"
                data-testid="text-experience-label"
              >
                anos de experiência
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="section-badge inline-flex rounded-full bg-[hsl(var(--secondary))] px-5 py-2.5 text-sm font-semibold tracking-[0.14em] text-foreground/80"
            data-testid="text-about-badge"
          >
            Quem sou
          </div>
          <h2
            className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl"
            data-testid="text-about-title"
          >
            Lizandra Bortoluzzi
          </h2>
          <div className="mt-5 space-y-2 text-sm leading-relaxed text-foreground/70 md:text-base">
            <p data-testid="text-about-p1">
              Sou especialista em Finanças Comportamentais, com mais de 24 anos
              de atuação em bancos e cooperativas de crédito.
            </p>
            <p data-testid="text-about-p2">
              Ao longo dessa trajetória, acompanhei de perto a vida financeira
              de milhares de mulheres — inteligentes, bem-sucedidas e
              independentes — mas que, em silêncio, carregavam culpa ao gastar,
              evitavam olhar para os números e sentiam que, mesmo conquistando
              tanto, ainda não viviam a vida que mereciam.
            </p>
            <p data-testid="text-about-p3">
              Percebi um padrão claro: o problema não era o dinheiro.{" "}
              <strong className="text-foreground/85">Era a relação com ele.</strong>{" "}
              Essa compreensão também transformou a minha própria história.
            </p>
            <p data-testid="text-about-p5">
              Sou natural do Rio Grande do Sul e sempre fui movida por grandes
              sonhos, disciplina e desejo de independência. Aos 30 anos, iniciei
              um novo ciclo em Itajaí (SC). Mesmo com estabilidade, bons
              salários e reconhecimento profissional, me vi emocionalmente
              exausta e desconectada.
            </p>
            <p data-testid="text-about-p6">
              Foi quando encontrei a Programação Neurolinguística (PNL) e uni
              finanças ao desenvolvimento humano. Compreendi que decisões
              financeiras não são apenas números — são emocionais, moldadas por
              crenças, padrões e identidade. Ao reorganizar minha própria vida,
              encontrei algo que nenhum alto salário havia me proporcionado:
              clareza, decisão e liberdade.
            </p>
            <p data-testid="text-about-p9">
              Dessa transformação nasceu o{" "}
              <strong className="text-foreground/85">Método DCL</strong>.{" "}
              <span className="text-[hsl(var(--accent))] font-medium">
                (Decisão - Clareza - Liberdade)
              </span>
            </p>
            <div
              className="mt-6 border-l-4 border-[hsl(var(--accent))] pl-4 font-serif text-xl italic text-[hsl(var(--accent))]"
              data-testid="text-about-quote"
            >
              "Dinheiro não muda quem você é — ele amplifica. E quando há
              clareza, ele amplia liberdade."
            </div>
            <p data-testid="text-about-p10">
              Hoje, ajudo mulheres a transformarem sua relação com o dinheiro
              para viverem com consciência, tranquilidade e liberdade a vida que
              realmente merecem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
