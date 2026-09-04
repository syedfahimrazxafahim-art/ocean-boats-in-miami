import React, { useState } from 'react';
import { FLEET_DATA } from '../data/fleetData';
import { BookingFormState, Boat } from '../types';
import { Calendar, Clock, Users, Sparkles, MessageCircle, Phone, Check, X, ShieldCheck } from 'lucide-react';

interface BookingWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'EN' | 'ES';
  initialBoatId?: string;
  initialHours?: number;
}

export const BookingWizardModal: React.FC<BookingWizardModalProps> = ({
  isOpen,
  onClose,
  language,
  initialBoatId = 'sea-ray-sundancer',
  initialHours = 4,
}) => {
  const isEs = language === 'ES';

  const [booking, setBooking] = useState<BookingFormState>({
    boatId: initialBoatId,
    charterDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'afternoon',
    durationHours: initialHours,
    guestsCount: 8,
    occasion: 'Birthday Celebration',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    notes: '',
    includeJetSki: false,
    includeWaterMat: true,
    includeChampagne: false,
  });

  if (!isOpen) return null;

  const currentBoat = FLEET_DATA.find((b) => b.id === booking.boatId) || FLEET_DATA[0];

  // Pricing Calculation
  const boatSubtotal = currentBoat.hourlyRate * booking.durationHours;
  const jetSkiCost = booking.includeJetSki ? 180 : 0;
  const champagneCost = booking.includeChampagne ? 120 : 0;
  const totalEstimate = boatSubtotal + jetSkiCost + champagneCost;

  const timeSlotLabels = {
    morning: { en: 'Morning Sunshine (10:00 AM - 2:00 PM)', es: 'Mañana Soleada (10:00 AM - 2:00 PM)' },
    afternoon: { en: 'Afternoon Prime (2:30 PM - 6:30 PM)', es: 'Tarde Prime Sandbar (2:30 PM - 6:30 PM)' },
    sunset: { en: 'Sunset & Skyline Lights (7:00 PM - 9:30 PM)', es: 'Atardecer y Luces Neón (7:00 PM - 9:30 PM)' },
    night: { en: 'Night Sky Bay Cruise (8:30 PM - 11:30 PM)', es: 'Paseo Nocturno por la Bahía (8:30 PM - 11:30 PM)' },
  };

  const occasions = [
    { en: 'Birthday Celebration', es: 'Celebración de Cumpleaños' },
    { en: 'Bachelorette / Bachelor Party', es: 'Despedida de Soltera / Soltero' },
    { en: 'Family Gathering & Kids Day', es: 'Paseo Familiar y Niños' },
    { en: 'Friends Sandbar Hangout', es: 'Día con Amigos en el Sandbar' },
    { en: 'Romantic Sunset Date / Proposal', es: 'Cita Romántica / Pedida de Mano' },
  ];

  const handleWhatsAppBooking = () => {
    const slotText = isEs ? timeSlotLabels[booking.timeSlot].es : timeSlotLabels[booking.timeSlot].en;
    const addOnsList: string[] = [];
    if (booking.includeWaterMat) addOnsList.push(isEs ? 'Alfombra de Agua Gigante (Gratis)' : 'Giant Floating Water Mat (Free)');
    if (booking.includeJetSki) addOnsList.push(isEs ? 'Jet Ski Tandem ($180)' : 'Jet Ski Rental ($180)');
    if (booking.includeChampagne) addOnsList.push(isEs ? 'Botella Moët Chandon ($120)' : 'Moët Chandon Champagne ($120)');

    const message = isEs
      ? `🚤 *SOLICITUD DE RESERVA - OCEAN MIAMI BOATS* 🚤
-----------------------------------------
• *Yate:* ${currentBoat.name} (${currentBoat.length})
• *Fecha:* ${booking.charterDate}
• *Horario:* ${slotText}
• *Duración:* ${booking.durationHours} Horas
• *Pasajeros:* ${booking.guestsCount} personas
• *Ocasión:* ${booking.occasion}
• *Nombre del Cliente:* ${booking.contactName || 'Por coordinar'}
• *Teléfono:* ${booking.contactPhone || 'WhatsApp'}
• *Extras:* ${addOnsList.join(', ')}
• *Estimado Total:* ~$${totalEstimate} USD
-----------------------------------------
Por favor confírmenme disponibilidad y muelle de salida. ¡Gracias!`
      : `🚤 *CHARTER RESERVATION INQUIRY - OCEAN MIAMI BOATS* 🚤
-----------------------------------------
• *Vessel:* ${currentBoat.name} (${currentBoat.length})
• *Date:* ${booking.charterDate}
• *Time Slot:* ${slotText}
• *Duration:* ${booking.durationHours} Hours
• *Guests:* ${booking.guestsCount} guests
• *Occasion:* ${booking.occasion}
• *Contact Name:* ${booking.contactName || 'To coordinate'}
• *Contact Phone:* ${booking.contactPhone || 'WhatsApp'}
• *Add-ons:* ${addOnsList.join(', ')}
• *Estimated Total:* ~$${totalEstimate} USD
-----------------------------------------
Please confirm available departure times and marina location. Thank you!`;

    const url = `https://wa.me/17865779069?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0B0C14] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            {isEs ? 'Reserva Tu Bote en Miami' : 'Reserve Your Miami Yacht'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {isEs
              ? 'Calcula tu paseo y envía tu reserva directa con confirmación inmediata por WhatsApp.'
              : 'Estimate your charter and lock in your reservation instantly via WhatsApp.'}
          </p>
        </div>

        {/* Form Body */}
        <div className="space-y-5 text-xs text-gray-300">
          {/* 1. Boat Selection */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-2">
              {isEs ? '1. Selecciona la Embarcación' : '1. Select Yacht / Boat'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {FLEET_DATA.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBooking({ ...booking, boatId: b.id })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    booking.boatId === b.id
                      ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="font-extrabold block text-white text-xs sm:text-sm">{b.name}</span>
                  <span className="text-[10px] text-[#00F0FF] font-mono">
                    ${b.hourlyRate}/hr • {b.capacity} {isEs ? 'pasajeros' : 'guests'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{isEs ? '2. Fecha del Paseo' : '2. Charter Date'}</span>
              </label>
              <input
                type="date"
                value={booking.charterDate}
                onChange={(e) => setBooking({ ...booking, charterDate: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-[#00F0FF] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{isEs ? '3. Horario Preferido' : '3. Preferred Time Slot'}</span>
              </label>
              <select
                value={booking.timeSlot}
                onChange={(e) => setBooking({ ...booking, timeSlot: e.target.value as any })}
                className="w-full bg-[#0E101A] border border-white/15 rounded-lg px-3 py-2 text-white focus:border-[#00F0FF] focus:outline-none cursor-pointer"
              >
                <option value="morning">{isEs ? timeSlotLabels.morning.es : timeSlotLabels.morning.en}</option>
                <option value="afternoon">{isEs ? timeSlotLabels.afternoon.es : timeSlotLabels.afternoon.en}</option>
                <option value="sunset">{isEs ? timeSlotLabels.sunset.es : timeSlotLabels.sunset.en}</option>
                <option value="night">{isEs ? timeSlotLabels.night.es : timeSlotLabels.night.en}</option>
              </select>
            </div>
          </div>

          {/* 3. Duration & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                {isEs ? '4. Duración (Horas)' : '4. Duration (Hours)'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[2, 4, 6, 8].map((hrs) => (
                  <button
                    key={hrs}
                    type="button"
                    onClick={() => setBooking({ ...booking, durationHours: hrs })}
                    className={`py-2 rounded-lg font-mono font-bold text-center border transition-all cursor-pointer ${
                      booking.durationHours === hrs
                        ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black border-transparent font-black shadow-md'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    {hrs}h
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>
                  {isEs ? '5. Número de Pasajeros' : '5. Number of Guests'} (Máx {currentBoat.capacity})
                </span>
              </label>
              <input
                type="number"
                min="1"
                max={currentBoat.capacity}
                value={booking.guestsCount}
                onChange={(e) => setBooking({ ...booking, guestsCount: Number(e.target.value) })}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-[#00F0FF] focus:outline-none"
              />
            </div>
          </div>

          {/* 4. Occasion */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
              {isEs ? '6. Ocasión de la Celebración' : '6. Celebration Occasion'}
            </label>
            <select
              value={booking.occasion}
              onChange={(e) => setBooking({ ...booking, occasion: e.target.value })}
              className="w-full bg-[#0E101A] border border-white/15 rounded-lg px-3 py-2 text-white focus:border-[#00F0FF] focus:outline-none"
            >
              {occasions.map((occ, i) => (
                <option key={i} value={isEs ? occ.es : occ.en}>
                  {isEs ? occ.es : occ.en}
                </option>
              ))}
            </select>
          </div>

          {/* 5. Contact Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                {isEs ? 'Tu Nombre' : 'Your Name'}
              </label>
              <input
                type="text"
                placeholder={isEs ? 'Ej: Maria Perez' : 'e.g. Alex Johnson'}
                value={booking.contactName}
                onChange={(e) => setBooking({ ...booking, contactName: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-[#00F0FF] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                {isEs ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}
              </label>
              <input
                type="tel"
                placeholder="+1 (786) ..."
                value={booking.contactPhone}
                onChange={(e) => setBooking({ ...booking, contactPhone: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-[#00F0FF] focus:outline-none"
              />
            </div>
          </div>

          {/* 6. Inclusions & Optional Add-ons */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F0FF] block">
              {isEs ? 'Incluido Gratis en tu Reserva' : 'Included Complimentary'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{isEs ? 'Capitán Licenciado USCG' : 'Licensed USCG Captain'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{isEs ? 'Alfombra Flotante Gigante 18ft' : '18ft Giant Floating Water Mat'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{isEs ? 'Hielera con Hielo y Agua' : 'Ice Coolers with Fresh Ice'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{isEs ? '100% BYOB (Bebidas y Comida)' : '100% BYOB (Drinks & Snacks)'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Summary & Send Button */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono text-gray-400 block">
              {isEs ? 'Presupuesto Estimado:' : 'Estimated Charter Total:'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">${totalEstimate}</span>
              <span className="text-xs text-gray-400 font-mono">
                (${currentBoat.hourlyRate}/hr × {booking.durationHours}h)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="tel:+17865779069"
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <Phone className="w-4 h-4 text-[#00F0FF]" />
              <span>(786) 577-9069</span>
            </a>

            <button
              onClick={handleWhatsAppBooking}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-[#00F0FF] to-[#FF00FF] hover:brightness-110 text-black font-extrabold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isEs ? 'Enviar Reserva por WhatsApp' : 'Reserve on WhatsApp'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWizardModal;
