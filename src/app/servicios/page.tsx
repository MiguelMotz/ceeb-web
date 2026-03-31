import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionIntro from "../../components/SectionIntro";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiTool, FiZap, FiSettings, FiCheckSquare } from "react-icons/fi";

const servicios = [
  {
    icon: <FiTool size={22} />,
    title: "Construcción general",
    text: "Obras civiles, adecuaciones, remodelaciones y ejecución de soluciones constructivas para distintos espacios.",
  },
  {
    icon: <FiZap size={22} />,
    title: "Instalaciones eléctricas",
    text: "Montaje, adecuación y mantenimiento de sistemas eléctricos con criterios técnicos y de seguridad.",
  },
  {
    icon: <FiSettings size={22} />,
    title: "Mantenimiento preventivo",
    text: "Intervenciones orientadas a conservar el buen estado de instalaciones y reducir fallos futuros.",
  },
  {
    icon: <FiCheckSquare size={22} />,
    title: "Soporte técnico especializado",
    text: "Evaluación de necesidades, acompañamiento técnico y ejecución profesional según el requerimiento del cliente.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="section-space bg-neutral-50">
          <div className="container-ceeb">
            <SectionIntro
              badge="Servicios"
              title="Servicios de construcción y eléctricos"
              text="Esta sección reúne el detalle de lo que hace la empresa, dejando la home más limpia y enfocada en impacto visual."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {servicios.map((item) => (
                <article key={item.title} className="card-ceeb p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 card-ceeb overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-black p-8 md:p-10 text-white">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-400">
                    Enfoque de trabajo
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold">
                    Menos relleno, más claridad.
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-neutral-300">
                    La navegación separada permite explicar mejor cada servicio sin
                    saturar la página principal.
                  </p>
                </div>

                <div className="bg-white p-8 md:p-10">
                  <ul className="space-y-4 text-sm leading-7 text-neutral-700">
                    <li>• Atención a proyectos residenciales y comerciales.</li>
                    <li>• Soluciones técnicas con criterio profesional.</li>
                    <li>• Trabajo orientado a calidad, seguridad y cumplimiento.</li>
                    <li>• Posibilidad de ampliar contenido con casos reales.</li>
                  </ul>
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