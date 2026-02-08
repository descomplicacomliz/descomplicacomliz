import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const waLink = buildWhatsAppLink({
    phoneE164: "5547997059338",
    message: "Olá, vim pelo seu website e gostaria de mais informações sobre a mentoria financeira.",
  });

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 hover:bg-[#25D366]/90 active:scale-95"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </a>
  );
}
