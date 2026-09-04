import React, { useState } from 'react';
import { Boat } from '../types';
import { FLEET_DATA } from '../data/fleetData';
import { Users, Anchor, Volume2, Waves, Sparkles, Check, ArrowUpRight, ShieldCheck, X } from 'lucide-react';

interface FleetSectionProps {
  language: 'EN' | 'ES';
  onSelectBoatForBooking: (boatId: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  language,
  onSelectBoatForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [detailBoat, setDetailBoat] = useState<Boat | null>(null);
  const isEs = language === 'ES';

  const categories = ['All', 'Cruiser', 'Flybridge Yacht', 'Sport Console', 'Bowrider'];

  const filteredBoats =
    selectedCategory === 'All'
      ? FLEET_DATA
      : FLEET_DATA.filter((b) => b.category === selectedCategory);

  const getWhatsAppLink = (boat: Boat) => {
    const text = isEs
      ? `¡Hola Ocean Miami Boats! Me interesa alquilar el yate ${boat.name} ($${boat.hourlyRate}/hr). ¿Tienen disponibilidad para esta semana?`
      : `Hello Ocean Miami Boats! I am interested in chartering the ${boat.name} ($${boat.hourlyRate}/hr). Do you have availability this week?`;
    return `https://wa.me/17865779069?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative scroll-mt-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            {isEs ? 'Yates de Lujo y Lanchas Deportivas' : 'Luxury Yachts & Sport Cruisers'}
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl text-sm sm:text-base">
            {isEs
              ? 'Todas nuestras embarcaciones cuentan con capitanes certificados por la Guardia Costera (USCG), colchoneta flotante gigante incluida, y hielera con hielo.'
              : 'All vessels include licensed USCG Captains, Bluetooth surround sound, large ice cooler, and our signature 18ft giant floating lily pad mat.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? (isEs ? 'Todos' : 'All Fleet') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBoats.map((boat) => (
          <div
            key={boat.id}
            className="group relative rounded-2xl bg-[#0B0C12] border border-white/10 overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            {/* Top Boat Image Container */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0C14]">
              <img
                src={boat.image}
                alt={boat.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558747/576433059_18095923885833733_1786475457374650446_n.jpg';
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C12] via-black/20 to-transparent pointer-events-none" />

              {/* Tag & Category */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-[#00F0FF]/40 rounded text-[10px] font-bold uppercase tracking-wider text-[#00F0FF]">
                  {boat.category}
                </span>
                {boat.featured && (
                  <span className="px-2.5 py-1 bg-[#FF00FF]/80 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-white">
                    {isEs ? 'Más Popular' : 'Popular'}
                  </span>
                )}
              </div>

              {/* Price Pill */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-lg text-right">
                <span className="text-[10px] block text-gray-400 uppercase font-mono">
                  {isEs ? 'Por Hora' : 'Per Hour'}
                </span>
                <span className="text-lg font-black text-white">
                  ${boat.hourlyRate}
                  <span className="text-xs text-gray-400 font-normal">/hr</span>
                </span>
              </div>

              {/* Slogan Banner */}
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-xs font-semibold text-[#00F0FF] italic truncate">
                  "{boat.slogan}"
                </p>
              </div>
            </div>

            {/* Boat Content Info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-extrabold uppercase text-white tracking-wide">
                    {boat.name}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                    {boat.length}
                  </span>
                </div>

                <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
                  {isEs ? boat.spanishDescription : boat.description}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <Users className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>
                      <strong>{boat.capacity}</strong> {isEs ? 'Pasajeros máx.' : 'Guests max'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF00FF]" />
                    <span>{boat.crew}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <Volume2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span className="truncate">{boat.soundSystem}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <Waves className="w-3.5 h-3.5 text-[#FF00FF]" />
                    <span>{boat.engine}</span>
                  </div>
                </div>

                {/* Inclusions checklist */}
                <div className="space-y-1.5 mb-6 text-[11px] text-gray-400">
                  {boat.highlights.slice(0, 3).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#00F0FF] shrink-0" />
                      <span className="text-gray-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setDetailBoat(boat)}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{isEs ? 'Ver Fotos y Detalles' : 'View Details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectBoatForBooking(boat.id)}
                  className="w-full py-3 bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] hover:brightness-110 text-black font-extrabold rounded-lg text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Reservar' : 'Book Charter'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boat Detail Modal */}
      {detailBoat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0E15] border border-white/20 p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setDetailBoat(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#00F0FF] font-bold">
                {detailBoat.category} • {detailBoat.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                {detailBoat.name}
              </h3>
              <p className="text-sm font-semibold text-[#00F0FF] italic mt-0.5">
                "{detailBoat.slogan}"
              </p>
            </div>

            {/* Modal Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {detailBoat.gallery.map((img, i) => (
                <div key={i} className="h-32 sm:h-40 rounded-lg overflow-hidden border border-white/10 bg-[#0E101A]">
                  <img
                    src={img}
                    alt={`${detailBoat.name} view ${i}`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558747/576433059_18095923885833733_1786475457374650446_n.jpg';
                      }
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>

            {/* Modal Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              {isEs ? detailBoat.spanishDescription : detailBoat.description}
            </p>

            {/* Amenities Grid */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">
                {isEs ? 'Equipamiento & Amenidades Incluidas' : 'Onboard Features & Amenities'}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {detailBoat.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-200 flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs text-gray-400 block font-mono">
                  {isEs ? 'Tarifa por hora:' : 'Hourly Charter Rate:'}
                </span>
                <span className="text-2xl font-black text-white">
                  ${detailBoat.hourlyRate}
                  <span className="text-sm text-gray-400 font-normal">/hr</span>
                </span>
              </div>

              <div className="flex gap-3">
                <a
                  href={getWhatsAppLink(detailBoat)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    const id = detailBoat.id;
                    setDetailBoat(null);
                    onSelectBoatForBooking(id);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold uppercase text-xs tracking-wider rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  {isEs ? 'Reservar Esta Embarcación' : 'Book This Boat'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FleetSection;
