import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionIntro from "../../components/SectionIntro";
import WhatsAppButton from "../../components/WhatsAppButton";

const items = [
  "Proyecto residencial",
  "Adecuación comercial",
  "Instalación eléctrica",
  "Mantenimiento técnico",
  "Remodelación interior",
  "Obra civil",
  "Soporte especializado",
  "Entrega final",
];

export default function GaleriaPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="section-space bg-neutral-50">
          <div className="container-ceeb">
            <SectionIntro
              title="Trabajos y proyectos"
              text="Aquí puedes mostrar trabajos reales de la empresa, avances de obra y resultados finales con una presentación visual más profesional."
            />

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {items.map((item, index) => (
                <article
                  key={item}
                  className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-sm"
                >
                  <div
                    className={`flex aspect-[4/4.2] items-end p-4 text-white md:p-5 ${
                      index % 4 === 0
                        ? "bg-gradient-to-br from-black via-neutral-900 to-red-700"
                        : index % 4 === 1
                        ? "bg-gradient-to-br from-red-700 to-red-500"
                        : index % 4 === 2
                        ? "bg-gradient-to-br from-neutral-800 to-black"
                        : "bg-gradient-to-br from-red-600 via-red-700 to-black"
                    }`}
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 md:text-xs">
                        CEEB
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold leading-tight md:text-2xl">
                        {item}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 md:p-5">
                    <p className="text-xs leading-6 text-neutral-600 md:text-sm md:leading-7">
                      Espacio listo para mostrar imágenes reales, trabajos
                      terminados, procesos o avances destacados.
                    </p>
                  </div>
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