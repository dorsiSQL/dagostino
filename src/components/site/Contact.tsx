import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import {
  ADDRESS_SHORT,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

const items = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: WHATSAPP_URL,
    external: true,
  },
  { icon: Phone, label: "Teléfono", value: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: MapPin, label: "Dirección", value: ADDRESS_SHORT },
  { icon: Clock, label: "Horario", value: "Lunes a Viernes · 9 a 19 hs" },
];

export const Contact = () => (
  <section id="contacto" className="py-24 md:py-32 bg-background">
    <div className="container max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="gold-divider" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Contacto</span>
          <span className="gold-divider" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight mb-4">
          Contame tu caso. La primera consulta es el primer paso.
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto">
          Escribime y te respondo en el día. Sin compromiso, sin tecnicismos: charlamos para
          entender qué necesitás.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
        <div className="reveal bg-secondary/40 border border-border rounded-sm p-8 lg:p-10">
          <h3 className="font-serif text-2xl text-primary mb-8">Información de contacto</h3>
          <ul className="space-y-6">
            {items.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-primary text-accent shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-accent mb-1">
                      {label}
                    </div>
                    <div className="text-primary font-medium">{value}</div>
                  </div>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="reveal bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-sm p-8 lg:p-10 flex flex-col justify-center shadow-elegant">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-10 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase">
              Vía rápida
            </span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
            Hablemos por WhatsApp
          </h3>
          <p className="text-primary-foreground/75 mb-8">
            Es la forma más cómoda de empezar. Contame brevemente tu situación y coordinamos
            una consulta.
          </p>
          <Button asChild variant="whatsapp" size="xl" className="w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> Escribime por WhatsApp
            </a>
          </Button>
          <p className="text-primary-foreground/60 text-sm mt-4 text-center">
            Respondemos en el día · Sin compromiso
          </p>
        </div>
      </div>
    </div>
  </section>
);
