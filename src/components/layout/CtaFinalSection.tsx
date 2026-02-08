import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion-wrapper";

export function CtaFinalSection() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background" id="contato" data-testid="section-cta-final">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(187,151,79,0.35)_0%,rgba(55,52,53,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(193,164,142,0.35)_0%,rgba(55,52,53,0)_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-cta-final-title">
            Retome o controle da sua vida financeira
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/85" data-testid="text-cta-final-subtitle">
            Quando você decide se levar a sério financeiramente, não compra garantia. Você constrói estrutura e consciência que devolvem leveza, clareza e segurança emocional.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2" data-testid="grid-cta-final-benefits">
            {[
              "Mentoria individual e personalizada",
              "4 encontros semanais estruturados",
              "Suporte contínuo via WhatsApp",
              "Método autoral com 24 anos de experiência",
              "Transformação comportamental sustentável",
            ].map((t, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm text-background/90"
                data-testid={`row-cta-benefit-${idx}`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">
                  <Check className="h-4 w-4" />
                </span>
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-6">
            {/* Pricing Section */}
            <div className="rounded-2xl bg-black/30 px-8 py-6 backdrop-blur-sm" data-testid="box-pricing">
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-[hsl(var(--accent))] md:text-4xl" data-testid="text-price-installments">
                  12x de R$309,96
                </div>
                <div className="mt-3 text-base text-background/90 md:text-lg" data-testid="text-price-cash">
                  À vista R$2.997,00
                </div>
              </div>
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="cta-glow group h-14 rounded-full bg-[hsl(var(--accent))] px-8 text-lg text-[hsl(var(--accent-foreground))] shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.6)] hover:bg-[hsl(var(--accent))]/90 md:h-16 md:px-10 md:text-xl"
                data-testid="button-cta-final"
              >
                <a 
                  href="https://pay.kiwify.com.br/NkGR0mp" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Adquirir agora a mentoria financeira
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </MotionDiv>

            <div className="text-sm text-background/75" data-testid="text-cta-final-urgency">
              Prosperidade começa com uma decisão consciente
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
