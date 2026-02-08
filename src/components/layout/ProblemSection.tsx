import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Compass, HeartCrack, ArrowRight } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="problema">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80" data-testid="text-problem-badge">
          Reconhece essa sensação?
        </div>
        <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-problem-title">
          O problema não é quanto você ganha
        </h2>
        <p className="mt-3 text-foreground/70" data-testid="text-problem-subtitle">
          É como você se relaciona com o dinheiro que você tem
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[
          {
            icon: DollarSign,
            title: "Ganha bem, mas nunca sobra",
            desc: "Você já tentou planilhas, aplicativos e desafios financeiros. Funciona por um tempo, mas sem constância e sem estratégia real, você sempre volta ao ponto de partida.",
          },
          {
            icon: Compass,
            title: "Está perdida financeiramente",
            desc: "Consome conteúdos soltos na internet, segue dicas aleatórias, mas sem um plano claro e personalizado para sua realidade específica.",
          },
          {
            icon: HeartCrack,
            title: "Vive culpa e ansiedade financeira",
            desc: "Já tentou economizar sozinha. Começou e parou várias vezes. Sempre com aquela sensação persistente de fracasso que te acompanha.",
          },
        ].map((item, idx) => (
          <Card
            key={idx}
            className="group rounded-3xl border-[hsl(var(--accent))]/30 bg-background/70 p-7 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
            data-testid={`card-problem-${idx}`}
          >
            <div className="flex items-start gap-4">
              <div
                className="grid size-12 flex-shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-foreground to-[hsl(var(--accent))] text-background shadow-sm"
                data-testid={`icon-problem-${idx}`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold" data-testid={`text-problem-card-title-${idx}`}>
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65" data-testid={`text-problem-card-desc-${idx}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
