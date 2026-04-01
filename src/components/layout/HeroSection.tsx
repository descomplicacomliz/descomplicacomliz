import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles, Stars } from "lucide-react";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/components/ui/motion-wrapper";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" id="topo">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-[hsl(var(--accent))]/15 blur-3xl" />
        <div className="absolute -right-28 -top-10 h-[520px] w-[520px] rounded-full bg-[hsl(var(--foreground))]/10 blur-3xl" />
        <div className="absolute inset-0 liz-noise opacity-[0.12]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80 shadow-sm"
            data-testid="text-hero-badge"
          >
            <Sparkles className="h-4 w-4 text-[hsl(var(--accent))]" />
            Mentoria Financeira Feminina
          </div>

          <h1
            className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl"
            data-testid="text-hero-title"
          >
            Organizar dinheiro{" "}
            <span className="italic text-[hsl(var(--accent))]">não começa</span>{" "}
            pelos números
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg"
            data-testid="text-hero-subtitle"
          >
            Mentoria individual que transforma sua relação emocional com o
            dinheiro antes de mexer em uma única planilha. Porque mudança real
            não é temporária — é comportamental.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="cta-glow cta-primary group h-14 px-14 rounded-full bg-linear-to-r from-[hsl(var(--accent))] to-[hsl(35,50%,45%)] text-base font-bold text-white shadow-[0_0_30px_-5px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_50px_-5px_hsl(var(--accent)/0.7)] hover:brightness-110"
              data-testid="button-hero-cta"
            >
              <a
                href="#form-captacao"
                className="inline-flex items-center gap-2"
              >
                <p className="md:hidden lg:inline">Comece sua transformação</p>
                <p className="hidden md:inline lg:hidden">Transformar agora</p>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div
              className="flex items-center gap-2 text-sm text-foreground/60"
              data-testid="text-hero-proof"
            >
              <span className="inline-flex items-center -space-x-2">
                <span className="h-7 w-7 rounded-full bg-[hsl(var(--secondary))] ring-2 ring-background" />
                <span className="h-7 w-7 rounded-full bg-[hsl(var(--accent))]/35 ring-2 ring-background" />
                <span className="h-7 w-7 rounded-full bg-foreground/15 ring-2 ring-background" />
              </span>
              <span className="inline-flex items-center gap-1">
                <Stars className="h-4 w-4 text-[hsl(var(--accent))]" />
                Prosperidade começa com uma decisão consciente
              </span>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative">
            <div
              className={cn(
                "relative aspect-square w-[320px] overflow-hidden rounded-[999px] shadow-2xl shadow-black/25 md:w-[440px]",
              )}
              data-testid="img-hero-orb"
            >
              {/* Photo of Liz */}
              <Image
                src="/foto-liz-hero.png"
                alt="Lizandra Bortoluzzi - Mentora Financeira"
                width={540}
                height={719}
                priority
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 rounded-[999px] bg-[radial-gradient(circle_at_30%_30%,rgba(254,250,240,0.15)_0%,rgba(254,250,240,0)_55%)]" />
            </div>

            {/* Ring effects maintained */}
            <div className="absolute inset-[-18px] rounded-[999px] border border-[hsl(var(--secondary))]/70" />
            <div className="absolute inset-[-42px] rounded-[999px] border border-foreground/10" />

            {/* PRÓSPERA Badge - bottom right */}
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 z-10 max-w-[240px] md:-bottom-2 md:-right-16 md:max-w-[280px]"
            >
              <div className="rounded-2xl bg-linear-to-br from-foreground via-[hsl(var(--accent))] to-foreground p-2 shadow-2xl shadow-black/30 backdrop-blur md:p-5">
                <div
                  className="text-center font-serif text-xl font-bold text-background drop-shadow md:text-2xl"
                  data-testid="text-hero-orb-text"
                >
                  PRÓSPERA!
                </div>
                <p className="mt-2 text-center text-[10px] leading-snug text-background/90 md:text-xs">
                  Uma mulher{" "}
                  <span className="font-bold text-background">PRÓSPERA</span> é
                  aquela que tem segurança para fazer escolhas, vive sem culpa e
                  usa o dinheiro como ferramenta de liberdade — não de
                  limitação.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-6 h-14 w-14 rounded-full bg-[hsl(var(--accent))]/35 blur-xl"
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <MotionDiv
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-4 h-20 w-20 rounded-full bg-foreground/15 blur-2xl"
              animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
              transition={{
                duration: 6.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
