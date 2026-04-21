import { Button } from "@/components/ui/button";
import { Heart, Clock, ShieldCheck, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait-rd.jpg";

const pills = [
  { icon: Heart, label: "Atención personalizada" },
  { icon: Clock, label: "Respuesta inmediata" },
  { icon: ShieldCheck, label: "Honestidad" },
  { icon: Sparkles, label: "Empatía" },
];

export const About = () => (
  <section id="sobre-mi" className="py-24 md:py-32 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="reveal relative">
        <div className="absolute -top-4 -left-4 w-full h-full border border-accent/60 rounded-sm hidden md:block" />
        <img
          src={portrait}
          alt="Retrato profesional Dra. Rocío D'Agostino"
          width={1024}
          height={1024}
          loading="lazy"
          className="relative w-full aspect-square object-cover rounded-sm shadow-elegant"
        />
      </div>

      <div className="reveal">
        <div className="flex items-center gap-3 mb-5">
          <span className="gold-divider" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Sobre mí</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight mb-6">
          Comprometida con tu caso desde el primer momento
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Soy la <strong className="text-primary font-semibold">Dra. Rocío D'Agostino</strong>,
            abogada en Luján. Mi compromiso es escucharte sin apuros, explicarte cada paso con
            claridad y acompañarte hasta el final, sin soltarte la mano.
          </p>
          <p>
            Creo en una abogacía honesta y cercana: respondo rápido, doy mi opinión sincera
            —aunque no sea la que esperabas— y trabajo cada caso como si fuera el mío. Detrás de
            cada expediente hay una persona, y eso nunca lo pierdo de vista.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 mt-8">
          {pills.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 px-4 py-3 rounded-sm bg-secondary/60 border border-border"
            >
              <Icon size={18} className="text-accent shrink-0" />
              <span className="text-sm text-primary font-medium">{label}</span>
            </li>
          ))}
        </ul>

        <Button asChild variant="default" size="lg" className="mt-10">
          <a href="#contacto">Contactame</a>
        </Button>
      </div>
    </div>
  </section>
);
