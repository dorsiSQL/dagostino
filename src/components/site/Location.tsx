import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { ADDRESS, MAPS_DIRECTIONS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const Location = () => (
  <section id="ubicacion" className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="gold-divider" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Ubicación</span>
          <span className="gold-divider" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
          Visitanos en el corazón de Luján
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-stretch">
        <div className="reveal lg:col-span-3 rounded-sm overflow-hidden shadow-elegant border border-border min-h-[360px]">
          <iframe
            title="Ubicación del estudio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d-59.1!3d-34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sItalia+1242+Luj%C3%A1n!5e0!3m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 360 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="reveal lg:col-span-2 bg-background border border-border rounded-sm p-8 flex flex-col">
          <h3 className="font-serif text-2xl text-primary mb-6">Datos del estudio</h3>
          <ul className="space-y-5 text-sm text-foreground/80 flex-1">
            <li className="flex gap-3">
              <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-accent shrink-0 mt-0.5" size={18} />
              <a href={PHONE_TEL} className="hover:text-accent transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="text-accent shrink-0 mt-0.5" size={18} />
              <span>Lun. a Vie. · 9:00 a 19:00 hs</span>
            </li>
          </ul>
          <Button asChild variant="default" size="lg" className="mt-8 w-full">
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer">
              <Navigation size={18} /> Cómo llegar
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
