"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Catálogo', href: '/catalogo' },
  { name: 'Boutique', href: '/boutique' },
  { name: 'Contacto', href: '/contacto' },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detectar el tema al cargar
  useEffect(() => {
    setMounted(true);
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  // Bloquear el scroll de la página cuando el menú móvil está abierto (Detalle Premium)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 w-full z-50 px-6 md:px-10 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'py-3 md:py-4 bg-[--color-imperial-bg]/90 backdrop-blur-xl border-b border-[--color-imperial-accent]/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'py-5 md:py-8 bg-gradient-to-b from-[--color-imperial-bg] to-transparent border-b border-transparent'
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.png"
            alt="Floristería Imperial Logo"
            width={50}
            height={50}
            className="logo-adapt w-8 h-8 sm:w-10 sm:h-[50px] shrink-0 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
            priority
          />
          <h1 className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.2em] md:tracking-[0.3em] text-[--color-imperial-accent] uppercase transition-colors duration-500 drop-shadow-sm group-hover:text-[--color-imperial-text]">
            FLORISTERÍA IMPERIAL
          </h1>
        </Link>

        {/* CONTROLES DERECHOS */}
        <div className="flex items-center gap-4 md:gap-10 z-50">
          {/* Menú de Escritorio */}
          <ul className="hidden md:flex gap-8 lg:gap-12 text-[10px] tracking-[0.4em] uppercase font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.li
                  key={item.name}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={`block py-2 transition-colors duration-300 ${isActive ? 'text-[--color-imperial-accent]' : 'text-[--color-imperial-text]/70 hover:text-[--color-imperial-accent]'}`}
                  >
                    {item.name}
                  </Link>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[--color-imperial-accent] transition-all duration-500 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </motion.li>
              );
            })}
          </ul>

          {/* Botón de Modo Oscuro / Claro */}
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full border border-[--color-imperial-accent]/30 text-[--color-imperial-accent] hover:bg-[--color-imperial-accent] hover:text-[--color-imperial-bg] transition-colors duration-500 flex items-center justify-center shrink-0 shadow-sm"
              aria-label="Cambiar tema"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          )}

          {/* Botón Menú Móvil (Hamburguesa / Cerrar) */}
          <button
            type="button"
            className="md:hidden text-[--color-imperial-accent] p-2 cursor-pointer touch-manipulation shrink-0 hover:scale-110 transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* OVERLAY DEL MENÚ MÓVIL (Animado con Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[--color-imperial-bg]/95 flex flex-col items-center justify-center"
          >
            {/* Glow effect en el centro del menú móvil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[--color-imperial-accent] rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <ul className="flex flex-col gap-10 text-center">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }} // Animación en cascada
                  className="overflow-hidden"
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col items-center gap-2 py-2"
                    onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                  >
                    <span className="text-[10px] font-serif italic text-[--color-imperial-accent] opacity-70 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </span>
                    <span className="text-xl tracking-[0.5em] uppercase font-light text-[--color-imperial-text] group-hover:text-[--color-imperial-accent] transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Decoración extra para el menú móvil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex flex-col items-center"
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-[--color-imperial-accent] to-transparent mb-4" />
              <span className="text-[9px] tracking-[0.4em] text-[--color-imperial-accent] uppercase font-medium">
                Floristería Imperial
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
