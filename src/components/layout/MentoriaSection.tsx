import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, MessageCircle, Target, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function MentoriaSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      id="mentoria"
      data-testid="section-mentoria"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="section-badge inline-flex rounded-full bg-[hsl(var(--secondary))] px-5 py-2.5 text-sm font-semibold tracking-[0.14em] text-foreground/80"
          data-testid="text-mentoria-badge"
        >
          Como funciona
        </div>
        <h2
          className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl"
          data-testid="text-mentoria-title"
        >
          Você <span className="text-[hsl(var(--accent))]">PRÓSPERA</span> em 4
          PASSOS.
        </h2>
        <p
          className="mt-3 text-foreground/70"
          data-testid="text-mentoria-subtitle"
        >
          Na mentoria você terá o meu acompanhamento individual contínuo durante
          todo o processo.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          {
            step: "1",
            title: "Diagnóstico da realidade emocional",
            desc: "Identificamos sua relação emocional com o dinheiro: padrões, crenças e comportamentos. Análise prática da realidade financeira sem julgamento.",
          },
          {
            step: "2",
            title: "Ajustes de hábitos e tomada de decisão consciente",
            desc: "Trabalhamos exercícios comportamentais para você tomar decisões com consciência, não no impulso. Transformamos padrões de sabotagem.",
          },
          {
            step: "3",
            title:
              "Diagnóstico da realidade financeira e estruturação dos números",
            desc: "Com sua consciência emocional trabalhada, você estrutura suas finanças de forma sustentável. Cada número ganha significado e propósito.",
          },
          {
            step: "4",
            title: "Consolidação de uma rotina financeira sustentável",
            desc: "Consolidamos uma rotina financeira que se encaixa na sua vida real. Você desenvolve autonomia para sustentar decisões no longo prazo.",
          },
        ].map((item) => (
          <Card
            key={item.step}
            className="group relative rounded-3xl border-border/60 bg-background/70 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[hsl(var(--accent))]/50 hover:shadow-xl"
            data-testid={`card-process-step-${item.step}`}
          >
            <div className="flex items-start gap-4">
              <div
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-linear-to-br from-foreground to-[hsl(var(--accent))] font-serif text-2xl font-semibold text-background shadow-sm"
                data-testid={`badge-process-step-${item.step}`}
              >
                {item.step}
              </div>
              <div>
                <div
                  className="font-serif text-xl font-semibold"
                  data-testid={`text-process-title-${item.step}`}
                >
                  {item.title}
                </div>
                <p
                  className="mt-2 text-sm leading-relaxed text-foreground/65"
                  data-testid={`text-process-desc-${item.step}`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            icon: ClipboardList,
            title: "Tarefas Práticas",
            desc: "Ao final de cada encontro, você sai com ações claras para aplicar imediatamente.",
          },
          {
            icon: FaWhatsapp,
            title: "Suporte via WhatsApp",
            desc: "Acompanhamento contínuo para tirar dúvidas, ajustar decisões e evitar recaídas.",
          },
          {
            icon: Target,
            title: "Estratégia Personalizada",
            desc: "Cada sessão une análise prática, exercícios estratégicos e próximos passos específicos.",
          },
        ].map((f, idx) => (
          <Card
            key={idx}
            className="rounded-3xl border-[hsl(var(--accent))]/25 bg-white/45 p-7 shadow-sm backdrop-blur"
            data-testid={`card-mentoria-feature-${idx}`}
          >
            <div
              className="grid h-14 w-14 place-items-center rounded-full bg-[hsl(var(--accent))]/15"
              data-testid={`icon-mentoria-feature-${idx}`}
            >
              <f.icon className="h-7 w-7 text-[hsl(var(--accent))]" />
            </div>
            <div
              className="mt-4 font-serif text-xl font-semibold"
              data-testid={`text-mentoria-feature-title-${idx}`}
            >
              {f.title}
            </div>
            <p
              className="mt-2 text-sm leading-relaxed text-foreground/65"
              data-testid={`text-mentoria-feature-desc-${idx}`}
            >
              {f.desc}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          asChild
          className="cta-glow cta-primary group h-14 rounded-full bg-linear-to-r from-[hsl(var(--accent))] to-[hsl(35,50%,45%)] px-10 text-base font-bold text-white shadow-[0_0_30px_-5px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_50px_-5px_hsl(var(--accent)/0.7)] hover:brightness-110 transition-all"
          data-testid="button-mentoria-cta"
        >
          <a href="#form-captacao" className="inline-flex items-center gap-2">
            Quero começar minha jornada
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
}
