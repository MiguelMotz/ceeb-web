import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionIntro from "../../components/SectionIntro";
import WhatsAppButton from "../../components/WhatsAppButton";

const teamMembers = [
  {
    name: "Ing. Sergio Espinosa",
    role: "Director de Proyectos",
    image: "/equipo/ingeniero-3.jpg",
  },
  {
    name: "Ing. Leandro Espinosa",
    role: "Coordinador Eléctrico",
    image: "/equipo/ingeniero-1.jpg",
  },
  {
    name: "Ing. Bryam Espinosa",
    role: "Supervisor de Obra",
    image: "/equipo/ingeniero-2.jpg",
  },
];

const valores = [
  {
    title: "Responsabilidad",
    text: "Cumplimos tiempos, procesos y compromisos en cada proyecto.",
  },
  {
    title: "Seguridad",
    text: "Priorizamos trabajos técnicos bien ejecutados y con enfoque preventivo.",
  },
  {
    title: "Cumplimiento",
    text: "Entregamos soluciones funcionales, duraderas y alineadas a cada necesidad.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="pt-8 pb-12 bg-neutral-50 md:pt-10 md:pb-14">
          <div className="container-ceeb">
            <SectionIntro
              badge="Nosotros"
              title="CONSTRUCCIONES Y ELECTRICOS ESPINOSA BALLESTEROS"
              text="Conoce parte del equipo profesional que respalda los proyectos de la empresa y hace posible una ejecución seria, técnica y confiable."
            />

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group rounded-[28px] border border-neutral-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg md:p-6"
                >
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-neutral-100 bg-neutral-200 shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-lg md:h-32 md:w-32">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-red-600">
                      Equipo CEEB
                    </p>

                    <h2 className="mt-3 text-xl font-extrabold leading-tight text-black md:text-2xl">
                      {member.name}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-neutral-700">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-4 pb-12 bg-white">
          <div className="container-ceeb">
            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-7 shadow-sm md:p-9">
              {/* Bloque institucional unificado */}
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
                Empresa
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-black">
                Quiénes somos
              </h2>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
                    CEEB es una empresa enfocada en brindar soluciones de
                    construcción y servicios eléctricos con criterio técnico,
                    compromiso y cumplimiento, acompañando cada proyecto desde
                    la planificación hasta la ejecución final.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
                    Su propuesta de valor está en unir experiencia, respaldo y
                    capacidad de respuesta para desarrollar proyectos con
                    calidad, orden y seguridad.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <article className="rounded-[24px] border border-neutral-200 bg-white p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600">
                      Propósito
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold text-black">
                      Misión
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      Ejecutar proyectos de construcción y servicios eléctricos
                      con calidad, responsabilidad y resultados confiables.
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-neutral-200 bg-white p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600">
                      Proyección
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold text-black">
                      Visión
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      Ser reconocidos por la seriedad, el cumplimiento y la
                      capacidad técnica en obras civiles y soluciones
                      eléctricas.
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {valores.map((valor) => (
                <article
                  key={valor.title}
                  className="rounded-[26px] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  {/* Línea de marca para dar unidad visual sin aumentar altura */}
                  <div className="mb-4 h-1.5 w-10 rounded-full bg-red-600" />

                  <h3 className="text-lg font-extrabold text-black">
                    {valor.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {valor.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
