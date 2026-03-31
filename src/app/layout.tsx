import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "CEEB | Construcciones y Eléctricos Espinosa Ballesteros",
  description:
    "Empresa de construcción y servicios eléctricos. Soluciones confiables, seguras y profesionales.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}