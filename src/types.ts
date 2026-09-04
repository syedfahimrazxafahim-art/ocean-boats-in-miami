export interface Boat {
  id: string;
  name: string;
  category: 'Cruiser' | 'Flybridge Yacht' | 'Sport Console' | 'Bowrider';
  slogan: string;
  length: string;
  capacity: number;
  crew: string;
  staterooms: number;
  bathrooms: number;
  engine: string;
  soundSystem: string;
  hourlyRate: number;
  featured: boolean;
  image: string;
  interiorImage?: string;
  helmImage?: string;
  gallery: string[];
  description: string;
  spanishDescription: string;
  highlights: string[];
  amenities: string[];
}

export interface Destination {
  id: string;
  title: string;
  spanishTitle: string;
  timeFromDock: string;
  tagline: string;
  image: string;
  description: string;
  spanishDescription: string;
  vibe: string;
  recommendedDuration: string;
  activities: string[];
}

export interface CharterPackage {
  id: string;
  title: string;
  spanishTitle: string;
  duration: string;
  hours: number;
  basePrice: number;
  popular?: boolean;
  description: string;
  spanishDescription: string;
  inclusions: string[];
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  occasion: string;
  comment: string;
  spanishComment: string;
  avatar: string;
  boatRented: string;
  groupType: 'Family' | 'Bachelorette' | 'Friends' | 'Birthday' | 'Celebration';
}

export interface BookingFormState {
  boatId: string;
  charterDate: string;
  timeSlot: 'morning' | 'afternoon' | 'sunset' | 'night';
  durationHours: number;
  guestsCount: number;
  occasion: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  notes: string;
  includeJetSki: boolean;
  includeWaterMat: boolean;
  includeChampagne: boolean;
}
