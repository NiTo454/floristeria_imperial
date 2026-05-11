import type { Metadata } from "next";
import "./globals.css"; // Tus estilos globales con Tailwind v4 configurado
import Navbar from "../components/layout/Navbar"; // <-- IMPORTA NAVBAR
import Footer from "../components/layout/Footer"; // <-- IMPORTA FOOTER

// Configuración de Metadata para SEO premium
export const metadata: Metadata = {
  title: "Floristería Imperial — Tizayuca",
  description: "Exclusividad botánica y diseños florales premium. Calidad real en cada detalle.",
  icons: {
    icon: "/favicon.png", // Asegúrate de tener un favicon.png en /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Carga de fuentes premium desde Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet" />
      </head>
      {/* Aplicamos el fondo negro mate y las clases de selección de Tailwind */}
      <body className="bg-[--color-imperial-black] selection:bg-[--color-imperial-gold] selection:text-[--color-imperial-black]">
        {/* UBICACIÓN DEL NAVBAR (Fixed en la parte superior) */}
        <Navbar />

        {/* CONTENIDO PRINCIPAL DINÁMICO */}
        {/* Le damos padding-top (pt-24) para que el Navbar fixed no tape el contenido */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* UBICACIÓN DEL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
