import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionIntro from "../../components/SectionIntro";
import WhatsAppButton from "../../components/WhatsAppButton";

const teamMembers = [
  {
    name: "Ing. Carlos Espinosa",
    role: "Director de Proyectos",
    description:
      "Lidera la planeación y ejecución de proyectos, asegurando cumplimiento técnico, calidad y coordinación general.",
    image: "/equipo/ingeniero-1.jpg",
  },
  {
    name: "Ing. Laura Ballesteros",
    role: "Coordinadora Eléctrica",
    description:
      "Supervisa instalaciones eléctricas, mantenimiento y soluciones técnicas con enfoque en seguridad y funcionamiento.",
    image: "/equipo/ingeniero-2.jpg",
  },
  {
    name: "Ing. Andrés Martínez",
    role: "Supervisor de Obra",
    description:
      "Acompaña la ejecución en campo, controla procesos constructivos y vela por el avance correcto de cada intervención.",
    image: "/equipo/ingeniero-3.jpg",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="pt-8 pb-14 bg-neutral-50 md:pt-10 md:pb-16">
          <div className="container-ceeb">
            <SectionIntro
              badge="Nosotros"
              title="CONSTRUCCIONES Y ELECTRICOS ESPINOSA BALLESTEROS"
              text="Conoce parte del equipo profesional que respalda los proyectos de la empresa y hace posible una ejecución seria, técnica y confiable."
            />

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group rounded-[30px] border border-neutral-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg md:p-7"
                >
                  <div className="mx-auto relative h-36 w-36 overflow-hidden rounded-full border-4 border-neutral-100 bg-neutral-200 shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-lg md:h-40 md:w-40">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-red-600">
                      Equipo CEEB
                    </p>

                    <h2 className="mt-3 text-xl font-extrabold leading-tight text-black md:text-2xl">
                      {member.name}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-neutral-700">
                      {member.role}
                    </p>

                    <div className="mx-auto mt-4 h-px w-16 bg-neutral-200 transition duration-300 group-hover:bg-red-200" />

                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                      {member.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container-ceeb">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-3xl font-extrabold text-black">
                  Quiénes somos
                </h2>
                <p className="mt-5 text-sm leading-8 text-neutral-600 md:text-base">
                  CEEB es una empresa enfocada en brindar soluciones de
                  construcción y servicios eléctricos con criterio técnico,
                  compromiso y cumplimiento. Nuestro trabajo busca responder de
                  manera seria a las necesidades del cliente, desde la
                  planificación hasta la ejecución final.
                </p>
                <p className="mt-5 text-sm leading-8 text-neutral-600 md:text-base">
                  La propuesta de valor de la empresa está en unir experiencia,
                  respaldo y capacidad de respuesta para desarrollar proyectos
                  con calidad, orden y seguridad.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-extrabold text-black">Misión</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    Ejecutar proyectos de construcción y servicios eléctricos con
                    calidad, responsabilidad y enfoque en resultados confiables
                    para cada cliente.
                  </p>
                </div>

                <div className="rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-extrabold text-black">Visión</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    Ser una empresa reconocida por su seriedad, cumplimiento y
                    capacidad técnica en obras civiles y soluciones eléctricas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-black">
                  Responsabilidad
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Cumplimos con tiempos, procesos y compromisos asumidos en cada
                  proyecto.
                </p>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-black">Seguridad</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Priorizamos el trabajo técnico bien ejecutado y con enfoque
                  preventivo.
                </p>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
                <h3 className="text-xl font-extrabold text-black">
                  Cumplimiento
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Buscamos entregar resultados funcionales, duraderos y alineados
                  con lo que el cliente necesita.
                </p>
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