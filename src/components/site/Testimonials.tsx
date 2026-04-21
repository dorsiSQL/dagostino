import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Daiana Iglesias",
    text: "Excelente lugar. Super buena la atención. Puntuales. Atención super completa e integral. La Dra. D'Agostino, la mejor abogada de Luján. SUPER RECOMENDABLE.",
  },
  {
    name: "Andrea Malinovsky",
    text: "He pasado por muchos abogados y hoy agradezco a la vida poner en mi camino a la brillante Dra. Rocío D'Agostino. Gracias por ser sumamente honesta, tener mucha paciencia y actuar de forma inmediata.",
  },
  {
    name: "Luca Marino",
    text: "Rocío, sin dudas sos la mejor. Mujer entendedora, empática, sabés contener y explicar con paciencia y amor hacia los clientes. Gracias por nunca soltarnos la mano. Sos única.",
  },
];

export const Testimonials = () => (
  <section id="testimonios" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="gold-divider" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Testimonios</span>
          <span className="gold-divider" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight mb-6">
          La voz de quienes ya confiaron
        </h2>
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary border border-border">
          <span className="font-serif text-2xl text-primary leading-none">5.0</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm text-foreground/70">· 18 opiniones en Google</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            className="reveal relative p-8 pt-12 bg-secondary/40 border border-border rounded-sm hover:border-accent transition-colors"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Quote
              className="absolute top-5 left-6 text-accent/40"
              size={48}
              strokeWidth={1}
            />
            <blockquote className="text-foreground/80 leading-relaxed italic font-serif text-lg mb-6">
              "{r.text}"
            </blockquote>
            <figcaption className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-primary font-semibold text-sm">{r.name}</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
