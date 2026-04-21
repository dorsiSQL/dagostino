import { Facebook } from "lucide-react";
import { ADDRESS_SHORT, FACEBOOK_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#areas", label: "Áreas" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
];

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground border-t border-accent/20">
    <div className="container py-16 grid md:grid-cols-3 gap-10">
      <div>
        <div className="font-serif text-2xl mb-3">
          Dra. Rocío <span className="text-accent">D'Agostino</span>
        </div>
        <p className="text-primary-foreground/65 text-sm leading-relaxed max-w-xs">
          Asesoramiento legal con compromiso, claridad y resultados.
        </p>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="inline-flex items-center justify-center w-10 h-10 mt-6 rounded-full border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
        >
          <Facebook size={16} />
        </a>
      </div>

      <div>
        <h4 className="text-accent text-xs tracking-[0.3em] uppercase mb-5">Navegación</h4>
        <ul className="grid grid-cols-2 gap-y-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-primary-foreground/75 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-accent text-xs tracking-[0.3em] uppercase mb-5">Estudio</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/75">
          <li>{ADDRESS_SHORT}</li>
          <li>
            <a href={PHONE_TEL} className="hover:text-accent transition-colors">
              {PHONE_DISPLAY}
            </a>
          </li>
          <li>Lun. a Vie. · 9 a 19 hs</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/55">
        <p>© 2025 Dra. Rocío D'Agostino. Todos los derechos reservados.</p>
        <p className="font-serif italic text-primary-foreground/65">
          Estudio jurídico en Luján, Buenos Aires.
        </p>
      </div>
    </div>
  </footer>
);
