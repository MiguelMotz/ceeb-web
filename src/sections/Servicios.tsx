const servicios = [
  {
    titulo: "Construcción general",
    descripcion:
      "Ejecución de obras civiles, adecuaciones, remodelaciones y soluciones constructivas para distintos tipos de proyectos.",
  },
  {
    titulo: "Instalaciones eléctricas",
    descripcion:
      "Montaje, mantenimiento y adecuación de sistemas eléctricos con enfoque en seguridad, funcionalidad y cumplimiento técnico.",
  },
  {
    titulo: "Mantenimiento preventivo",
    descripcion:
      "Atención oportuna para conservar instalaciones y sistemas en óptimas condiciones y reducir fallos futuros.",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion:
      "Acompañamiento profesional para evaluar necesidades, proponer soluciones y ejecutar trabajos con criterio técnico.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white">
      <div className="section-container section-spacing">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red-600">
            Servicios
          </p>
          <h2 className="ceeb-subtitle mt-4 text-black">
            Soluciones pensadas para construir, instalar y responder con eficiencia.
          </h2>
          <p className="ceeb-text mt-5 text-base md:text-lg">
            Estos son algunos de los servicios que CEEB puede destacar en su web
            corporativa. Luego podemos ajustarlos exactamente a la actividad real de
            la empresa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {servicios.map((servicio) => (
            <article
              key={servicio.titulo}
              className="group ceeb-card p-8 transition duration-300 hover:-translate-y-1 hover:border-red-200"
            >
              <div className="mb-5 h-2 w-16 rounded-full bg-red-600 transition group-hover:w-24" />
              <h3 className="text-xl font-extrabold text-black">
                {servicio.titulo}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {servicio.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}