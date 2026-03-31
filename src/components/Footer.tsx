import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black text-white">
      <div className="container-ceeb section-space-sm">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white">
                <Image
                  src="/logo.png"
                  alt="Logo CEEB"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <p className="text-lg font-extrabold">CEEB</p>
                <p className="text-sm text-neutral-400">
                  Construcción y eléctricos
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-400">
              CONSTRUCCIONES Y ELECTRICOS ESPINOSA BALLESTEROS ofrece soluciones
              confiables en construcción y servicios eléctricos con enfoque
              profesional y atención directa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">Navegación</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
              <Link href="/" className="hover:text-red-400">
                Inicio
              </Link>
              <Link href="/nosotros" className="hover:text-red-400">
                Nosotros
              </Link>
              <Link href="/servicios" className="hover:text-red-400">
                Servicios
              </Link>
              <Link href="/galeria" className="hover:text-red-400">
                Galería
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">Contacto</h3>
            <div className="mt-4 space-y-4 text-sm text-neutral-400">
              <p className="flex items-start gap-3">
                <FiPhone className="mt-1 text-red-400" />
                <span>+57 304 370 1713</span>
              </p>
              <p className="flex items-start gap-3">
                <FiMail className="mt-1 text-red-400" />
                <span>contacto@ceeb.com</span>
              </p>
              <p className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-red-400" />
                <span>Colombia</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">Acción rápida</h3>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href="https://wa.me/573043701713"
                target="_blank"
                rel="noreferrer"
                className="btn-red px-5 py-3.5 text-sm"
              >
                WhatsApp
              </a>

              <a
                href="mailto:contacto@ceeb.com"
                className="btn-outline border-white px-5 py-3.5 text-sm text-white hover:bg-white hover:text-black"
              >
                Correo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} CEEB - Construcciones y Eléctricos
          Espinosa Ballesteros. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}