"use client";
import { MapPin } from 'lucide-react';
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram, IoIosMail, IoIosCall } from "react-icons/io";
import Link from 'next/link';
// 1. IMPORTAMOS 'Variants' de framer-motion para arreglar el error de TypeScript
import { motion, Variants } from 'framer-motion';

const Footer = () => {
  // 2. Le decimos a TypeScript que esto es exactamente del tipo Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <footer className="relative bg-[--color-imperial-bg] pt-24 pb-10 mt-20 transition-colors duration-500 overflow-hidden">
      {/* 3. APLICAMOS SUGERENCIAS DE TAILWIND: h-px y bg-linear-to-r */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-[--color-imperial-accent]/40 to-transparent" />

      {/* APLICAMOS SUGERENCIAS DE TAILWIND: w-150 y h-75 en lugar de corchetes pesados */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[--color-imperial-accent] blur-[150px] opacity-[0.03] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24"
      >

        {/* Columna 1: Marca y Redes */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="font-serif text-2xl text-[--color-imperial-accent] tracking-widest uppercase transition-colors duration-500">
            Floristería Imperial
          </h3>
          <p className="text-[--color-imperial-text]/60 font-light text-sm leading-relaxed">
            Elevando el arte floral a un estándar de realeza. Diseños exclusivos para momentos que merecen ser recordados para siempre.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a whileHover={{ y: -3 }} href="https://www.facebook.com/profile.php?id=100063663367507" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[--color-imperial-accent]/20 flex items-center justify-center text-[--color-imperial-text]/70 hover:bg-[--color-imperial-accent] hover:text-[--color-imperial-bg] transition-all duration-300 shadow-sm">
              <FaFacebook size={18} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/boutique_floristeriaimperial?igsh=Mm5tdGxqZmsxZ3Yx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[--color-imperial-accent]/20 flex items-center justify-center text-[--color-imperial-text]/70 hover:bg-[--color-imperial-accent] hover:text-[--color-imperial-bg] transition-all duration-300 shadow-sm">
              <IoLogoInstagram size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="https://www.messenger.com/t/1096827330331354/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[--color-imperial-accent]/20 flex items-center justify-center text-[--color-imperial-text]/70 hover:bg-[--color-imperial-accent] hover:text-[--color-imperial-bg] transition-all duration-300 shadow-sm">
              <FaFacebookMessenger size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Columna 2: Enlaces Rápidos */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h4 className="text-[--color-imperial-accent] text-xs tracking-[0.3em] uppercase transition-colors duration-500">Explorar</h4>
          <ul className="text-[--color-imperial-text]/70 text-sm space-y-5 font-light">
            <li className="relative group w-fit">
              <Link href="/catalogo" className="hover:text-[--color-imperial-accent] cursor-pointer transition-colors duration-300 block">Colecciones Exclusivas</Link>
              {/* Cambiado a h-px para cumplir con Tailwind */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[--color-imperial-accent] transition-all duration-500 ease-out group-hover:w-full" />
            </li>
            <li className="relative group w-fit">
              <Link href="/boutique" className="hover:text-[--color-imperial-accent] cursor-pointer transition-colors duration-300 block">Eventos y Galas</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[--color-imperial-accent] transition-all duration-500 ease-out group-hover:w-full" />
            </li>
            <li className="relative group w-fit">
              <Link href="/contacto" className="hover:text-[--color-imperial-accent] cursor-pointer transition-colors duration-300 block">Cuidado Floral</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[--color-imperial-accent] transition-all duration-500 ease-out group-hover:w-full" />
            </li>
          </ul>
        </motion.div>

        {/* Columna 3: Contacto (Llamada y WhatsApp integrados) */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h4 className="text-[--color-imperial-accent] text-xs tracking-[0.3em] uppercase transition-colors duration-500">Contacto</h4>
          <ul className="text-[--color-imperial-text]/70 text-sm space-y-5 font-light">
            <li className="flex items-start gap-4 group">
              <MapPin size={20} className="text-[--color-imperial-accent] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <a href="https://www.google.com/maps/search/?api=1&query=Floristería+Imperial+Tizayuca+Hidalgo" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-imperial-accent] transition-colors leading-relaxed">
                Tizayuca, Hidalgo, México
              </a>
            </li>

            <li className="flex items-center gap-4 group">
              <IoIosCall size={20} className="text-[--color-imperial-accent] shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="tel:+525549930353" className="hover:text-[--color-imperial-accent] transition-colors font-medium">
                +52 55 4993 0353 (Llamar)
              </a>
            </li>

            <li className="flex items-center gap-4 group">
              <IoLogoWhatsapp size={20} className="text-[--color-imperial-accent] shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="https://wa.me/525549930353" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-imperial-accent] transition-colors">
                Chatear por WhatsApp
              </a>
            </li>

            <li className="flex items-center gap-4 group">
              <IoIosMail size={20} className="text-[--color-imperial-accent] shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="mailto:javier.imperial@hotmail.com" className="hover:text-[--color-imperial-accent] transition-colors">
                javier.imperial@hotmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-[--color-imperial-text]/10 pt-8 px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-[9px] tracking-[0.4em] text-[--color-imperial-text]/40 uppercase">
          © {new Date().getFullYear()} Floristería Imperial — Todos los derechos reservados.
        </p>
        <p className="text-[9px] tracking-[0.3em] text-[--color-imperial-text]/30 uppercase font-light">
          Creado por <a href="#" target="_blank" rel="noopener noreferrer" className="text-[--color-imperial-accent] font-medium transition-colors duration-500 hover:opacity-70">Syntaxis Labs</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
