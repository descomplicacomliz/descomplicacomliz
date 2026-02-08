import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function TruthSection() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background" id="verdade">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(187,151,79,0.35)_0%,rgba(55,52,53,0)_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(193,164,142,0.35)_0%,rgba(55,52,53,0)_55%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[hsl(var(--accent))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-background" data-testid="text-truth-badge">
            A Verdade
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-truth-title">
            O medo não é perder o controle do dinheiro
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/85 md:text-lg" data-testid="text-truth-text">
            O medo real é <span className="font-semibold text-[hsl(var(--accent))]">confirmar, em números, que as escolhas feitas até aqui não estão sustentando a vida que você quer viver</span>. Por isso olhar para os números vira confronto, não cálculo. E você evita, não por falta de capacidade, mas porque os números ativam culpa, frustração e a sensação de estar sempre devendo algo a si mesma.
          </p>
        </div>
      </div>
    </section>
  );
}
