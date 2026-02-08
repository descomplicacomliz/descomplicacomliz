"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildWhatsAppLink } from "@/lib/utils";

// Schema de validação
const leadSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
  phone: z
    .string()
    .min(10, "Digite seu WhatsApp com DDD")
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length >= 10 && v.length <= 13, "Digite um WhatsApp válido"),
  profile: z.string().min(1, "Selecione uma opção"),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;
type OfferDecision = "accepted" | "declined" | "dismissed";

export function LeadFormSection() {
  const [leadDraft, setLeadDraft] = useState<LeadFormValues | null>(null);
  const [offerOpen, setOfferOpen] = useState(false);
  const [offerDecision, setOfferDecision] = useState<OfferDecision | null>(null);

  const waLink = buildWhatsAppLink({
    phoneE164: "5547997059338",
    message:
      'Olá, vim pelo seu website. Me cadastrei e recebi a oferta promocional com 10% de desconto, pode me dar mais detalhes, por favor!?',
  });

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", phone: "", profile: "", message: "" },
    mode: "onTouched",
    reValidateMode: "onChange"
  });

async function createNotionRow(payload: {
  lead: LeadFormValues;
  decision: OfferDecision;
}) {
  await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

  async function finalizeDecision(decision: OfferDecision) {
    if (!leadDraft) return;
    setOfferDecision(decision);
    await createNotionRow({ lead: leadDraft, decision });
  }

  function onLeadSubmit(values: LeadFormValues) {
    setLeadDraft(values);
    setOfferDecision(null);
    setOfferOpen(true);
  }

  async function onOfferOpenChange(next: boolean) {
    // If user closes/dismisses without explicit button
    if (!next && offerOpen && leadDraft && !offerDecision) {
      await finalizeDecision("dismissed");
    }
    setOfferOpen(next);
  }

  return (
    <>
      <section id="form-captacao" className="relative overflow-hidden bg-foreground text-background">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(187,151,79,0.25)_0%,rgba(55,52,53,0)_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(193,164,142,0.25)_0%,rgba(55,52,53,0)_55%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-20">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-5xl" data-testid="text-lead-title">
              Agende sua sessão de diagnóstico
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/85 md:text-lg" data-testid="text-lead-subtitle">
              Ainda está com dúvidas? Preencha o formulário e receba uma sessão de diagnóstico — sem compromisso.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-2xl" data-testid="card-lead-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onLeadSubmit)} className="space-y-5" data-testid="form-lead">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-background" data-testid="label-name">Seu nome completo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Digite seu nome"
                            className="h-12 rounded-xl bg-white/90 border-white/20 text-foreground placeholder:text-foreground/50"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" data-testid="error-name" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-background" data-testid="label-email">Seu melhor e-mail</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="seu@email.com"
                            className="h-12 rounded-xl bg-white/90 border-white/20 text-foreground placeholder:text-foreground/50"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" data-testid="error-email" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-background" data-testid="label-phone">WhatsApp (com DDD)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="(00) 00000-0000"
                            className="h-12 rounded-xl bg-white/90 border-white/20 text-foreground placeholder:text-foreground/50"
                            inputMode="tel"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" data-testid="error-phone" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-background" data-testid="label-profile">Qual perfil mais te representa?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl bg-white/90 border-white/20 text-foreground" data-testid="select-profile">
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Quero começar a investir">Quero começar a investir</SelectItem>
                            <SelectItem value="Ganho bem, mas nunca sobra">Ganho bem, mas nunca sobra</SelectItem>
                            <SelectItem value="Sinto culpa e ansiedade com dinheiro">Sinto culpa e ansiedade com dinheiro</SelectItem>
                            <SelectItem value="Estou endividada e preciso de ajuda">Estou endividada e preciso de ajuda</SelectItem>
                            <SelectItem value="Preciso de uma estratégia personalizada">Preciso de uma estratégia personalizada</SelectItem>
                            <SelectItem value="Quero melhorar minha relação emocional com dinheiro">Quero melhorar minha relação emocional com dinheiro</SelectItem>
                            <SelectItem value="Quero conquistar autonomia financeira">Quero conquistar autonomia financeira</SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" data-testid="error-profile" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-background" data-testid="label-message">
                          Conte um pouco sobre sua situação financeira atual <span className="text-background/60">(opcional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="O que você mais gostaria de resolver na sua vida financeira?"
                            className="min-h-[100px] rounded-xl bg-white/90 border-white/20 text-foreground placeholder:text-foreground/50 resize-none"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" data-testid="error-message" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="cta-glow h-14 w-full rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-base font-semibold shadow-lg shadow-black/30 hover:bg-[hsl(var(--accent))]/90"
                    data-testid="button-submit-lead"
                  >
                    <span className="md:hidden">Começar transformação agora!</span>
                    <span className="hidden md:inline">Quero transformar minha vida financeira</span>
                  </Button>

                  <p className="text-center text-xs text-background/60" data-testid="text-privacy">
                    Seus dados estão seguros e serão usados apenas para contato sobre a mentoria.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Oferta */}
      <Dialog open={offerOpen} onOpenChange={onOfferOpenChange}>
        <DialogContent className="max-w-md rounded-3xl" data-testid="modal-offer">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl" data-testid="text-modal-title">
              Atenção, {leadDraft?.name ? leadDraft.name.split(' ')[0] : "ali"}!
            </DialogTitle>
            <DialogDescription className="text-foreground/70" data-testid="text-modal-desc">
              Agende hoje mesmo a sua consultoria gratuita e receba <span className="font-semibold text-[hsl(var(--accent))]">10% de desconto</span>, essa oferta é única!
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 rounded-2xl border border-border/60 bg-[hsl(var(--accent))]/10 p-4" data-testid="box-modal-info">
            <div className="text-sm font-semibold text-foreground" data-testid="text-modal-highlight">
              🎁 Bônus exclusivo
            </div>
            <div className="mt-1 text-xs text-foreground/70" data-testid="text-modal-note">
              Ao clicar em "Agendar consultoria gratuita", você será redirecionada ao WhatsApp com uma mensagem pronta para agendar sua consultoria gratuita.
            </div>
          </div>

          <DialogFooter className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-between">
            <Button
              variant="ghost"
              className="h-11 rounded-full text-xs"
              onClick={async () => {
                await finalizeDecision("declined");
                setOfferOpen(false);
              }}
              data-testid="button-cancel-offer"
            >
              Não, obrigada.
            </Button>

            <Button
              className="cta-glow h-11 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))]/90"
              asChild
              onClick={async () => {
                await finalizeDecision("accepted");
              }}
              data-testid="button-accept-offer"
            >
              <a href={waLink} target="_blank" rel="noreferrer">
                Agendar consultoria gratuita
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
