export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-neutral-50">
      <div className="section-container section-spacing">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red-600">
              Nosotros
            </p>
            <h2 className="ceeb-subtitle mt-4 text-black">
              Experiencia, responsabilidad y soluciones integrales para cada proyecto.
            </h2>
          </div>

          <div>
            <p className="ceeb-text text-base md:text-lg">
              En CEEB trabajamos para ofrecer servicios de construcción y soluciones
              eléctricas con altos estándares de calidad. Nos enfocamos en atender
              cada necesidad de manera técnica, responsable y eficiente, brindando
              confianza a nuestros clientes en cada etapa del proyecto.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="ceeb-card p-8">
            <h3 className="text-xl font-bold text-black">Misión</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Ejecutar proyectos de construcción y servicios eléctricos con calidad,
              seguridad y cumplimiento, aportando valor real a cada cliente.
            </p>
          </div>

          <div className="ceeb-card p-8">
            <h3 className="text-xl font-bold text-black">Visión</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Consolidarnos como una empresa reconocida por su seriedad, capacidad
              técnica y excelencia en la ejecución de proyectos.
            </p>
          </div>

          <div className="ceeb-card p-8">
            <h3 className="text-xl font-bold text-black">Valores</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Responsabilidad, transparencia, compromiso, seguridad y orientación al
              resultado en cada trabajo realizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}