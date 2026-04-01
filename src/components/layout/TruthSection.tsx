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
          <div className="section-badge inline-flex rounded-full bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold tracking-[0.14em] text-background" data-testid="text-truth-badge">
            A Verdade
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl" data-testid="text-truth-title">
            Eu sei que você tem medo de não conseguir viver a vida que realmente deseja.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-background/85 md:text-lg" data-testid="text-truth-text">
            <p>
              O medo real é...
            </p>
            <ul className="space-y-3 text-left md:text-center">
              <li>
                <span className="font-bold text-[hsl(var(--accent))]">NÃO PODER</span>{" "}
                viajar com tranquilidade.
              </li>
              <li>
                <span className="font-bold text-[hsl(var(--accent))]">DEIXAR DE</span>{" "}
                aproveitar experiências incríveis por conta de escolhas mal feitas até aqui, que geram sentimento de{" "}
                <span className="font-bold text-[hsl(var(--accent))]">culpa</span>.
              </li>
              <li>
                Sentir-se <span className="font-bold text-[hsl(var(--accent))]">insegura</span>{" "}
                nas escolhas que faz.
              </li>
              <li>
                E perceber que a vida que você sonha{" "}
                <span className="italic">sempre fica para depois</span>...{" "}
                <span className="text-background/60">(e esse depois não acontece)</span>
              </li>
            </ul>
            <p className="mt-6 border-t border-background/15 pt-6 font-serif text-xl italic text-[hsl(var(--accent))] md:text-2xl">
              E foi por isso que eu criei essa mentoria: para te ajudar a construir uma vida que faça sentido agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
