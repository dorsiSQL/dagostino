import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImg from "@/assets/hero-law.jpg";

export const Hero = () => (
  <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden">
    <img
      src={heroImg}
      alt="Estudio jurídico elegante con biblioteca de derecho"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-primary/30" />

    <div className="container relative z-10 pt-32 pb-20 max-w-4xl">
      <div className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-divider" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase">
            Estudio Jurídico · Luján
          </span>
        </div>
        <h1 className="font-serif text-primary-foreground text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
          Asesoramiento legal con{" "}
          <em className="text-accent not-italic font-normal">compromiso, claridad</em> y resultados.
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 font-light">
          Dra. Rocío D'Agostino — Abogada en Luján, Buenos Aires
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="gold" size="xl">
            <a href="#contacto">Reservar una consulta</a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href="#sobre-mi">Conocé más</a>
          </Button>
        </div>

        <div className="mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="text-primary-foreground/90 text-sm">
            <strong className="font-semibold">5.0</strong> · 18 opiniones verificadas en Google
          </span>
        </div>
      </div>
    </div>
  </section>
);
