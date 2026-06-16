"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";

const items = [
  {
    title: "Sala de cine",
    category: "Adecuación comercial",
    image: "/galeria/1t.png",
  },
  {
    title: "Escaleras interiores",
    category: "Remodelación",
    image: "/galeria/2t.png",
  },
  {
    title: "Zona comercial",
    category: "Obra civil",
    image: "/galeria/3t.jpeg",
  },
  {
    title: "Instalación técnica",
    category: "Servicios eléctricos",
    image: "/galeria/4t.jpeg",
  },
  {
    title: "Área de acceso",
    category: "Adecuación",
    image: "/galeria/5t.jpeg",
  },
  {
    title: "Espacio terminado",
    category: "Entrega final",
    image: "/galeria/6t.jpeg",
  },
  {
    title: "Intervención interior",
    category: "Mantenimiento",
    image: "/galeria/7t.jpeg",
  },
  {
    title: "Trabajo en campo",
    category: "Soporte técnico",
    image: "/galeria/8t.jpeg",
  },
];

export default function GaleriaPage() {
  // Guardamos el índice para poder navegar entre fotos
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentImage = selectedIndex !== null ? items[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-neutral-50 pt-8 pb-12 md:pt-10 md:pb-14">
          <div className="container-ceeb">
            <div className="grid gap-8 rounded-[34px] border border-neutral-200 bg-white p-7 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-9">
              {/* Hero visual para que la galería no parezca una grilla suelta */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
                  Galería
                </p>

                <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] text-black md:text-5xl">
                  Trabajos reales, procesos y resultados visibles.
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
                  Una muestra visual de proyectos, adecuaciones, instalaciones y
                  trabajos ejecutados por CEEB en espacios comerciales y
                  técnicos.
                </p>
              </div>

              <div className="rounded-[28px] bg-black p-6 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400">
                  Experiencia en campo
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                  Cada imagen representa trabajo real realizado por nuestro
                  equipo.
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Mostramos proyectos ejecutados, procesos constructivos,
                  adecuaciones técnicas e intervenciones eléctricas que reflejan
                  la experiencia, capacidad operativa y compromiso de CEEB.
                </p>

                <div className="mt-6 h-1.5 w-16 rounded-full bg-red-600" />
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <article
                  key={item.title}
                  onClick={() => setSelectedIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-[26px] border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/4.7] overflow-hidden bg-neutral-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Degradado para que el texto siempre tenga buena lectura */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-300">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {currentImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Cerrar imagen"
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-black transition hover:bg-red-600 hover:text-white"
            >
              ×
            </button>

            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={(event) => {
                event.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:bg-red-600 hover:text-white md:left-6 md:h-12 md:w-12"
            >
              <FiChevronLeft size={28} />
            </button>

            <button
              type="button"
              aria-label="Imagen siguiente"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:bg-red-600 hover:text-white md:right-6 md:h-12 md:w-12"
            >
              <FiChevronRight size={28} />
            </button>

            {/* Evita que el click sobre la imagen cierre el popup */}
            <div
              className="relative h-[82vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={currentImage.image}
                alt={currentImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
