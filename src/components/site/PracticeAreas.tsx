import {
  Users,
  Scale,
  Briefcase,
  ScrollText,
  FileSignature,
  Home,
} from "lucide-react";

const areas = [
  {
    icon: Users,
    title: "Derecho de Familia",
    desc: "Divorcios, alimentos, régimen de comunicación y cuidado personal de los hijos.",
  },
  {
    icon: ScrollText,
    title: "Sucesiones",
    desc: "Tramitación de juicios sucesorios, declaratoria de herederos y partición de bienes.",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    desc: "Despidos, accidentes de trabajo, reclamos salariales y asesoramiento integral.",
  },
  {
    icon: Scale,
    title: "Derecho Civil",
    desc: "Daños y perjuicios, responsabilidad civil y conflictos entre particulares.",
  },
  {
    icon: FileSignature,
    title: "Contratos",
    desc: "Redacción, revisión y resolución de contratos comerciales y civiles.",
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    desc: "Compraventas, locaciones, escrituración y resolución de conflictos.",
  },
];

export const PracticeAreas = () => (
  <section id="areas" className="py-24 md:py-32 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="gold-divider" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Áreas de práctica</span>
          <span className="gold-divider" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
          ¿En qué te puedo ayudar?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map(({ icon: Icon, title, desc }, i) => (
          <article
            key={title}
            className="reveal group relative p-8 bg-background border border-border rounded-sm transition-all duration-500 hover:border-accent hover:shadow-elegant hover:-translate-y-1"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute top-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
            <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-primary/5 text-accent mb-5 group-hover:bg-primary group-hover:text-accent transition-colors">
              <Icon size={22} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-2">{title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
