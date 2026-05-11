"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[--color-imperial-bg] flex flex-col items-center justify-center transition-colors duration-500">

      {/* CONTENEDOR DE IMÁGENES DINÁMICAS (CROSSFADE FOOLPROOF) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Capa Modo Claro: Rosas Claras (Tu enlace modificado a w=1920) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674986175088-2d7dda41f7f8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            opacity: "var(--hero-light-opacity)"
          }}
        />

        {/* Capa Modo Oscuro: Rosas Oscuras (Tu enlace modificado a w=1920) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1676475965096-701cb7f4c7e8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            opacity: "var(--hero-dark-opacity)"
          }}
        />

        {/* OVERLAY PROTECTOR: Efecto Cristal (Glassmorphism) para máxima legibilidad */}
        <div className="absolute inset-0 bg-[--color-imperial-bg]/70 backdrop-blur-md transition-colors duration-1000 ease-in-out" />

        {/* Viñeta sutil (Vignette) para enfocar la vista en el centro y fundir los bordes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-imperial-bg]/50 via-transparent to-[--color-imperial-bg] transition-colors duration-1000" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">

        {/* RESPLANDOR TRASERO DEL TEXTO (Glow): Garantiza contraste absoluto sin importar la foto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[60vh] bg-[--color-imperial-bg] blur-[100px] opacity-70 rounded-[100%] pointer-events-none transition-colors duration-1000" />

        <motion.span
          initial={{ opacity: 0, y: -20, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-[--color-imperial-accent] text-[10px] font-semibold uppercase mb-10 transition-colors duration-500"
        >
          Exclusividad Botánica
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 relative z-10"
        >
          <motion.div
            animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[--color-imperial-accent] blur-[70px] rounded-full transition-colors duration-500"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt="Logo Floristería Imperial"
              width={260}
              height={260}
              className="relative z-10 drop-shadow-2xl logo-adapt w-auto h-auto max-w-[220px] md:max-w-[280px]"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 text-5xl md:text-7xl font-serif text-[--color-imperial-text] leading-tight transition-colors duration-500 drop-shadow-xl"
          >
            Elegancia <br />
            <span className="text-[--color-imperial-accent] italic font-light transition-colors duration-500 drop-shadow-md">Natural</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 text-[--color-imperial-text]/90 font-medium leading-relaxed mb-12 max-w-lg text-sm md:text-base transition-colors duration-500 drop-shadow-sm"
        >
          Arreglos diseñados para quienes aprecian el arte de la floristería premium.
          Calidad real en cada detalle, creados con pasión y precisión.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: "var(--theme-accent)", color: "var(--theme-bg)" }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden px-12 py-4 border border-[--color-imperial-accent] bg-[--color-imperial-bg]/80 text-[--color-imperial-accent] uppercase tracking-[0.3em] text-[11px] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] backdrop-blur-md group"
        >
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          Explorar Colección
        </motion.button>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[--color-imperial-accent] text-[8px] uppercase tracking-[0.4em] opacity-70">
          Descubrir
        </span>
        <div className="w-px h-12 bg-[--color-imperial-accent]/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-[--color-imperial-accent] absolute top-0 left-0"
          />
        </div>
      </motion.div>

    </div>
  );
}
