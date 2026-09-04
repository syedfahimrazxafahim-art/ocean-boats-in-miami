import React from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle2, Music, Waves, Coffee } from 'lucide-react';

interface ReviewsSectionProps {
  language: 'EN' | 'ES';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const isEs = language === 'ES';

  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00F0FF]" />,
      title: isEs ? 'Capitanes Certificados USCG' : 'USCG Licensed Master Captains',
      desc: isEs
        ? 'Navega con total tranquilidad guiado por capitanes profesionales con años de experiencia en la bahía de Miami.'
        : 'Sail with complete confidence guided by Coast Guard-certified local captains who know every sandbar and island.',
    },
    {
      icon: <Waves className="w-6 h-6 text-[#FF00FF]" />,
      title: isEs ? 'Alfombra Flotante Gigante Gratis' : 'Free 18ft Giant Lily Pad Mat',
      desc: isEs
        ? 'Todos los charters incluyen sin costo adicional una alfombra flotante de 18 pies para tumbarse en el agua en el sandbar.'
        : 'Every charter includes our 18ft heavy-duty foam water mat to lounge, suntan, and play on crystal-clear waters.',
    },
    {
      icon: <Music className="w-6 h-6 text-[#00F0FF]" />,
      title: isEs ? 'Sonido Marino Bluetooth JL Audio' : 'High-Power Marine Bluetooth Audio',
      desc: isEs
        ? 'Conecta tu teléfono directamente al sistema de sonido premium del barco y sé el DJ de tu propio paseo en Miami.'
        : 'Connect your Spotify or Apple Music to our booming marine sound system and set the soundtrack for your day.',
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#FF00FF]" />,
      title: isEs ? '100% BYOB & Hielo de Cortesía' : '100% BYOB Friendly + Free Fresh Ice',
      desc: isEs
        ? 'Trae tus bebidas favoritas, cócteles, snacks o comida. Nosotros te proveemos la hielera marina con hielo fresco.'
        : 'Bring your favorite drinks, champagne, cocktails, and food. We supply the high-capacity marine cooler and ice.',
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          {isEs ? 'Momentos Grabados en el Alma' : 'Moments That Stay in Your Soul'}
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          {isEs
            ? 'Más de 500 grupos han celebrado cumpleaños, despedidas de soltera y días familiares con Ocean Miami Boats.'
            : 'Over 500 celebrations, bachelorettes, birthdays, and family vacations hosted on Miami waters.'}
        </p>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-2xl bg-[#0A0B12] border border-white/10 hover:border-[#00F0FF]/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#FF00FF] mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF00FF]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs text-gray-300 leading-relaxed mb-6 italic">
                "{isEs ? rev.spanishComment : rev.comment}"
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-[#00F0FF]"
              />
              <div className="overflow-hidden">
                <span className="font-bold text-white text-xs block truncate">{rev.name}</span>
                <span className="text-[10px] text-gray-400 font-mono block truncate">
                  {rev.occasion} • {rev.boatRented}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Ocean Miami Boats Banner */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0C0E1B] via-[#101222] to-[#0D0A18] border border-white/15 overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF00FF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">
              {isEs ? 'Todo Incluido Para Tu Día Perfecto' : 'Everything Included for Your Perfect Day'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-sm font-extrabold uppercase text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
