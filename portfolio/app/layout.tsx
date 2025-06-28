import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter ({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Emiliano Garin",
  description: "Este es mi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={inter.className}>
        <Navbar />{/** navbar de la pagina, contiene el logo y los iconos de las redes sociales */}
        {children}
        <Navigation />{/** barra de navegacion */}
      </body>
    </html>
  );
}
