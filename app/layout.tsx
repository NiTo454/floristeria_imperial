import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Optimización de Fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ['normal', 'italic'],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Floristería Imperial | Exclusividad Botánica",
    template: "%s | Floristería Imperial"
  },
  description: "Arreglos florales de lujo, diseños exclusivos y atención premium para eventos en Tizayuca y alrededores.",
  keywords: ["floristería", "Tizayuca", "arreglos florales premium", "bodas", "eventos de lujo", "rosas"],
  authors: [{ name: "Syntaxis Labs" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Floristería Imperial",
    description: "Exclusividad botánica y diseños florales premium.",
    siteName: "Floristería Imperial",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // AQUÍ ESTÁ LA SOLUCIÓN AL ERROR ROJO: suppressHydrationWarning
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Script Anti-Parpadeo para el Modo Oscuro */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[--color-imperial-bg] text-[--color-imperial-text] selection:bg-[--color-imperial-accent] selection:text-[--color-imperial-bg] transition-colors duration-500`}>
        <Navbar />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
