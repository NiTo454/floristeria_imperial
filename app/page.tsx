"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[--color-imperial-black] overflow-hidden flex flex-col items-center justify-center pt-20">

      {/* Fondo con textura muy sutil (rosas oscuras casi invisibles para dar profundidad) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none grayscale"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1920&auto=format&fit=crop')" }}
      />
      {/* Degradado para que los bordes sean negro puro */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[--color-imperial-black] opacity-80 pointer-events-none" />

      {/* Contenedor Principal Centrado */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">

        {/* Etiqueta Superior */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[--color-imperial-gold] tracking-[0.5em] text-[10px] font-semibold uppercase mb-8"
        >
          Exclusividad Botánica
        </motion.span>

        {/* Tu Logo Esculpido en el Centro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Brillo sutil detrás del logo */}
          <div className="absolute inset-0 bg-[--color-imperial-gold] blur-[80px] opacity-10 rounded-full" />

          <Image
            src="/logo.png"
            alt="Logo Floristería Imperial"
            width={280}
            height={280}
            className="relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            priority
          />
        </motion.div>

        {/* Título Principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif text-[--color-imperial-white] mb-6 leading-tight"
        >
          Elegancia <br />
          <span className="text-[--color-imperial-gold] italic font-light">Natural</span>
        </motion.h2>

        {/* Texto descriptivo en Blanco (para legibilidad) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[--color-imperial-white]/60 font-light leading-relaxed mb-12 max-w-lg text-sm md:text-base"
        >
          Arreglos diseñados para quienes aprecian el arte de la floristería premium.
          Calidad real en cada detalle, creados con pasión y precisión.
        </motion.p>

        {/* Botón Call to Action Dorado */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 border border-[--color-imperial-gold] bg-[--color-imperial-gold]/5 hover:bg-[--color-imperial-gold] text-[--color-imperial-gold] hover:text-[--color-imperial-black] uppercase tracking-[0.3em] text-[11px] font-bold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] backdrop-blur-sm"
        >
          Explorar Colección
        </motion.button>

      </div>

      {/* Indicador de Scroll hacia abajo (Opcional, un toque muy premium) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[--color-imperial-gold]/50 text-[8px] uppercase tracking-[0.3em]">Descubrir</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[--color-imperial-gold]/50 to-transparent" />
      </motion.div>

    </div>
  );
}
