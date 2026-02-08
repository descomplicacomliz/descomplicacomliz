"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image src="/logo-v2.png" alt="logo" width={40} height={40} />
          <div
            className="font-serif text-xl font-semibold tracking-[0.02em]"
            data-testid="text-logo"
          >
            Lizandra Bortoluzzi
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 text-sm lg:flex"
          data-testid="nav-primary"
        >
          <a
            href="#sobre"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-sobre"
          >
            Sobre
          </a>
          <a
            href="#mentoria"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-mentoria"
          >
            Mentoria
          </a>
          <a
            href="#livro"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-livro"
          >
            Livro
          </a>
          <a
            href="#palestras"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-palestras"
          >
            Palestras
          </a>
          <a
            href="#transformacao"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-transformacao"
          >
            Transformação
          </a>
          <a
            href="#depoimentos"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-depoimentos"
          >
            Depoimentos
          </a>
          <a
            href="#contato"
            className="text-foreground/70 transition-colors hover:text-foreground"
            data-testid="link-contato"
          >
            Contato
          </a>
          <Button
            asChild
            className="cta-glow rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-lg shadow-black/10 hover:bg-[hsl(var(--accent))]/90"
            data-testid="button-cta-top"
          >
            <a href="#form-captacao">Quero mudar agora</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground/80 hover:text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-16 border-b border-border/60 bg-background/95 backdrop-blur-xl p-6 shadow-lg lg:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-center">
            <a
              href="#sobre"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#mentoria"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentoria
            </a>
            <a
              href="#livro"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Livro
            </a>
            <a
              href="#palestras"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Palestras
            </a>
            <a
              href="#transformacao"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Transformação
            </a>
            <a
              href="#depoimentos"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button
              asChild
              className="mt-2 w-full cta-glow rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#form-captacao">Quero mudar agora</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
