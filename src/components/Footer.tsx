import React from 'react';
import { OceanLogo } from './OceanLogo';
import { MessageCircle, Phone, Mail, Instagram, Facebook, ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'EN' | 'ES';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isEs = language === 'ES';

  return (
    <footer className="w-full border-t border-white/10 bg-black text-white relative z-20">
      {/* Upper Footer with brand info & links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <OceanLogo size="md" showSubtitle={true} />
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed mt-4">
              {isEs
                ? 'Navega el lujo, siente Miami. Alquiler de botes y yates privados para familias, cumpleaños y despedidas de soltera con capitán certificado USCG.'
                : 'Miami’s premier luxury boat rental and yacht charter service. Private Biscayne Bay sandbars, celebrity estates, and sunset skylines.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#00F0FF] font-semibold italic">
              <span>"Nuestros Yates son un Palacio Flotante"</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
              {isEs ? 'Explorar' : 'Explore'}
            </p>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#00F0FF] transition-colors">
                  {isEs ? 'Servicios & Flota' : 'Services & Fleet'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#00F0FF] transition-colors">
                  {isEs ? 'Galería de Fotos' : 'Photo Gallery'}
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-[#00F0FF] transition-colors">
                  {isEs ? 'Simulador 3D' : '3D Boat Tour'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#00F0FF] transition-colors">
                  {isEs ? 'Opiniones de Clientes' : 'Client Reviews'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00F0FF] transition-colors">
                  {isEs ? 'Contacto & FAQ' : 'Contact & FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
              {isEs ? 'Destinos' : 'Hotspots'}
            </p>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <span className="hover:text-[#FF00FF] cursor-default">Haulover Sandbar</span>
              </li>
              <li>
                <span className="hover:text-[#FF00FF] cursor-default">Star Island Mansions</span>
              </li>
              <li>
                <span className="hover:text-[#FF00FF] cursor-default">Nixon Beach Sandbar</span>
              </li>
              <li>
                <span className="hover:text-[#FF00FF] cursor-default">Monument Island</span>
              </li>
              <li>
                <span className="hover:text-[#FF00FF] cursor-default">Miami River Night Lights</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
              {isEs ? 'Contacto Directo' : 'Direct Booking'}
            </p>
            <div className="space-y-2.5 text-xs text-gray-300">
              <a
                href="https://wa.me/17865779069"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +1 786-577-9069</span>
              </a>
              <a
                href="tel:+17865779069"
                className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>(786) 577-9069 / (786) 397-5053</span>
              </a>
              <a
                href="mailto:oceanmiamibooking@gmail.com"
                className="flex items-center gap-2 hover:text-[#FF00FF] transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-[#FF00FF]" />
                <span className="truncate">oceanmiamibooking@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#00F0FF]" />
                <span>Miami Beach Marina, FL</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/oceanmiamiboats/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FF00FF] hover:border-[#FF00FF] transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/oceanmiami"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/17865779069"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Bar Matching Design HTML Footer Exactly */}
      <div className="px-4 sm:px-10 py-6 border-t border-white/10 bg-[#030303] flex flex-col md:flex-row items-center justify-between gap-4 z-50">
        <div className="flex flex-wrap items-center gap-6 sm:gap-12">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Location</p>
            <p className="text-xs font-medium text-gray-300">Miami Beach Marina, FL</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">WhatsApp</p>
            <a
              href="https://wa.me/17865779069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#00F0FF] hover:underline"
            >
              +1 786-577-9069
            </a>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Follow Us</p>
            <div className="flex gap-2 mt-1">
              <a
                href="https://www.instagram.com/oceanmiamiboats/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 rounded-full bg-white/20 hover:bg-[#FF00FF] transition-colors flex items-center justify-center text-[9px]"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/oceanmiami"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 rounded-full bg-white/20 hover:bg-[#00F0FF] transition-colors flex items-center justify-center text-[9px]"
              >
                FB
              </a>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-right">
          © {new Date().getFullYear()} Ocean Miami Boats • Premium Charter Services Miami, FL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
