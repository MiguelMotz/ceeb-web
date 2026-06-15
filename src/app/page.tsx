import Footer from "../components/Footer";
import HomeGalleryCarousel from "../components/HomeGalleryCarousel";
import Navbar from "../components/Navbar";
import SectionIntro from "../components/SectionIntro";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

const serviciosPreview = [
  {
    title: "Adecuaciones eléctricas",
    text: "Intervenciones técnicas para mejorar, adaptar o ampliar instalaciones eléctricas.",
  },
  {
    title: "Remodelaciones y obra civil",
    text: "Trabajos de adecuación y transformación de espacios residenciales y comerciales.",
  },
  {
    title: "Mantenimiento preventivo",
    text: "Revisión y atención oportuna para conservar espacios e instalaciones en buen estado.",
  },
  {
    title: "Soporte técnico especializado",
    text: "Acompañamiento profesional para evaluar necesidades y ejecutar soluciones confiables.",
  },
];

const experienciaCinemark = [
  "Adecuaciones eléctricas",
  "Remodelaciones y obra civil",
  "Salas de cine y espacios comerciales",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="pt-4 pb-10 bg-white">
          <div className="container-ceeb">
            <HomeGalleryCarousel />
          </div>
        </section>

        <section className="bg-neutral-50 py-12">
          <div className="container-ceeb">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-neutral-200 bg-white p-7 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-10">
              <div className="rounded-[28px] bg-black p-7 text-white">
                {/* Logo autorizado para mostrar la relación comercial */}
                <div className="flex min-h-[120px] items-center justify-center rounded-3xl bg-white p-6">
                  <img
                    src="/logo-cinemark.svg"
                    alt="Logo de Cinemark"
                    className="max-h-20 w-full object-contain"
                  />
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-red-400">
                  Aliado eléctrico
                </p>

                <h2 className="mt-2 text-2xl font-extrabold leading-tight">
                  Aproximadamente desde 2018
                </h2>
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
                  Experiencia destacada
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-black md:text-4xl">
                  Aliado eléctrico de Cinemark desde aproximadamente 2018
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base">
                  CEEB ha participado en proyectos de construcción, adecuación,
                  remodelación e infraestructura eléctrica para espacios
                  Cinemark, aportando soluciones técnicas para salas de cine,
                  áreas comerciales y proyectos de expansión.
                </p>

                {/* En móvil se ocultan para reducir scroll vertical */}
                <div className="hidden mt-7 gap-3 md:grid md:grid-cols-3">
                  {experienciaCinemark.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm font-bold leading-6 text-neutral-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container-ceeb">
            <div className="max-w-4xl">
              <SectionIntro
                badge="Servicios"
                title="Servicios principales"
                text="CEEB desarrolla soluciones en construcción, adecuaciones, instalaciones eléctricas y mantenimiento técnico para proyectos residenciales, comerciales e institucionales."
              />
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {serviciosPreview.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-6"
                >
                  {/* Detalle visual para reforzar marca sin parecer botón */}
                  <div className="mb-5 h-1.5 w-10 rounded-full bg-red-600" />

                  <h3 className="text-base font-extrabold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/servicios" className="btn-red px-6 py-3 text-sm">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        <section className="section-space bg-black text-white">
          <div className="container-ceeb">
            <div className="grid items-center gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_auto] md:p-10">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400">
                  Contacto directo
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                  ¿Quieres cotizar o pedir información?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base">
                  Escríbenos por WhatsApp o correo para recibir orientación
                  sobre nuestros servicios.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                <a
                  href="https://wa.me/573043701713"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-red px-6 py-4 text-sm"
                >
                  Escribir por WhatsApp
                </a>

                <a
                  href="mailto:contacto@ceeb.com"
                  className="btn-outline-light px-6 py-4 text-sm"
                >
                  Enviar correo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
