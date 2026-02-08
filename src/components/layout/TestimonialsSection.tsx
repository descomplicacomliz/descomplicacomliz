"use client";

import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MotionDiv } from "@/components/ui/motion-wrapper";

// Lista de feedbacks de clientes da Liz
const feedbackImages = [
  {
    src: "/feedbacks/depoimento-01.jpeg",
    alt: "Depoimento de cliente - Transformação financeira",
  },
  {
    src: "/feedbacks/depoimento-02.jpeg",
    alt: "Depoimento de cliente - Organização financeira",
  },
  {
    src: "/feedbacks/depoimento-03.jpeg",
    alt: "Depoimento de cliente - Mentoria financeira",
  },
  {
    src: "/feedbacks/depoimento-04.jpeg",
    alt: "Depoimento de cliente - Mudança de vida",
  },
  {
    src: "/feedbacks/depoimento-05.jpeg",
    alt: "Depoimento de cliente - Consciência financeira",
  },
  {
    src: "/feedbacks/depoimento-06.jpeg",
    alt: "Depoimento de cliente - Libertação financeira",
  },
  {
    src: "/feedbacks/depoimento-07.jpeg",
    alt: "Depoimento de cliente - Prosperidade",
  },
  {
    src: "/feedbacks/depoimento-08.jpeg",
    alt: "Depoimento de cliente - Transformação comportamental",
  },
  {
    src: "/feedbacks/depoimento-09.jpeg",
    alt: "Depoimento de cliente - Evolução financeira",
  },
  {
    src: "/feedbacks/depoimento-10.jpeg",
    alt: "Depoimento de cliente - Clareza financeira",
  },
  {
    src: "/feedbacks/depoimento-11.jpeg",
    alt: "Depoimento de cliente - Mudança de mentalidade",
  },
  {
    src: "/feedbacks/depoimento-12.jpeg",
    alt: "Depoimento de cliente - Resultados reais",
  },
  {
    src: "/feedbacks/depoimento-13.jpeg",
    alt: "Depoimento de cliente - Independência financeira",
  },
  {
    src: "/feedbacks/depoimento-14.jpeg",
    alt: "Depoimento de cliente - Controle financeiro",
  },
  {
    src: "/feedbacks/depoimento-15.jpeg",
    alt: "Depoimento de cliente - Paz financeira",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbackImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + feedbackImages.length) % feedbackImages.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[hsl(var(--accent))]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-foreground/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-foreground/80"
            data-testid="text-testimonials-badge"
          >
            <Heart className="h-4 w-4 text-[hsl(var(--accent))]" />
            Depoimentos
          </div>
          <h2
            className="mt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl"
            data-testid="text-testimonials-title"
          >
            Transformações reais de quem decidiu mudar
          </h2>
          <p
            className="mt-3 text-base leading-relaxed text-foreground/70 md:text-lg"
            data-testid="text-testimonials-subtitle"
          >
            Veja o que mulheres que passaram pela mentoria têm a dizer sobre
            suas jornadas de transformação financeira e emocional.
          </p>
        </div>

        {/* Carousel Container */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-12 max-w-3xl"
        >
          {/* Main Image Container */}
          <div className="relative h-125 overflow-hidden rounded-3xl bg-[hsl(var(--secondary))]/20 shadow-2xl backdrop-blur md:h-150">
            {feedbackImages.map((feedback, index) => (
              <div
                key={feedback.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={feedback.src}
                  alt={feedback.alt}
                  fill
                  className="object-contain p-4"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[hsl(var(--accent))] md:left-4 md:h-12 md:w-12"
              aria-label="Depoimento anterior"
              data-testid="button-prev"
            >
              <ChevronLeft className="h-5 w-5 text-background transition-transform group-hover:-translate-x-1 md:h-6 md:w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[hsl(var(--accent))] md:right-4 md:h-12 md:w-12"
              aria-label="Próximo depoimento"
              data-testid="button-next"
            >
              <ChevronRight className="h-5 w-5 text-background transition-transform group-hover:translate-x-1 md:h-6 md:w-6" />
            </button>

            {/* Counter Badge */}
            <div
              className="absolute right-2 top-2 rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm md:right-4 md:top-4 md:px-4 md:py-2 md:text-sm"
              data-testid="text-counter"
            >
              {currentIndex + 1} / {feedbackImages.length}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {feedbackImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "h-3 w-12 bg-[hsl(var(--accent))] shadow-md"
                    : "h-3 w-3 bg-border hover:bg-[hsl(var(--accent))]/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
                data-testid={`dot-${index}`}
              />
            ))}
          </div>

          {/* Navigation hint */}
          <p className="mt-4 text-center text-xs text-foreground/50">
            Use as setas ou clique nos pontos para navegar entre os depoimentos
          </p>
        </MotionDiv>

        {/* Optional: Brief text about authenticity */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-[hsl(var(--accent))]/20 bg-[hsl(var(--secondary))]/30 p-6 backdrop-blur">
            <p className="font-serif text-lg italic leading-relaxed text-foreground/80">
              "Cada depoimento aqui representa uma história de coragem: a
              coragem de olhar para dentro, encarar padrões e escolher
              transformação."
            </p>
            <p className="mt-2 text-sm font-semibold text-[hsl(var(--accent))]">
              — Lizandra Bortoluzzi
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
