import { Button } from "@/components/ui/button";
import { useArgentinaOpen } from "@/hooks/use-argentina-open";

const schedule = [
  { day: "Lunes", hours: "9:00 – 19:00 hs" },
  { day: "Martes", hours: "9:00 – 19:00 hs" },
  { day: "Miércoles", hours: "9:00 – 19:00 hs" },
  { day: "Jueves", hours: "9:00 – 19:00 hs" },
  { day: "Viernes", hours: "9:00 – 19:00 hs" },
  { day: "Sábado", hours: "Cerrado", closed: true },
  { day: "Domingo", hours: "Cerrado", closed: true },
];

export const Hours = () => {
  const isOpen = useArgentinaOpen();

  return (
    <section id="horarios" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-12 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase">Horarios</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
            Disponibilidad y atención
          </h2>
          <p className="text-primary-foreground/75 leading-relaxed mb-8 max-w-md">
            Atendemos con turno previo. Si necesitás una consulta urgente, escribime por
            WhatsApp y te respondo lo antes posible.
          </p>

          <div
            className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-full border ${
              isOpen
                ? "bg-primary-foreground/5 border-primary-foreground/20"
                : "bg-primary-foreground/5 border-primary-foreground/10"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              {isOpen && (
                <span className="absolute inset-0 rounded-full bg-status-open animate-pulse-dot" />
              )}
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isOpen ? "bg-status-open" : "bg-primary-foreground/30"
                }`}
              />
            </span>
            <span className="text-sm font-medium">
              {isOpen ? "Abierto ahora" : "Cerrado en este momento"}
            </span>
          </div>

          <div className="mt-10">
            <Button asChild variant="gold" size="lg">
              <a href="#contacto">Agendá una consulta</a>
            </Button>
          </div>
        </div>

        <div className="reveal">
          <ul className="bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-sm divide-y divide-primary-foreground/10">
            {schedule.map((s) => (
              <li
                key={s.day}
                className="flex items-center justify-between px-6 py-4 text-sm md:text-base"
              >
                <span className="font-medium">{s.day}</span>
                <span
                  className={
                    s.closed ? "text-primary-foreground/45" : "text-accent font-medium"
                  }
                >
                  {s.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
