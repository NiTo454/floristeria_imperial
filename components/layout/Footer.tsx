"use client";
import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[--color-imperial-black] pt-20 pb-10 border-t border-[--color-imperial-gold]/10 mt-20">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

        {/* Columna 1: Marca y Tono Serio */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-[--color-imperial-gold] tracking-widest uppercase">
            Floristería Imperial
          </h3>
          <p className="text-[--color-imperial-white]/40 font-light text-sm leading-relaxed">
            Elevando el arte floral a un estándar de realeza. Diseños exclusivos para momentos que merecen ser recordados para siempre.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-6">
          <h4 className="text-[--color-imperial-gold] text-xs tracking-[0.3em] uppercase">Explorar</h4>
          <ul className="text-[--color-imperial-white]/60 text-sm space-y-4 font-light">
            <li>Colecciones de Temporada</li>
            <li>Arreglos Personalizados</li>
            <li>Eventos y Galas</li>
          </ul>
        </div>

        {/* Columna 3: Contacto (Localizado) */}
        <div className="space-y-6">
          <h4 className="text-[--color-imperial-gold] text-xs tracking-[0.3em] uppercase">Boutique</h4>
          <ul className="text-[--color-imperial-white]/60 text-sm space-y-4 font-light">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[--color-imperial-gold]/50" />
              Tizayuca, Hidalgo, México
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[--color-imperial-gold]/50" />
              contacto@imperialflora.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[--color-imperial-gold]/50" />
              +52 (771) 000 0000
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[--color-imperial-white]/5 pt-10 text-center">
        <p className="text-[10px] tracking-[0.5em] text-[--color-imperial-white]/20 uppercase">
          &copy; {new Date().getFullYear()} Floristería Imperial — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
