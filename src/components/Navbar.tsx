"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="container-ceeb">
          <div className="flex h-[64px] items-center justify-between md:h-[72px]">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden md:h-12 md:w-12">
                <Image
                  src="/logo.png"
                  alt="Logo CEEB"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="min-w-0 leading-tight">
                <p className="truncate text-[15px] font-extrabold text-white md:text-base">
                  CEEB
                </p>
                <p className="hidden text-xs text-neutral-300 md:block">
                  Construcciones y Eléctricos
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm font-bold transition ${
                      active ? "text-red-400" : "text-white hover:text-red-400"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-red-500 transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}

              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Contáctanos
              </a>
            </nav>

            <button
              type="button"
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
              onClick={() => setOpen(true)}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <aside
            className="absolute right-0 top-0 h-full w-[85%] max-w-[340px] border-l border-white/10 shadow-2xl"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="text-base font-bold text-white">Menú</span>

              <button
                type="button"
                aria-label="Cerrar menú"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
                onClick={() => setOpen(false)}
              >
                <FiX size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-5 py-5">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                      active
                        ? "bg-red-600/20 text-red-400"
                        : "text-white hover:bg-white/10"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="mt-4 rounded-full bg-red-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-red-700"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>

              <a
                href="mailto:contacto@ceeb.com"
                className="mt-2 rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-black"
                onClick={() => setOpen(false)}
              >
                Correo
              </a>
            </nav>
          </aside>
        </div>
      )}

      <div className="h-[64px] md:h-[72px]" />
    </>
  );
}