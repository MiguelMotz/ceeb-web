import Footer from "../components/Footer";
import HomeGalleryCarousel from "../components/HomeGalleryCarousel";
import Navbar from "../components/Navbar";
import SectionIntro from "../components/SectionIntro";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import { FiCheckCircle, FiTool, FiZap } from "react-icons/fi";

const serviciosHome = [
  {
    icon: <FiTool size={22} />,
    title: "Construcción general",
    text: "Obras civiles, adecuaciones, remodelaciones y soluciones constructivas para proyectos residenciales y comerciales.",
  },
  {
    icon: <FiZap size={22} />,
    title: "Servicios eléctricos",
    text: "Instalaciones, mantenimiento y soporte técnico con enfoque en seguridad, funcionamiento y cumplimiento.",
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: "Cumplimiento y respaldo",
    text: "Procesos serios, atención oportuna y acompañamiento profesional durante cada etapa del trabajo.",
  },
];

const proyectosPreview = [
  "Adecuaciones eléctricas",
  "Remodelaciones y obra civil",
  "Mantenimiento preventivo",
  "Soporte técnico especializado",
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

        <section className="section-space-sm bg-neutral-50">
          <div className="container-ceeb">
            <SectionIntro
              title="Soluciones en construcción y servicios eléctricos"
              text="CEEB ofrece una presentación clara y profesional de sus servicios, experiencia y proyectos, con acceso directo a contacto por WhatsApp y correo."
            />

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {serviciosHome.map((item) => (
                <article key={item.title} className="card-ceeb p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container-ceeb">
            <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <SectionIntro
                  badge="Servicios"
                  title="Lo que hacemos"
                  text="Mostramos una vista resumida en la home. El detalle completo vive en su página independiente para mantener el inicio más limpio."
                />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {proyectosPreview.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-neutral-200 bg-white px-5 py-5 text-sm font-semibold leading-6 text-neutral-800 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/servicios"
                    className="btn-red px-6 py-3 text-sm"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] bg-black p-6 text-white shadow-lg md:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-red-400">
                  CEEB
                </p>

                <h3 className="mt-4 max-w-[11ch] text-3xl font-extrabold leading-[1.02] md:text-4xl xl:text-[3.1rem]">
                  Trabajo serio, técnico y visualmente profesional.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-neutral-300 md:text-base">
                  Una estructura más limpia ayuda a comunicar confianza y a
                  mostrar mejor los servicios principales de la empresa.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/8 px-4 py-4 backdrop-blur-sm">
                    <p className="text-sm font-semibold leading-6 text-white/95">
                      Diseño responsive real
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/8 px-4 py-4 backdrop-blur-sm">
                    <p className="text-sm font-semibold leading-6 text-white/95">
                      Navegación separada por vistas
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/8 px-4 py-4 backdrop-blur-sm">
                    <p className="text-sm font-semibold leading-6 text-white/95">
                      Home más limpia y directa
                    </p>
                  </div>
                </div>
              </div>
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
                  Dejamos la salida directa por WhatsApp y correo, sin
                  formularios innecesarios para esta primera fase del proyecto.
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
                  className="btn-outline border-white px-6 py-4 text-sm text-white hover:bg-white hover:text-black"
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