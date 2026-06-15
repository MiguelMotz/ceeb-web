const servicios = [
  {
    titulo: "Adecuaciones eléctricas",
    descripcion:
      "Intervenciones eléctricas para espacios residenciales, comerciales e institucionales, cuidando la seguridad, el funcionamiento y la correcta distribución de los puntos eléctricos.",
  },
  {
    titulo: "Remodelaciones y obra civil",
    descripcion:
      "Ejecución de adecuaciones, mejoras locativas y trabajos de obra civil orientados a transformar espacios de manera funcional, ordenada y profesional.",
  },
  {
    titulo: "Mantenimiento preventivo",
    descripcion:
      "Revisión y atención de instalaciones para prevenir fallas, conservar el buen estado de los espacios y reducir riesgos durante la operación diaria.",
  },
  {
    titulo: "Soporte técnico especializado",
    descripcion:
      "Acompañamiento técnico para evaluar necesidades, proponer soluciones viables y ejecutar trabajos con criterio profesional en cada etapa del proyecto.",
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
            Soluciones técnicas para construir, adecuar y mantener espacios.
          </h2>
          <p className="ceeb-text mt-5 text-base md:text-lg">
            CEEB ofrece servicios enfocados en construcción, adecuaciones,
            instalaciones eléctricas y mantenimiento, con atención profesional y
            acompañamiento durante el desarrollo de cada trabajo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {servicios.map((servicio) => (
            <article
              key={servicio.titulo}
              className="group ceeb-card p-8 transition duration-300 hover:-translate-y-1 hover:border-red-200"
            >
              {/* Línea visual para reforzar la identidad roja de la marca */}
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