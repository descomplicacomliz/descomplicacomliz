import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Brain, Navigation, Wrench, HandHeart, ArrowRight } from "lucide-react";

export function DifferentialSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="sobre">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80" data-testid="text-diff-badge">
          Meu Diferencial
        </div>
        <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-diff-title">
          Por que essa mentoria funciona onde outras não funcionam?
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          {
            icon: Brain,
            title: "Começo pela consciência, não pelo dinheiro",
            paragraphs: [
              "A maioria entrega planilhas e fórmulas prontas. Eu trabalho primeiro a consciência, depois a estratégia.",
              "Quando você entende por que age como age financeiramente, para de se sabotar.",
              "O resultado não é organização temporária — é mudança real de comportamento.",
            ],
          },
          {
            icon: Navigation,
            title: "Leitura estratégica sem julgamento",
            paragraphs: [
              "Eu conduzo você a enxergar a própria realidade sem julgamento e sem autoengano.",
              "Cada decisão financeira é analisada dentro do seu contexto: vida, rotina, renda, emoções e padrões repetidos.",
              "O foco não está apenas no número, mas no comportamento que sustenta aquele número.",
            ],
          },
          {
            icon: Wrench,
            title: "Método autoral desenvolvido na prática",
            paragraphs: [
              "Leitura estratégica de contexto desenvolvida com minha experiência de mais de 24 anos atendendo pessoas em instituições financeiras.",
              "Observo padrões, comportamentos e decisões recorrentes.",
              "Traduzo números em escolhas práticas, e escolhas em comportamentos sustentáveis.",
            ],
          },
          {
            icon: HandHeart,
            title: "Acompanhamento individual e humanizado",
            paragraphs: [
              "A mentoria é individual porque cada mulher tem dores diferentes.",
              "Eu atuo no que você precisa resolver de mais importante agora.",
              "Pego pela sua mão e conduzo você de forma leve e estruturada.",
              "Não ensino finanças por alguns encontros — conduzo você a um novo nível de consciência e responsabilidade financeira.",
            ],
          },
        ].map((card, idx) => (
          <Card
            key={idx}
            className="group relative overflow-hidden rounded-3xl border-border/60 bg-background/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[hsl(var(--accent))]/50 hover:shadow-xl"
            data-testid={`card-diff-${idx}`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[hsl(var(--accent))]/18 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-foreground/10 blur-3xl" />
            </div>

            <div className="flex items-start gap-4">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[hsl(var(--accent))]/12 ring-1 ring-[hsl(var(--accent))]/15 transition-all duration-300 group-hover:bg-[hsl(var(--accent))]/18"
                data-testid={`icon-diff-${idx}`}
                aria-hidden
              >
                <card.icon className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>

              <div className="min-w-0">
                <div className="font-serif text-xl font-semibold" data-testid={`text-diff-card-title-${idx}`}>
                  {card.title}
                </div>
                <div className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/70" data-testid={`text-diff-card-body-${idx}`}>
                  {card.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={cn(
                        p.includes("—") ? "font-semibold text-foreground" : "",
                      )}
                      data-testid={`text-diff-card-paragraph-${idx}-${pIdx}`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          asChild
          className="group h-12 rounded-full bg-foreground px-8 text-background shadow-lg shadow-black/10 hover:bg-[hsl(var(--accent))] transition-all"
          data-testid="button-differential-cta"
        >
          <a href="#form-captacao" className="inline-flex items-center gap-2">
            Quero essa transformação
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
