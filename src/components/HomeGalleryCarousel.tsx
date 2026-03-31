"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slides = [
  {
    title: "Proyecto residencial",
    subtitle: "Construcción",
    description:
      "Proyecto ejecutado con enfoque en calidad, cumplimiento y mejor presentación visual.",
    image: "/galeria/proyecto-1.jpg",
  },
  {
    title: "Instalación eléctrica",
    subtitle: "Servicios eléctricos",
    description:
      "Trabajo técnico orientado a seguridad, funcionalidad y correcta ejecución.",
    image: "/galeria/proyecto-2.jpg",
  },
  {
    title: "Adecuación comercial",
    subtitle: "Obra civil",
    description:
      "Espacio adaptado para operación comercial con criterios técnicos y visuales.",
    image: "/galeria/proyecto-3.jpg",
  },
  {
    title: "Mantenimiento técnico",
    subtitle: "Soporte especializado",
    description:
      "Intervención enfocada en conservación, mejora y continuidad operativa.",
    image: "/galeria/proyecto-4.jpg",
  },
];

export default function HomeGalleryCarousel() {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      changeSlide((active + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [active]);

  const changeSlide = (nextIndex: number) => {
    setIsVisible(false);

    window.setTimeout(() => {
      setActive(nextIndex);
      setIsVisible(true);
    }, 180);
  };

  const prevSlide = () => {
    const nextIndex = (active - 1 + slides.length) % slides.length;
    changeSlide(nextIndex);
  };

  const nextSlide = () => {
    const nextIndex = (active + 1) % slides.length;
    changeSlide(nextIndex);
  };

  const current = slides[active];

  return (
    <div className="mt-2">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="relative min-h-[250px] overflow-hidden rounded-[28px] shadow-lg md:min-h-[300px] lg:min-h-[420px]">
          <div
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
            }`}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          <div
            className={`absolute inset-0 flex flex-col justify-between p-5 text-white transition-all duration-500 ease-out md:p-6 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80 md:text-xs">
                  {current.subtitle}
                </p>
              </div>

              <div className="rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm md:px-4 md:py-2 md:text-xs">
                {String(active + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="max-w-[420px]">
              <h3 className="text-3xl font-extrabold leading-[0.95] md:text-4xl lg:text-5xl">
                {current.title}
              </h3>

              <div className="mt-3 max-w-md rounded-[18px] bg-black/35 p-3.5 backdrop-blur-sm md:mt-4 md:p-4">
                <p className="text-sm leading-6 text-white/90 md:text-[15px]">
                  {current.description}
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5">
          <div className="card-ceeb flex flex-col justify-between p-5 md:p-6">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-red-600 md:text-xs">
                Proyectos destacados
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-black md:text-3xl">
                Soluciones en construcción y servicios eléctricos
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 md:leading-7">
                CEEB ofrece servicio profesional, experiencia y calidad, contactanos.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Proyecto anterior"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-black transition hover:bg-neutral-100"
              >
                <FiArrowLeft size={16} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Siguiente proyecto"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
              >
                <FiArrowRight size={16} />
              </button>

              <Link
                href="/galeria"
                className="ml-auto inline-flex items-center gap-2 text-sm font-extrabold text-red-600"
              >
                Ver galería completa <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => changeSlide(index)}
                className={`rounded-[20px] border p-3.5 text-left transition ${
                  active === index
                    ? "border-red-200 bg-red-50"
                    : "border-neutral-200 bg-white hover:bg-neutral-50"
                }`}
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-bold leading-5 text-black">
                  {slide.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}