import React from 'react';
import { motion } from 'motion/react';
import { Anchor, ShieldCheck, Sparkles, Star, ArrowRight, Compass, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  language: 'EN' | 'ES';
  onOpenBooking: () => void;
  onExploreFleet: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenBooking,
  onExploreFleet,
}) => {
  const isEs = language === 'ES';

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-10">
      {/* Background Neon Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00F0FF]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FF00FF]/10 rounded-full blur-[140px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 xl:col-span-7 pr-0 lg:pr-6"
        >
          {/* Slogan & Title */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tight uppercase mb-6">
            {isEs ? (
              <>
                EXPERIMENTA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#E040FB] to-[#FF00FF]">
                  LIBERTAD TOTAL
                </span>
              </>
            ) : (
              <>
                EXPERIENCE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#E040FB] to-[#FF00FF]">
                  PURE FREEDOM
                </span>
              </>
            )}
          </h1>

          {/* Authentic Quotation from Business Flyer */}
          <div className="mb-4 pl-3 border-l-2 border-[#00F0FF]">
            <p className="text-sm font-semibold tracking-wide text-[#00F0FF] italic">
              {isEs
                ? '"No es solo un paseo... es una experiencia SOBRE El Agua"'
                : '"Not just a boat ride... an unforgettable experience ON the water"'}
            </p>
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {isEs
              ? 'Navega las aguas turquesas de Biscayne Bay, Star Island y el banco de Haulover con la mayor comodidad. Yates de lujo con capitán certificado, alfombra flotante gigante y sonido JL Audio de alta fidelidad.'
              : 'Navigate the vibrant waters of Biscayne Bay in unparalleled style. From Haulover sandbar parties to sunset celebrity mansion cruises, your private Miami yacht adventure starts here.'}
          </p>

          {/* Key Inclusions Micro-List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-semibold text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
              <span>{isEs ? 'Capitán USCG' : 'USCG Captain'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF00FF]" />
              <span>{isEs ? 'Alfombra Flotante Gratis' : 'Free Floating Mat'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
              <span>{isEs ? '100% BYOB Permitido' : '100% BYOB Friendly'}</span>
            </div>
          </div>

          {/* Action Buttons (Strictly styled from Design HTML) */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreFleet}
              className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold rounded-lg uppercase text-xs sm:text-sm tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isEs ? 'Ver La Flota' : 'Browse The Fleet'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-white/5 border border-white/15 hover:bg-white/10 text-white font-bold rounded-lg uppercase text-xs sm:text-sm tracking-widest transition-all cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#00F0FF]" />
              <span>{isEs ? 'Cotizar por WhatsApp' : 'Reserve Charter'}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Featured Yacht Showcase Card & Rating Badge (From Theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center"
        >
          {/* Neon Backdrop Glow */}
          <div className="absolute w-[450px] h-[320px] bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] rounded-[40px] opacity-20 blur-3xl rotate-12 pointer-events-none" />

          {/* Main Card */}
          <div className="relative w-full h-[460px] sm:h-[500px] bg-[#111] rounded-2xl border border-white/15 shadow-2xl overflow-hidden group">
            {/* Background Boat Image */}
            <img
              src="https://res.cloudinary.com/fzobzdco/image/upload/v1788558747/576433059_18095923885833733_1786475457374650446_n.jpg"
              alt="Ocean Miami Boats Charter"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Top Tag */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#00F0FF] border border-[#00F0FF]/40">
                {isEs ? 'Palacio Flotante' : 'Featured Luxury Cruiser'}
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                    Sea Ray 330 Sundancer
                  </h3>
                  <p className="text-[#00F0FF] font-mono text-xs uppercase tracking-wider mt-1">
                    34ft Cruiser • Up to 12 Guests • A/C Suite
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-mono">
                    {isEs ? 'Tarifa desde' : 'Starting at'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    $195
                    <span className="text-xs font-normal text-gray-400">/hr</span>
                  </span>
                </div>
              </div>

              {/* Quick Feature Pills */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#00F0FF]" />
                  {isEs ? 'Hasta 12 pasajeros' : 'Up to 12 guests'}
                </span>
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-[#FF00FF]" />
                  {isEs ? 'Miami Beach Marina' : 'Miami Beach Marina'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
