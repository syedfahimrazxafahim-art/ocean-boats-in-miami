import React, { useState } from 'react';
import { DESTINATIONS_DATA, CHARTER_PACKAGES } from '../data/experienceData';
import { Destination, CharterPackage } from '../types';
import { MapPin, Clock, Compass, CheckCircle, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

interface ExperiencesSectionProps {
  language: 'EN' | 'ES';
  onBookPackage: (pkg: CharterPackage) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  language,
  onBookPackage,
}) => {
  const [activeTab, setActiveTab] = useState<'destinations' | 'packages'>('destinations');
  const isEs = language === 'ES';

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative">
      {/* Glow Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header with authentic quotes */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          {isEs ? 'Descubre Miami Desde el Agua' : 'Experience Miami from the Water'}
        </h2>
        <p className="text-gray-300 mt-3 text-base italic">
          {isEs
            ? '"Cambia tu rutina por una vista como esta. Hay momentos que quedan grabados en el alma."'
            : '"Trade your daily routine for views like this. Create memories that stay in your soul forever."'}
        </p>

        {/* Tab Toggle */}
        <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 mt-8">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'destinations'
                ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black shadow-lg font-extrabold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {isEs ? 'Bancos de Arena e Islas' : 'Sandbars & Island Spots'}
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black shadow-lg font-extrabold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {isEs ? 'Tarifas y Paquetes de Horas' : 'Charter Rates & Hours'}
          </button>
        </div>
      </div>

      {/* Destinations View */}
      {activeTab === 'destinations' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              className="group relative rounded-2xl bg-[#090A10] border border-white/10 overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0C14]">
                <img
                  src={dest.image}
                  alt={dest.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558739/579649465_18095923906833733_9212740238130069431_n.jpg';
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A10] via-black/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest text-[#00F0FF] border border-[#00F0FF]/30 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {dest.timeFromDock}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gray-300 uppercase tracking-widest font-mono block">
                    {dest.vibe}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
                    {isEs ? dest.spanishTitle : dest.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {isEs ? dest.spanishDescription : dest.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {dest.activities.map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <Sparkles className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-gray-400">
                    {isEs ? 'Recomendado:' : 'Recommended:'}{' '}
                    <strong className="text-white">{dest.recommendedDuration}</strong>
                  </span>
                  <a
                    href={`https://wa.me/17865779069?text=${encodeURIComponent(
                      isEs
                        ? `¡Hola Ocean Miami Boats! Me gustaría hacer un charter hacia ${dest.spanishTitle}.`
                        : `Hello Ocean Miami Boats! I'd love to book a boat charter to ${dest.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-[#00F0FF] uppercase tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <span>{isEs ? 'Consultar Ruta' : 'Inquire Route'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Packages View */}
      {activeTab === 'packages' && (
        <div id="packages" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHARTER_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#111322] to-[#0A0B14] border-2 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.25)]'
                  : 'bg-[#0A0B12] border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                  {isEs ? 'MÁS RESERVADO' : 'MOST POPULAR'}
                </div>
              )}

              <div>
                <span className="text-xs font-mono uppercase text-[#00F0FF] tracking-widest font-bold block mb-1">
                  {pkg.duration}
                </span>
                <h3 className="text-lg font-black uppercase text-white mb-2 leading-tight">
                  {isEs ? pkg.spanishTitle : pkg.title}
                </h3>

                <div className="my-4 pb-4 border-b border-white/10">
                  <span className="text-[10px] text-gray-400 block uppercase font-mono">
                    {isEs ? 'Desde' : 'Starting at'}
                  </span>
                  <span className="text-3xl font-black text-white">
                    ${pkg.basePrice}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">
                    ({pkg.hours} hrs)
                  </span>
                </div>

                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  {isEs ? pkg.spanishDescription : pkg.description}
                </p>

                <div className="space-y-2 mb-6">
                  {pkg.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onBookPackage(pkg)}
                className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold hover:brightness-110 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/15'
                }`}
              >
                <span>{isEs ? 'Seleccionar Paquete' : 'Select Package'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ExperiencesSection;
