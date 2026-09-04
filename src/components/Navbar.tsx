import React, { useState } from 'react';
import { OceanLogo } from './OceanLogo';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';

interface NavbarProps {
  language: 'EN' | 'ES';
  setLanguage: (lang: 'EN' | 'ES') => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isEs = language === 'ES';

  const navLinks = [
    { label: isEs ? 'Inicio' : 'Home', href: '#home' },
    { label: isEs ? 'Servicios' : 'Services', href: '#services' },
    { label: isEs ? 'Galería' : 'Gallery', href: '#gallery' },
    { label: isEs ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Company Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            id="header-brand-link"
          >
            <OceanLogo size="sm" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#00F0FF] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00F0FF] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Language Toggle & Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isEs ? 'Cambiar idioma' : 'Switch language'}
              id="header-lang-btn"
            >
              <Globe className="w-3 h-3 text-[#00F0FF]" />
              <span>{language === 'EN' ? 'ES' : 'EN'}</span>
            </button>

            {/* Call to Action Button for Contact (No Quote Button) */}
            <button
              onClick={handleContactClick}
              className="px-4 py-2 bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold uppercase text-xs tracking-wider rounded-full hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
              id="header-contact-btn"
            >
              {isEs ? 'Contacto' : 'Contact'}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
              className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-[#00F0FF] cursor-pointer"
              id="header-mobile-lang-btn"
            >
              {language}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-300 hover:text-white rounded cursor-pointer"
              aria-label="Toggle menu"
              id="header-mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-white/10 bg-black/95 px-5 py-4 space-y-3"
          id="header-mobile-menu"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-[#00F0FF] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleContactClick}
              className="w-full py-2.5 bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold uppercase text-xs tracking-wider rounded-lg shadow text-center cursor-pointer"
            >
              {isEs ? 'Contacto' : 'Contact'}
            </button>
            <a
              href="https://wa.me/17865779069"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold uppercase text-xs tracking-wider rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
