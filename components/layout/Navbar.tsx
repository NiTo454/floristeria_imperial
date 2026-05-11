"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 px-10 py-5 flex justify-between items-center bg-[--color-imperial-black]/60 backdrop-blur-md border-b border-[--color-imperial-gold]/10"
    >
      <Link href="/" className="flex items-center gap-4 group">
        {/* Usamos Image de Next.js para optimizar el logo sculpted text-less */}
        <Image
          src="/logo.png"
          alt="Floristería Imperial Logo Premium"
          width={60}
          height={60}
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <h1 className="font-serif text-2xl tracking-[0.3em] text-[--color-imperial-gold] uppercase">
          Imperial
        </h1>
      </Link>

      <ul className="flex gap-10 text-[10px] tracking-[0.4em] uppercase font-light text-[--color-imperial-white]/60">
        {['Inicio', 'Catálogo', 'Boutique', 'Contacto'].map((item) => (
          <motion.li
            key={item}
            whileHover={{ color: '#D4AF37', y: -2 }}
            className="cursor-pointer transition-all relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[--color-imperial-gold] transition-all group-hover:w-full" />
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
