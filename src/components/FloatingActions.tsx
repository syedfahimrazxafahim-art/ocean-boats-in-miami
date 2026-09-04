import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  language: 'EN' | 'ES';
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  language,
  onOpenBooking,
}) => {
  const isEs = language === 'ES';
  const whatsappUrl = `https://wa.me/17865779069?text=${encodeURIComponent(
    isEs
      ? '¡Hola Ocean Miami Boats! Quisiera consultar disponibilidad y precios para alquilar un bote hoy o este fin de semana.'
      : 'Hello Ocean Miami Boats! I would like to inquire about boat charter availability and rates today or this weekend.'
  )}`;

  return (
    <>
      {/* Floating Action Button (Desktop & Mobile) - Neon Pulsing WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Instant WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
          <MessageCircle className="w-5 h-5 text-black fill-black" />
          <span className="hidden sm:inline font-black">
            {isEs ? 'Chat WhatsApp' : 'Instant WhatsApp'}
          </span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Bar for quick access */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3">
        <a
          href="tel:+17865779069"
          className="flex-1 py-2.5 rounded-lg bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>{isEs ? 'Llamar' : 'Call Us'}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{isEs ? 'Cotizar' : 'Book'}</span>
        </button>
      </div>
    </>
  );
};

export default FloatingActions;
