import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TransformationSection() {
  return (
    <section className="bg-foreground text-background" id="transformacao" data-testid="section-transformacao">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-transformacao-title">
            A transformação que acontece
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/85" data-testid="text-transformacao-subtitle">
            O custo de adiar é silencioso — e alto. Em poucas semanas, você sai do improviso para uma rotina financeira que te dá clareza, leveza e decisão.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Antes da Mentoria",
              icon: X,
              items: [
                "O mês começa sem plano e termina no aperto",
                "Decisões no impulso (culpa depois)",
                "Imprevistos viram caos e atrasos",
                "Ansiedade ao olhar para a conta",
              ],
            },
            {
              title: "Depois da Mentoria",
              icon: Check,
              items: [
                "Clareza total: você sabe exatamente o que entra e o que sai",
                "Decisões conscientes (sem autoengano e sem culpa)",
                "Estrutura para imprevistos — sem desmoronar",
                "Rotina simples e sustentável que cabe na sua vida real",
              ],
            },
          ].map((col, idx) => (
            <Card
              key={idx}
              className="group rounded-3xl border-border/60 bg-white/10 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-white/40 hover:bg-white/15 hover:shadow-[0_26px_70px_-44px_rgba(0,0,0,0.70)]"
              data-testid={`card-transformacao-${idx}`}
            >
              <div className="font-serif text-2xl font-semibold text-background" data-testid={`text-transformacao-col-title-${idx}`}>
                {col.title}
              </div>
              <ul className="mt-5 space-y-3 text-sm text-background/85" data-testid={`list-transformacao-${idx}`}>
                {col.items.map((t, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`row-transformacao-${idx}-${i}`}>
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-[1.06]",
                        col.icon === X
                          ? "bg-red-500 text-black"
                          : "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                      )}
                      aria-hidden
                    >
                      <col.icon className="h-4 w-4" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="cta-glow group h-12 rounded-full bg-[hsl(var(--accent))] px-8 text-[hsl(var(--accent-foreground))] shadow-lg hover:bg-[hsl(var(--accent))]/90 transition-all"
            data-testid="button-transformation-cta"
          >
            <a href="#form-captacao" className="inline-flex items-center gap-2">
              Sim, quero essa transformação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
