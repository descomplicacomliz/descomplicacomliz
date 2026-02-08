import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import {
  BookOpen,
  Brain,
  Target,
  Users,
  Truck,
  ArrowRight,
  Check,
} from "lucide-react";

export function BookSection() {
  return (
    <section className="relative overflow-hidden py-16" id="livro">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-32 top-20 h-125 w-125 rounded-full bg-[hsl(var(--accent))]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-100 w-100 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Side - Book Visual */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <Card className="group relative overflow-hidden rounded-3xl border-[hsl(var(--accent))]/30 bg-linear-to-br from-background via-[hsl(var(--secondary))]/20 to-background p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.4)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/25 blur-3xl" />
                  <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-foreground/15 blur-3xl" />
                </div>

                <div className="relative text-center">
                  <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[hsl(var(--accent))]/15 ring-4 ring-[hsl(var(--accent))]/20">
                    <BookOpen className="h-10 w-10 text-[hsl(var(--accent))]" />
                  </div>

                  <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                    Mentes de Sucesso
                  </h3>

                  <p className="mt-3 font-serif text-lg italic text-[hsl(var(--accent))]">
                    O poder da PNL na construção de uma mentalidade vencedora
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))]/10 px-4 py-2 text-sm font-semibold text-foreground/80">
                    <Truck className="h-4 w-4 text-[hsl(var(--accent))]" />
                    Livro Físico • Capa Brochura
                  </div>
                </div>
              </Card>

              {/* Decorative Elements */}
              <MotionDiv
                className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[hsl(var(--accent))]/20 blur-2xl"
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <MotionDiv
                className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-foreground/10 blur-2xl"
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </MotionDiv>

          {/* Right Side - Content */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80">
              Livro
            </div>

            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Transforme sua mentalidade e conquiste resultados reais
            </h2>

            <p className="mt-4 text-base leading-relaxed text-foreground/70">
              <strong className="text-foreground">Mentes de Sucesso</strong> é
              um livro para quem entende que resultados consistentes começam na
              mente e se refletem nas decisões.
            </p>

            <p className="mt-3 text-base leading-relaxed text-foreground/70">
              Ao longo da leitura, você será conduzido a refletir sobre como
              crenças, comportamentos e padrões mentais impactam diretamente sua
              vida profissional, financeira e emocional.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  icon: Brain,
                  text: "Como a mentalidade influencia decisões e resultados",
                },
                {
                  icon: Target,
                  text: "A relação entre comportamento, escolhas e prosperidade",
                },
                {
                  icon: BookOpen,
                  text: "Reflexões práticas para desenvolver clareza e foco",
                },
                {
                  icon: Users,
                  text: "Conteúdo acessível, direto e transformador",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[hsl(var(--accent))]/15">
                    <item.icon className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-l-4 border-[hsl(var(--accent))] pl-4 font-serif text-lg italic text-[hsl(var(--accent))]">
              "Este não é apenas um livro para ler, é um livro para aplicar."
            </div>

            {/* Pricing Section */}
            <div className="mt-8 rounded-2xl border border-[hsl(var(--accent))]/20 bg-[hsl(var(--secondary))]/30 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-foreground/60">
                    Investimento
                  </div>
                  <div className="mt-1 font-serif text-3xl font-bold text-[hsl(var(--accent))]">
                    R$ 100,00
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-foreground/70">
                    <Check className="h-4 w-4 text-green-600" />
                    Frete grátis
                  </div>
                </div>

                <Button
                  asChild
                  className="cta-glow group h-12 rounded-full bg-foreground px-6 text-background shadow-lg hover:bg-[hsl(var(--accent))]"
                >
                  <a
                    href="https://pay.kiwify.com.br/pvxBUI7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Comprar o Livro
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </div>

            <p className="mt-4 text-xs text-foreground/60">
              📘 Formato físico • Entrega para todo o Brasil após confirmação do
              pagamento
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
