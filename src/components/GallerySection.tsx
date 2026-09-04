import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  language: 'EN' | 'ES';
  onOpenBooking: () => void;
}

interface GalleryItem {
  id: number;
  url: string;
  titleEn: string;
  titleEs: string;
  category: 'sandbar' | 'fleet' | 'lifestyle';
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558739/579649465_18095923906833733_9212740238130069431_n.jpg',
    titleEn: 'Haulover Sandbar Celebration',
    titleEs: 'Celebración en Haulover Sandbar',
    category: 'sandbar',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558747/576433059_18095923885833733_1786475457374650446_n.jpg',
    titleEn: 'Yacht Cruising Biscayne Bay',
    titleEs: 'Navegando por la Bahía de Biscayne',
    category: 'fleet',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558752/564916038_18093584449833733_8231386145436370340_n.jpg',
    titleEn: 'Miami Sunset Charter',
    titleEs: 'Paseo al Atardecer en Miami',
    category: 'lifestyle',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558759/560470280_18092298496833733_2628570151670888926_n.jpg',
    titleEn: 'Floating Lily Pad Fun',
    titleEs: 'Diversión en la Alfombra Flotante',
    category: 'sandbar',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558765/560564036_18092298415833733_3269781423791678904_n.jpg',
    titleEn: 'Star Island Mansion Views',
    titleEs: 'Vistas a las Mansiones de Star Island',
    category: 'fleet',
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558771/543107971_1341771691290931_5517866679068714345_n.jpg',
    titleEn: 'Private Bachelorette Party',
    titleEs: 'Despedida de Soltera Privada',
    category: 'lifestyle',
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558775/545867063_1346098317524935_891043737349871065_n.jpg',
    titleEn: 'Crystal Clear Sandbar Waters',
    titleEs: 'Aguas Cristalinas en el Sandbar',
    category: 'sandbar',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558784/539261018_1333040302164070_2765857571956880691_n.jpg',
    titleEn: 'Luxury Deck Lounging',
    titleEs: 'Solárium de Lujo a Bordo',
    category: 'fleet',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558790/545806815_1346087170859383_7576670244781054692_n.jpg',
    titleEn: 'Family Cruise in Miami',
    titleEs: 'Paseo Familiar en Miami',
    category: 'lifestyle',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558793/545805315_1346452567489510_1166928568388666157_n.jpg',
    titleEn: 'Monument Island Anchorage',
    titleEs: 'Fondeo en Monument Island',
    category: 'sandbar',
  },
  {
    id: 11,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558802/533188067_1323140356487398_2667192309924606669_n.jpg',
    titleEn: 'Downtown Miami River Cruise',
    titleEs: 'Crucero por el Río de Downtown Miami',
    category: 'fleet',
  },
  {
    id: 12,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558809/540763626_1339176981550402_1015672299327724790_n.jpg',
    titleEn: 'VIP Birthday Celebration',
    titleEs: 'Cumpleaños VIP en Barco',
    category: 'lifestyle',
  },
  {
    id: 13,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558815/530364458_1316952637106170_2868080088771312021_n.jpg',
    titleEn: 'Sunbathing on the Water Mat',
    titleEs: 'Tomando el Sol en la Alfombra Flotante',
    category: 'sandbar',
  },
  {
    id: 14,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788558820/537144062_1326919119442855_3769612986206363296_n.jpg',
    titleEn: 'Miami Beach Skyline View',
    titleEs: 'Vista del Horizonte de Miami Beach',
    category: 'fleet',
  },
  {
    id: 15,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788559086/536655084_1329662949168472_8917884073709713281_n.jpg',
    titleEn: 'Cocktails & Champagne on Board',
    titleEs: 'Cócteles y Brindis a Bordo',
    category: 'lifestyle',
  },
  {
    id: 16,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788559093/534802392_1326783136123120_3878524065484653173_n.jpg',
    titleEn: 'Sandbar Party Vibes',
    titleEs: 'Ambiente Festivo en el Sandbar',
    category: 'sandbar',
  },
  {
    id: 17,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788559396/531797077_1321552473312853_8186739741326033612_n.jpg',
    titleEn: 'Bow Cushion Relaxing',
    titleEs: 'Relajo en los Cojines de Proa',
    category: 'fleet',
  },
  {
    id: 18,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788559435/531213653_1321563709978396_3621218816989715926_n.jpg',
    titleEn: 'Biscayne Bay Swimming Stop',
    titleEs: 'Parada para Nadar en Biscayne Bay',
    category: 'sandbar',
  },
  {
    id: 19,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788559588/497545831_1243100567824711_8818128085081041213_n.jpg',
    titleEn: 'Happy Guests Aboard',
    titleEs: 'Clientes Felices a Bordo',
    category: 'lifestyle',
  },
  {
    id: 20,
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788559605/494493852_1232499495551485_26286642230904695_n.jpg',
    titleEn: 'Unforgettable Miami Moments',
    titleEs: 'Momentos Inolvidables en Miami',
    category: 'lifestyle',
  },
];

export const GallerySection: React.FC<GallerySectionProps> = ({
  language,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isEs = language === 'ES';

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto relative">
      {/* Header Without Eyebrow */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            {isEs ? 'Galería de Momentos Reales' : 'Real Charter Moments'}
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl text-sm sm:text-base">
            {isEs
              ? 'Fotos reales de nuestros clientes navegando en Biscayne Bay, descansando en la alfombra flotante y celebrando en los bancos de arena de Miami.'
              : 'Authentic photos of our guests enjoying Biscayne Bay, lounging on our 18ft giant floating mat, and celebrating at Miami sandbars.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: isEs ? 'Todas (20)' : 'All (20)' },
            { id: 'sandbar', label: isEs ? 'Bancos de Arena' : 'Sandbars' },
            { id: 'fleet', label: isEs ? 'Nuestros Yates' : 'Yachts' },
            { id: 'lifestyle', label: isEs ? 'Celebraciones' : 'Lifestyle' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of all 20 images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00F0FF]/50 transition-all cursor-pointer shadow-lg"
          >
            <img
              src={img.url}
              alt={isEs ? img.titleEs : img.titleEn}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
              <span className="text-[11px] font-bold text-white leading-tight line-clamp-2">
                {isEs ? img.titleEs : img.titleEn}
              </span>
              <div className="flex items-center justify-between mt-1 text-[9px] text-[#00F0FF] font-mono">
                <span>Ocean Miami</span>
                <Maximize2 className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA for booking */}
      <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-black uppercase text-white">
            {isEs ? '¿Listo Para Tu Propio Paseo Inolvidable?' : 'Ready for Your Own Miami Adventure?'}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {isEs
              ? 'Alfombra flotante de 18ft + Capitán USCG + Hielo gratis en todos los paseos.'
              : 'Free 18ft giant floating mat + USCG Captain + Ice cooler included with every charter.'}
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-6 py-2.5 bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] text-black font-extrabold uppercase text-xs tracking-wider rounded-full hover:brightness-110 shadow-lg shrink-0 cursor-pointer"
        >
          {isEs ? 'Reservar Barco' : 'Reserve Boat'}
        </button>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].url}
              alt={
                isEs
                  ? filteredImages[lightboxIndex].titleEs
                  : filteredImages[lightboxIndex].titleEn
              }
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="text-white font-bold text-sm">
                {isEs
                  ? filteredImages[lightboxIndex].titleEs
                  : filteredImages[lightboxIndex].titleEn}
              </h4>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                {lightboxIndex + 1} / {filteredImages.length} • Ocean Miami Boats
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
