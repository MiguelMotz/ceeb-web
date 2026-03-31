import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="section-container section-spacing">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
              Soluciones en construcción y servicios eléctricos
            </span>

            <h1 className="ceeb-title mt-6 max-w-3xl text-black">
              Construimos con calidad, respondemos con seguridad y trabajamos con
              compromiso.
            </h1>

            <p className="ceeb-text mt-6 max-w-2xl text-base md:text-lg">
              En CEEB desarrollamos proyectos de construcción y servicios
              eléctricos con enfoque profesional, cumplimiento en tiempos y
              atención cercana a cada cliente.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/573043701713"
                target="_blank"
                rel="noreferrer"
                className="ceeb-btn-primary rounded-full px-6 py-4 text-center text-sm font-extrabold"
              >
                Solicitar información
              </a>

              <a
                href="#servicios"
                className="ceeb-btn-outline rounded-full px-6 py-4 text-center text-sm font-extrabold"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="ceeb-card p-5">
                <p className="text-3xl font-extrabold text-red-600">+10</p>
                <p className="mt-1 text-sm text-neutral-600">Años de experiencia</p>
              </div>
              <div className="ceeb-card p-5">
                <p className="text-3xl font-extrabold text-red-600">+100</p>
                <p className="mt-1 text-sm text-neutral-600">Trabajos realizados</p>
              </div>
              <div className="ceeb-card p-5">
                <p className="text-3xl font-extrabold text-red-600">100%</p>
                <p className="mt-1 text-sm text-neutral-600">Compromiso y respaldo</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-red-600/10 blur-2xl md:h-36 md:w-36" />
            <div className="absolute -right-2 bottom-0 h-28 w-28 rounded-full bg-black/10 blur-2xl md:h-40 md:w-40" />

            <div className="ceeb-card relative overflow-hidden p-8">
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="relative h-32 w-32 md:h-44 md:w-44">
                  <Image
                    src="/logo.png"
                    alt="Logo CEEB"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-black md:text-3xl">
                    CEEB
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
                    CONSTRUCCIONES Y ELECTRICOS ESPINOSA BALLESTEROS
                  </p>
                </div>

                <div className="w-full rounded-2xl bg-black px-6 py-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                    Nuestra promesa
                  </p>
                  <p className="mt-3 text-base leading-7 text-neutral-200">
                    Trabajo serio, soluciones confiables y resultados hechos para
                    durar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}