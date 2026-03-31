const proyectos = [
  {
    titulo: "Proyecto de construcción",
    descripcion:
      "Obra desarrollada con enfoque en calidad estructural, cumplimiento y acabados profesionales.",
  },
  {
    titulo: "Intervención eléctrica",
    descripcion:
      "Adecuación e instalación con criterios técnicos y altos estándares de seguridad.",
  },
  {
    titulo: "Mantenimiento especializado",
    descripcion:
      "Trabajo orientado a garantizar funcionamiento óptimo y prolongar la vida útil de la instalación.",
  },
  {
    titulo: "Solución integral",
    descripcion:
      "Proyecto ejecutado combinando experiencia constructiva y soporte eléctrico confiable.",
  },
  {
    titulo: "Adecuación técnica",
    descripcion:
      "Implementación práctica y eficiente según requerimientos del cliente y del espacio.",
  },
  {
    titulo: "Trabajo finalizado",
    descripcion:
      "Entrega con enfoque en detalle, limpieza, funcionalidad y satisfacción del cliente.",
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="bg-neutral-50">
      <div className="section-container section-spacing">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red-600">
            Galería
          </p>
          <h2 className="ceeb-subtitle mt-4 text-black">
            Algunos trabajos y proyectos que reflejan nuestra experiencia.
          </h2>
          <p className="ceeb-text mt-5 text-base md:text-lg">
            Por ahora dejamos esta galería base. Luego puedes reemplazar cada bloque
            por fotos reales de los trabajos de la empresa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {proyectos.map((proyecto, index) => (
            <article
              key={`${proyecto.titulo}-${index}`}
              className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-sm"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-red-700 p-6 text-center text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                    CEEB
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold">{proyecto.titulo}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-neutral-600">
                  {proyecto.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}