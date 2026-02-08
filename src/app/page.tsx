import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/layout/HeroSection";
import { ProblemSection } from "@/components/layout/ProblemSection";
import { TruthSection } from "@/components/layout/TruthSection";
import { MentoriaSection } from "@/components/layout/MentoriaSection";
import { DifferentialSection } from "@/components/layout/DifferentialSection";
import { AboutSection } from "@/components/layout/AboutSection";
import { BookSection } from "@/components/layout/BookSection";
import { SpeakingEventsSection } from "@/components/layout/SpeakingEventsSection";
import { TransformationSection } from "@/components/layout/TransformationSection";
import { TestimonialsSection } from "@/components/layout/TestimonialsSection";
import { SabotagemMetodoSection } from "@/components/layout/SabotagemMetodoSection";
import { LeadFormSection } from "@/components/layout/LeadFormSection";
import { CtaFinalSection } from "@/components/layout/CtaFinalSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <TruthSection />
        <MentoriaSection />
        <AboutSection />
        <BookSection />
        <SpeakingEventsSection />
        <DifferentialSection />
        <TransformationSection />
        <TestimonialsSection />
        <SabotagemMetodoSection />
        <LeadFormSection />
        <CtaFinalSection />
      </main>

      <Footer />
    </div>
  );
}
