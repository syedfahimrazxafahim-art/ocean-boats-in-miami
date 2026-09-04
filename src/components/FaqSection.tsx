import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

interface FaqSectionProps {
  language: 'EN' | 'ES';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const isEs = language === 'ES';

  const faqs = [
    {
      qEn: 'Can we bring our own drinks, alcohol, and food (BYOB)?',
      qEs: '¿Podemos llevar nuestras propias bebidas, alcohol y comida (BYOB)?',
      aEn: 'Yes, 100%! You are welcome to bring any alcohol, wine, beer, hard seltzers, mixers, and food/snacks of your choice. We provide a large marine cooler stocked with complimentary fresh ice and bottled water.',
      aEs: '¡Sí, 100%! Puedes traer todo tipo de bebidas alcohólicas, cócteles, cerveza, vino y snacks o comida. Nosotros te proporcionamos una hielera marina grande con hielo fresco de cortesía y agua embotellada.',
    },
    {
      qEn: 'Is the licensed USCG Captain included in the rental?',
      qEs: '¿El capitán certificado por la Guardia Costera (USCG) está incluido?',
      aEn: 'Yes, every Ocean Miami Boats charter includes a licensed, highly experienced USCG Captain so you and your guests can fully relax, drink, dance, and enjoy the sights without any navigation stress.',
      aEs: '¡Sí! Todos los alquileres de Ocean Miami Boats cuentan con un capitán con licencia de la Guardia Costera de EE. UU. (USCG), para que tú y tus invitados puedan relajarse, beber y divertirse sin preocupaciones.',
    },
    {
      qEn: 'Is the giant 18ft floating water mat really included for free?',
      qEs: '¿La alfombra flotante gigante de 18 pies está incluida gratis?',
      aEn: 'Absolutely! Our heavy-duty 18-foot foam lily pad mat is provided on every charter at no extra charge. We unroll it as soon as we anchor at Haulover Sandbar, Nixon Sandbar, or Monument Island.',
      aEs: '¡Totalmente gratis! Nuestra alfombra flotante gigante de 18 pies viene incluida en todos los paseos. La desenrollamos tan pronto fondeamos en el banco de arena o en la isla.',
    },
    {
      qEn: 'What is the policy for Miami weather or rain?',
      qEs: '¿Cuál es la política en caso de mal clima o lluvia en Miami?',
      aEn: 'Miami is famous for quick, passing 15-minute showers followed by bright sunshine. However, if the USCG declares unsafe marine conditions or heavy sustained thunderstorms, we offer 100% free rescheduling to any available day or time.',
      aEs: 'En Miami suele haber lloviznas rápidas que pasan en 15 minutos dando paso al sol. No obstante, en caso de tormentas severas o advertencias marítimas de la Guardia Costera, reagendamos tu paseo sin penalización.',
    },
    {
      qEn: 'Where is the departure marina and boarding dock?',
      qEs: '¿Dónde está el punto de salida y muelle de embarque?',
      aEn: 'Our primary boarding docks are located at Miami Beach Marina and designated Downtown Miami / Biscayne Bay marina docks with easy parking, Uber drop-off zones, and secure boarding.',
      aEs: 'Nuestros puntos principales de embarque están ubicados en Miami Beach Marina y muelles autorizados de Biscayne Bay / Downtown Miami con fácil acceso y estacionamiento.',
    },
    {
      qEn: 'How can we play our own music on board?',
      qEs: '¿Cómo ponemos nuestra propia música a bordo?',
      aEn: 'Every vessel is equipped with a high-end JL Audio or Fusion marine sound system with direct Bluetooth connectivity. Anyone in your party can connect their phone and DJ the trip.',
      aEs: 'Todas las embarcaciones cuentan con sonido marino premium JL Audio con conexión Bluetooth instantánea. Cualquiera de tu grupo puede conectar su celular y poner su música favorita.',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Marina Info & Contact Details */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
            {isEs ? 'Contacto y Preguntas Frecuentes' : 'Contact & Charter FAQ'}
          </h2>
          <p className="text-sm text-gray-300 mb-8 leading-relaxed">
            {isEs
              ? '¿Tienes alguna duda adicional sobre tu alquiler de bote en Miami? Contáctanos directamente por WhatsApp o llámanos las 24 horas.'
              : 'Have any questions about itinerary planning, bachelorette decorations, or custom hours? Contact our Miami charter team directly.'}
          </p>

          {/* Quick Contact Cards */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#00F0FF]/15 text-[#00F0FF]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono text-gray-400 block">
                  {isEs ? 'Muelle de Embarque' : 'Departure Marina'}
                </span>
                <span className="font-bold text-white text-sm">Miami Beach Marina & Biscayne Bay</span>
                <span className="text-xs text-gray-400 block mt-0.5">Miami, Florida 33139</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono text-gray-400 block">
                  {isEs ? 'Llamadas & WhatsApp' : 'Phone & WhatsApp'}
                </span>
                <a
                  href="tel:+17865779069"
                  className="font-bold text-white text-sm hover:text-[#00F0FF] block"
                >
                  +1 (786) 577-9069
                </a>
                <span className="text-xs text-gray-400 block">Alt: (786) 397-5053</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#FF00FF]/15 text-[#FF00FF]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono text-gray-400 block">
                  Email
                </span>
                <a
                  href="mailto:oceanmiamibooking@gmail.com"
                  className="font-bold text-white text-sm hover:text-[#FF00FF]"
                >
                  oceanmiamibooking@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0A0B12] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {isEs ? faq.qEs : faq.qEn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00F0FF] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {isEs ? faq.aEs : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
