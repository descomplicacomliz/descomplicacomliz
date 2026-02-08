import { useMemo } from "react";
import Image from "next/image";
import { Mail, Instagram, MessageCircle } from "lucide-react";

function buildWhatsAppLink(params: { phoneE164: string; message: string }) {
  const base = `https://wa.me/${params.phoneE164}`;
  const text = encodeURIComponent(params.message);
  return `${base}?text=${text}`;
}

export function Footer() {
  const waLink = buildWhatsAppLink({
    phoneE164: "5547997059338",
    message:
      'Olá, vim pelo seu website. Gostaria de agendar uma sessão de diagnóstico.',
  });

  return (
    <footer className="border-t border-border/60 bg-background" data-testid="footer">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Lado esquerdo - Descomplica Com Liz */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-v2.png" 
                alt="Descomplica Com Liz" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <div className="font-serif text-2xl font-semibold" data-testid="text-footer-logo">
                Lizandra Bortoluzzi
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65" data-testid="text-footer-brand-desc">
              Mentoria financeira que transforma sua relação emocional com o dinheiro. Prosperidade começa de dentro para fora.
            </p>
          </div>

          {/* Lado direito - Navegação e Contato */}
          <div className="flex gap-12 md:gap-20 lg:gap-30">
            <div>
              <div className="text-sm font-semibold" data-testid="text-footer-nav-title">
                Navegação
              </div>
              <div className="mt-4 space-y-2 text-sm" data-testid="col-footer-nav">
                <a href="#sobre" className="block text-foreground/70 hover:text-foreground transition-colors" data-testid="link-footer-sobre">
                  Sobre Liz
                </a>
                <a href="#mentoria" className="block text-foreground/70 hover:text-foreground transition-colors" data-testid="link-footer-mentoria">
                  A Mentoria
                </a>
                <a
                  href="#transformacao"
                  className="block text-foreground/70 hover:text-foreground transition-colors"
                  data-testid="link-footer-transformacao"
                >
                  Transformação
                </a>
                <a href="#form-captacao" className="block text-foreground/70 hover:text-foreground transition-colors" data-testid="link-footer-contato">
                  Contato
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold" data-testid="text-footer-contato-title">
                Contato
              </div>
              <div className="mt-4 space-y-3 text-sm" data-testid="col-footer-contato">
                <a
                  href="mailto:descomplicacomliz@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:text-[hsl(var(--accent))]" />
                  <span>descomplicacomliz@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/descomplicacomliz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
                  data-testid="link-footer-instagram"
                >
                  <Instagram className="h-4 w-4 flex-shrink-0 group-hover:text-[hsl(var(--accent))]" />
                  <span>@descomplicacomliz</span>
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
                  data-testid="link-footer-whatsapp"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 group-hover:text-[hsl(var(--accent))]" />
                  <span>(47) 99705-9338</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="mt-12 rounded-2xl bg-foreground px-6 py-8 text-center" data-testid="section-legal-disclaimer">
          <h3 className="font-serif text-lg font-semibold tracking-wide text-background" data-testid="text-legal-title">
            AVISO LEGAL:
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-background/85" data-testid="text-legal-content">
            <p>
              Esta mentoria oferece conteúdo educativo para apoiar decisões financeiras mais conscientes. Os avanços alcançados dependem da forma como cada participante aplica o que aprende, considerando sua própria realidade.
            </p>
            <p>
              O material apresentado não substitui acompanhamento contábil ou psicológico profissional.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-foreground/60" data-testid="text-footer-bottom">
          © 2026 Descomplica Com Liz. Todos os direitos reservados. | Lizandra Bortoluzzi - Especialista em Finanças Comportamentais
        </div>
      </div>
    </footer>
  );
}
