import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiCheckCircle, FiSettings, FiTool, FiZap } from "react-icons/fi";

const servicios = [
  {
    icon: <FiZap size={22} />,
    title: "Adecuaciones eléctricas",
    text: "Intervenciones para adaptar, mejorar o ampliar instalaciones eléctricas en espacios residenciales, comerciales e institucionales.",
  },
  {
    icon: <FiTool size={22} />,
    title: "Remodelaciones y obra civil",
    text: "Adecuaciones, mejoras locativas y trabajos de obra civil orientados a transformar espacios de manera funcional y segura.",
  },
  {
    icon: <FiSettings size={22} />,
    title: "Mantenimiento preventivo",
    text: "Revisión y atención técnica para conservar instalaciones en buen estado, prevenir fallas y reducir riesgos operativos.",
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: "Soporte técnico especializado",
    text: "Acompañamiento para evaluar necesidades, proponer soluciones viables y ejecutar trabajos con criterio profesional.",
  },
];

const enfoques = [
  "Atención a proyectos residenciales, comerciales e institucionales.",
  "Soluciones eléctricas y constructivas con criterio técnico.",
  "Trabajo orientado a seguridad, cumplimiento y funcionamiento.",
  "Experiencia en adecuaciones, remodelaciones y espacios comerciales.",
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-neutral-50 pt-8 pb-12 md:pt-10 md:pb-14">
          <div className="container-ceeb">
            <div className="grid gap-8 rounded-[34px] border border-neutral-200 bg-white p-7 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-9">
              {/* Hero de servicios con mensaje comercial real */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
                  Servicios
                </p>

                <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] text-black md:text-5xl">
                  Soluciones técnicas para construir, adecuar y mantener.
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
                  CEEB ofrece servicios de construcción, adecuaciones,
                  instalaciones eléctricas y mantenimiento técnico, con enfoque
                  en seguridad, cumplimiento y calidad de ejecución.
                </p>
              </div>

              <div className="rounded-[28px] bg-black p-6 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400">
                  Enfoque técnico
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                  Trabajo serio para espacios residenciales y comerciales.
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Cada servicio se desarrolla con revisión previa, criterio
                  profesional y acompañamiento durante la ejecución.
                </p>

                <div className="mt-6 h-1.5 w-16 rounded-full bg-red-600" />
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {servicios.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-extrabold leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="bg-black p-7 text-white md:p-8">
                  {/* Cierre comercial de la página */}
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400">
                    Método de trabajo
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                    Diagnóstico, ejecución y acompañamiento.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-neutral-300">
                    El objetivo es entregar soluciones funcionales, seguras y
                    alineadas con las necesidades de cada espacio.
                  </p>
                </div>

                <div className="grid gap-3 bg-white p-7 md:grid-cols-2 md:p-8">
                  {enfoques.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm font-semibold leading-7 text-neutral-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
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