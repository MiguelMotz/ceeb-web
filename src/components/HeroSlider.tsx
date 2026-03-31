"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    tag: "Construcción y eléctricos",
    title: "Proyectos con presencia visual y técnica.",
    text: "Una home más sólida, limpia y profesional desde el primer pantallazo.",
    gradient: "from-black via-neutral-900 to-red-700",
  },
  {
    tag: "Diseño corporativo",
    title: "Una página que sí transmite fuerza.",
    text: "Menos relleno, mejor jerarquía y navegación más clara.",
    gradient: "from-red-700 via-red-600 to-black",
  },
  {
    tag: "Responsive real",
    title: "Mejor estructura en cada pantalla.",
    text: "Todo se adapta sin romper márgenes ni generar scroll horizontal.",
    gradient: "from-neutral-900 via-black to-red-600",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const current = slides[active];

  return (
    <section className="bg-white py-6 md:py-8">
      <div className="container-ceeb">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="flex flex-col justify-center rounded-[28px] border border-neutral-200 bg-neutral-50 p-6 md:p-10">
            <span className="eyebrow w-fit">{current.tag}</span>

            <h1 className="mt-5 max-w-[12ch] text-[2.2rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-black md:text-[4.2rem]">
              {current.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
              {current.text}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="btn-red px-6 py-4 text-sm"
              >
                Solicitar información
              </a>

              <Link href="/galeria" className="btn-outline px-6 py-4 text-sm">
                Ver galería
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-neutral-200 bg-white p-5">
                <p className="text-3xl font-extrabold text-red-600">+10</p>
                <p className="mt-2 text-sm text-neutral-600">Años de experiencia</p>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white p-5">
                <p className="text-3xl font-extrabold text-red-600">+100</p>
                <p className="mt-2 text-sm text-neutral-600">Trabajos realizados</p>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white p-5">
                <p className="text-3xl font-extrabold text-red-600">100%</p>
                <p className="mt-2 text-sm text-neutral-600">Compromiso</p>
              </div>
            </div>
          </div>

          <div
            className={`hero-shadow overflow-hidden rounded-[28px] bg-gradient-to-br ${current.gradient} p-6 text-white md:p-8`}
          >
            <div className="flex h-full min-h-[340px] flex-col justify-between md:min-h-[420px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">
                    CEEB
                  </p>
                  <h2 className="mt-3 max-w-[10ch] text-3xl font-extrabold leading-tight md:text-5xl">
                    Galería visual de entrada
                  </h2>
                </div>

                <div className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                  Slide {active + 1}
                </div>
              </div>

              <div className="mt-8 rounded-[24px] bg-white/10 p-5 backdrop-blur-md md:p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
                  Vista principal
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/85 md:text-base">
                  Un bloque visual más limpio, con menos elementos internos y mejor
                  uso del espacio en la pantalla inicial.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Ir al slide ${index + 1}`}
                    className={`h-3.5 rounded-full transition-all ${
                      active === index ? "w-10 bg-white" : "w-3.5 bg-white/45"
                    }`}
                  />
                ))}

                <Link
                  href="/servicios"
                  className="ml-auto inline-flex items-center gap-2 text-sm font-extrabold text-white"
                >
                  Ver servicios <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}