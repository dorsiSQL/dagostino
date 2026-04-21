import { useEffect, useState } from "react";

// Detecta si el estudio está abierto: L-V 9-19 hs hora Argentina (UTC-3)
export const useArgentinaOpen = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      // Convertir a UTC-3 (Argentina, sin DST)
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
      const ar = new Date(utcMs - 3 * 60 * 60_000);
      const day = ar.getDay(); // 0 dom - 6 sab
      const hour = ar.getHours();
      setOpen(day >= 1 && day <= 5 && hour >= 9 && hour < 19);
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);

  return open;
};
