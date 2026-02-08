"use client";

import { ChevronLeft, ChevronRight, Mic2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MotionDiv } from "@/components/ui/motion-wrapper";

// Dados das palestras (3 palestras, 3 imagens cada)
const talks = [
  {
    id: 1,
    title: "Separação de Finanças Pessoais e Empresariais",
    audience: "Mulheres Empreendedoras",
    description:
      "O foco foi um dos maiores erros que travam o crescimento de qualquer negócio: misturar finanças pessoais com as da empresa. Mostrei, de forma simples e aplicável, por que a separação entre conta pessoa física e conta jurídica é um divisor de águas para organização, clareza e tomada de decisão.",
    images: [
      {
        src: "/palestras/palestra-01-imagem-01.jpeg",
        alt: "Palestra sobre separação financeira - Momento 1",
      },
      {
        src: "/palestras/palestra-01-imagem-02.jpeg",
        alt: "Palestra sobre separação financeira - Momento 2",
      },
      {
        src: "/palestras/palestra-01-imagem-03.jpeg",
        alt: "Palestra sobre separação financeira - Momento 3",
      },
    ],
  },
  {
    id: 2,
    title: "Faturamento vs. Lucro: Entendendo os Números",
    audience: "Mulheres Empresárias",
    description:
      "Aprofundei um tema essencial para a sustentabilidade e solidez financeira: a diferença entre faturamento e lucro. Trabalhamos o entendimento real dos números, saindo da ilusão do 'vende muito' para a consciência do quanto de fato sobra, base indispensável para crescer com segurança.",
    images: [
      {
        src: "/palestras/palestra-02-imagem-01.jpeg",
        alt: "Palestra sobre faturamento e lucro - Momento 1",
      },
      {
        src: "/palestras/palestra-02-imagem-02.jpeg",
        alt: "Palestra sobre faturamento e lucro - Momento 2",
      },
      {
        src: "/palestras/palestra-02-imagem-03.jpeg",
        alt: "Palestra sobre faturamento e lucro - Momento 3",
      },
    ],
  },
  {
    id: 3,
    title: "Pró-labore e Retirada Consciente",
    audience: "Congresso da Área da Beleza",
    description:
      "Levei uma abordagem totalmente conectada à realidade do setor: a importância do pró-labore, da retirada consciente e, novamente, da separação entre finanças pessoais e empresariais. O foco foi transformar negócios lucrativos no papel em empresas financeiramente saudáveis na prática.",
    images: [
      {
        src: "/palestras/palestra-03-imagem-01.jpeg",
        alt: "Palestra sobre pró-labore - Momento 1",
      },
      {
        src: "/palestras/palestra-03-imagem-02.jpeg",
        alt: "Palestra sobre pró-labore - Momento 2",
      },
      {
        src: "/palestras/palestra-03-imagem-03.jpeg",
        alt: "Palestra sobre pró-labore - Momento 3",
      },
    ],
  },
];

// Total de imagens: 9 (3 palestras x 3 imagens)
const allImages = talks.flatMap((talk) => talk.images);

export function SpeakingEventsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Calcular qual palestra está ativa baseado na imagem atual
  // Imagens 0,1,2 → Palestra 0 | Imagens 3,4,5 → Palestra 1 | Imagens 6,7,8 → Palestra 2
  const currentTalkIndex = Math.floor(currentImageIndex / 3);
  const currentTalk = talks[currentTalkIndex];

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="palestras" className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[hsl(var(--accent))]/20 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80"
            data-testid="text-speaking-badge"
          >
            <Mic2 className="h-4 w-4 text-[hsl(var(--accent))]" />
            Palestras
          </div>
          <h2
            className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl"
            data-testid="text-speaking-title"
          >
            Levando conhecimento a mulheres que empreendem
          </h2>
          <p
            className="mt-3 text-base leading-relaxed text-foreground/70"
            data-testid="text-speaking-subtitle"
          >
            Palestras estratégicas voltadas para mulheres empreendedoras, com um
            objetivo claro: fortalecer negócios por meio da inteligência
            financeira prática.
          </p>
        </div>

        {/* Main Content: Carousel + Text */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Carousel */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden rounded-3xl bg-[hsl(var(--secondary))]/20 shadow-2xl backdrop-blur md:h-125">
                {allImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[hsl(var(--accent))] md:h-12 md:w-12"
                  aria-label="Imagem anterior"
                  data-testid="button-prev"
                >
                  <ChevronLeft className="h-5 w-5 text-background md:h-6 md:w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[hsl(var(--accent))] md:h-12 md:w-12"
                  aria-label="Próxima imagem"
                  data-testid="button-next"
                >
                  <ChevronRight className="h-5 w-5 text-background md:h-6 md:w-6" />
                </button>

                {/* Counter Badge */}
                <div
                  className="absolute right-3 top-3 rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm md:px-4 md:py-2 md:text-sm"
                  data-testid="text-counter"
                >
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </div>

              {/* Dots Indicators - Agrupados por palestra */}
              <div className="mt-6 flex items-center justify-center gap-1">
                {allImages.map((_, index) => {
                  const talkIndex = Math.floor(index / 3);
                  const isActive = index === currentImageIndex;
                  const isInActiveTalk = talkIndex === currentTalkIndex;

                  return (
                    <div key={index} className="flex items-center gap-1">
                      <button
                        onClick={() => goToImage(index)}
                        className={`cursor-pointer rounded-full transition-all duration-300 ${
                          isActive
                            ? "h-3 w-10 bg-[hsl(var(--accent))] shadow-md"
                            : isInActiveTalk
                              ? "h-3 w-3 bg-[hsl(var(--accent))]/40 hover:bg-[hsl(var(--accent))]/60"
                              : "h-3 w-3 bg-border hover:bg-border/60"
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                        data-testid={`dot-${index}`}
                      />
                      {/* Separador visual entre palestras (após cada 3º dot, exceto no último) */}
                      {(index + 1) % 3 === 0 &&
                        index !== allImages.length - 1 && (
                          <div
                            className="mx-2 h-3 w-px bg-border"
                            aria-hidden
                          />
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionDiv>

          {/* Right Column: Text Content (Sincronizado com a palestra atual) */}
          <MotionDiv
            key={currentTalkIndex} // Re-anima quando muda de palestra
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl border border-[hsl(var(--accent))]/20 bg-[hsl(var(--secondary))]/30 p-6 backdrop-blur md:p-8">
              {/* Badge do público-alvo */}
              <div className="inline-flex rounded-full bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-semibold text-[hsl(var(--accent))]">
                {currentTalk.audience}
              </div>

              {/* Título da palestra */}
              <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
                {currentTalk.title}
              </h3>

              {/* Descrição */}
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                {currentTalk.description}
              </p>

              {/* Indicador visual de qual palestra está ativa */}
              <div className="mt-6 flex items-center gap-2">
                {talks.map((talk, index) => (
                  <div
                    key={talk.id}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      index === currentTalkIndex
                        ? "bg-[hsl(var(--accent))]"
                        : "bg-border"
                    }`}
                    aria-label={`Palestra ${index + 1}${index === currentTalkIndex ? " (ativa)" : ""}`}
                  />
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
