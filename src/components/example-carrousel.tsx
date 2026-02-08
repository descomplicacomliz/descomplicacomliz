"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MotionDiv } from "@/components/ui/motion-wrapper";

// Lista de feedbacks na pasta public/feedbacks
// Adicione novos arquivos aqui quando fizer upload
const feedbackImages = [
  {
    src: "/feedbacks/casamento-celi-e-adeir.jpeg",
    alt: "Feedback - Casamento Celi e Adeir",
    name: "Casamento Celi e Adeir",
  },
  {
    src: "/feedbacks/casamento-natalia-e-mateus.jpeg",
    alt: "Feedback - Casamento Natália e Mateus",
    name: "Casamento Natália e Mateus",
  },
  {
    src: "/feedbacks/formatura-nicolli.jpeg",
    alt: "Feedback - Formatura Nicolli",
    name: "Formatura Nicolli",
  },
  {
    src: "/feedbacks/formatura-rafaela-silva.jpeg",
    alt: "Feedback - Formatura Rafaela Silva",
    name: "Formatura Rafaela Silva",
  },
];

export function SocialProof() {
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
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 ">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181b]/10 border border-[#18181b]/20 text-[#18181b] text-sm font-medium mb-6">
            <Quote className="w-4 h-4 fill-current" />
            <span className="uppercase tracking-widest text-xs font-bold">
              Depoimentos Reais
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-zinc-600 text-base md:text-lg max-w-2xl mx-auto">
            Feedbacks autênticos de clientes que confiaram seus momentos
            especiais à nossa equipe.
          </p>
        </div>

        {/* Carousel Container */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Main Image */}
          <div className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-zinc-50">
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
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#18181b] backdrop-blur-sm shadow-lg flex items-center justify-center text-white hover:bg-[#262626] hover:scale-110 transition-all duration-300 z-10 group"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#18181b] backdrop-blur-sm shadow-lg flex items-center justify-center text-white hover:bg-[#262626] hover:scale-110 transition-all duration-300 z-10 group"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Counter Badge */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#18181b] backdrop-blur-sm text-white text-xs md:text-sm font-medium">
              {currentIndex + 1} / {feedbackImages.length}
            </div>
          </div>

          {/* Event Name */}
          <div className="text-center mt-6 mb-4">
            <h3 className="text-lg md:text-xl font-serif font-bold text-zinc-900">
              {feedbackImages[currentIndex].name}
            </h3>
          </div>

          {/* Dots Indicators */}
          <div className="flex items-center justify-center gap-3">
            {feedbackImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "w-12 h-3 bg-[#18181b] shadow-lg"
                    : "w-3 h-3 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </MotionDiv>

        {/* Credibility indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "13+", label: "Anos de Experiência" },
            { number: "200+", label: "Eventos Realizados" },
            { number: "98%", label: "Clientes Satisfeitos" },
            { number: "100%", label: "Dedicação" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
