import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-elegant hover:scale-105 active:scale-95 transition-transform"
  >
    <span className="absolute inset-0 rounded-full animate-pulse-dot" />
    <MessageCircle size={26} />
  </a>
);
