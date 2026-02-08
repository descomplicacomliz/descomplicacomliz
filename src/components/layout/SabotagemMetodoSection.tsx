import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SabotagemMetodoSection() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--secondary))]" data-testid="section-sabotagem-metodo">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(254,250,240,0.65)_0%,rgba(254,250,240,0)_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(187,151,79,0.18)_0%,rgba(254,250,240,0)_60%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex rounded-full bg-background px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground"
            data-testid="text-sabotagem-metodo-badge"
          >
            Sabotagem + Abordagem
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-sabotagem-metodo-title">
            O que te trava — e o que te destrava
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75" data-testid="text-sabotagem-metodo-subtitle">
            O problema não é falta de disciplina. É um padrão emocional somado à ausência de estrutura para decidir. É aqui que a mentoria muda o jogo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="rounded-3xl border-border/60 bg-background/75 p-7 shadow-sm backdrop-blur md:col-span-1" data-testid="card-sabotagem-metodo-problema">
            <div className="font-serif text-2xl font-semibold" data-testid="text-sabotagem-metodo-problema-title">
              O que parece ser o problema
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70" data-testid="text-sabotagem-metodo-problema-text">
              "Eu ganho pouco", "não tenho disciplina", "não nasci boa com dinheiro".
            </p>
            <div className="mt-5 rounded-2xl bg-white/50 p-4" data-testid="box-sabotagem-metodo-revelacao">
              <div className="text-sm font-semibold text-foreground" data-testid="text-sabotagem-metodo-revelacao-title">
                O que está por trás
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70" data-testid="text-sabotagem-metodo-revelacao-text">
                Falta de leitura clara da própria realidade, ausência de estrutura para decidir e um padrão emocional que empurra o dinheiro para o improviso — não para a consciência.
              </p>
            </div>
          </Card>

          <Card
            className="group rounded-3xl border-border/60 bg-background/75 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[hsl(var(--accent))]/45 hover:shadow-xl md:col-span-2"
            data-testid="card-sabotagem-metodo-padroes"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-serif text-2xl font-semibold" data-testid="text-sabotagem-metodo-padroes-title">
                  Os padrões que mais aparecem
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70" data-testid="text-sabotagem-metodo-padroes-sub">
                  Pequenos hábitos que, somados, drenam sua clareza e seu dinheiro.
                </p>
              </div>
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[hsl(var(--accent))]/12 text-2xl ring-1 ring-[hsl(var(--accent))]/15"
                aria-hidden
                data-testid="icon-sabotagem-metodo"
              >
                🧩
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" data-testid="grid-sabotagem-metodo">
              {[
                { bold: "Adiamento crônico:", rest: "\"Vou começar a me organizar mês que vem\" — e o mês que vem nunca chega" },
                { bold: "Normalização do caos:", rest: "Mantêm a desorganização como parte natural da vida" },
                { bold: "Esperança no lugar de estratégia:", rest: "\"Quando eu ganhar mais, aí vou me organizar\"" },
                { bold: "Fuga dos números:", rest: "Evitam olhar para a realidade financeira porque ativa culpa e frustração" },
              ].map((it, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/45 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/55"
                  data-testid={`row-sabotagem-metodo-${idx}`}
                >
                  <span className="font-semibold text-foreground" data-testid={`text-sabotagem-metodo-bold-${idx}`}>
                    {it.bold}
                  </span>{" "}
                  <span className="text-foreground/70" data-testid={`text-sabotagem-metodo-rest-${idx}`}>
                    {it.rest}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-3xl border-[hsl(var(--accent))]/25 bg-white/55 p-7 shadow-sm backdrop-blur md:col-span-3" data-testid="card-sabotagem-metodo-metodo">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <div className="font-serif text-2xl font-semibold" data-testid="text-sabotagem-metodo-metodo-title">
                  O que só essa abordagem te entrega
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70" data-testid="text-sabotagem-metodo-metodo-text">
                  Eu observo padrões, comportamentos, história e decisões recorrentes. Traduzo números em escolhas práticas, e escolhas em comportamentos sustentáveis. Não é método engessado — é leitura estratégica de contexto com 24 anos de experiência.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2" data-testid="grid-sabotagem-metodo-pillars">
                {[
                  { title: "Análise Contextual", desc: "Decisão analisada no contexto completo: vida, rotina, renda e emoções." },
                  { title: "Sem Julgamento", desc: "Verdade sem culpa: enxergar a realidade sem autoengano." },
                  { title: "Comportamento Primeiro", desc: "Primeiro quem você é com o dinheiro, depois o que você faz." },
                  { title: "Sustentabilidade Real", desc: "Autonomia e critérios para decidir com consciência no longo prazo." },
                ].map((p, idx) => (
                  <div key={idx} className="rounded-2xl bg-background/70 p-4" data-testid={`card-sabotagem-metodo-pilar-${idx}`}>
                    <div className="text-sm font-semibold text-foreground" data-testid={`text-sabotagem-metodo-pilar-title-${idx}`}>
                      {p.title}
                    </div>
                    <div className="mt-1 text-sm text-foreground/70" data-testid={`text-sabotagem-metodo-pilar-desc-${idx}`}>
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="group h-12 rounded-full bg-foreground px-8 text-background shadow-lg shadow-black/10 hover:bg-[hsl(var(--accent))] transition-all"
            data-testid="button-sabotagem-cta"
          >
            <a href="#form-captacao" className="inline-flex items-center gap-2">
              Quero superar esses padrões
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
