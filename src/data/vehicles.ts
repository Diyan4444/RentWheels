import type { VehicleCategory, PricingParams } from '../scripts/pricing';
import { calculateEstimated24hRate } from '../scripts/pricing';

export interface VehicleImage {
  file: string;
  alt: string;
  focal: string;
  quality: 'ok' | 'lowres' | 'watermark' | 'mismatch';
  role: 'card' | 'gallery' | 'hero';
}

export interface VehicleSpecs {
  engineOrMotor: string;
  power: string;
  transmission: string;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  seats: number;
  efficiency?: { value: string; unit: 'km/l' };
  evSpecs?: { batteryCapacity: string; claimedRange: string };
  sourceUrl: string;
  accessedDate: string;
}

export interface Vehicle {
  slug: string;
  name: string;
  brand: string;
  category: VehicleCategory;
  estimatedRatePer24h: number;
  pricingInputs: PricingParams;
  seats: number;
  efficiency?: { value: string; unit: 'km/l' };
  evSpecs?: { batteryCapacity: string; claimedRange: string };
  specs: VehicleSpecs;
  specsVerified: boolean;
  featured: boolean;
  summary: string;
  suitedFor: string[];
  images: VehicleImage[];
}

export const vehicles: Vehicle[] = [
  // ==========================================
  // BIKES (3)
  // ==========================================
  {
    slug: 'royal-enfield-classic-350',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    category: 'bike',
    pricingInputs: {
      category: 'bike',
      segmentMultiplier: 1.25,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.05,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'bike',
      segmentMultiplier: 1.25,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.05,
    }),
    seats: 2,
    efficiency: { value: '35 to 40', unit: 'km/l' },
    specs: {
      engineOrMotor: '349cc air-oil cooled single-cylinder 4-stroke J-series',
      power: '20.2 bhp at 6100 rpm, 27 Nm torque at 4000 rpm',
      transmission: '5-speed constant mesh manual',
      fuelType: 'Petrol',
      seats: 2,
      efficiency: { value: '35 to 40', unit: 'km/l' },
      sourceUrl: 'https://www.royalenfield.com/in/en/motorcycles/classic-350/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: true,
    summary:
      'The Royal Enfield Classic 350 is a retro cruiser motorcycle with 2 seats, available at an estimated rate of ₹1,300 per 24 hours.',
    suitedFor: ['Leisure rides', 'Weekend getaways', 'City cruising'],
    images: [
      {
        file: '350/bike_display_1_350_3.png',
        alt: 'Royal Enfield Classic 350 cruiser motorcycle on outdoor display',
        focal: '50% 50%',
        quality: 'watermark',
        role: 'card',
      },
      {
        file: '350/bike_display_1_350_1.png',
        alt: 'Royal Enfield Classic 350 side profile view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: '350/bike_display_1_350_2.png',
        alt: 'Royal Enfield Classic 350 three-quarter front view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'ktm-390-duke',
    name: 'KTM 390 Duke',
    brand: 'KTM',
    category: 'bike',
    pricingInputs: {
      category: 'bike',
      segmentMultiplier: 1.6,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.15,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'bike',
      segmentMultiplier: 1.6,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.15,
    }),
    seats: 2,
    efficiency: { value: '28 to 30', unit: 'km/l' },
    specs: {
      engineOrMotor: '399cc liquid-cooled single-cylinder 4-valve DOHC',
      power: '45 bhp at 8500 rpm, 39 Nm torque at 6500 rpm',
      transmission: '6-speed manual with slipper clutch',
      fuelType: 'Petrol',
      seats: 2,
      efficiency: { value: '28 to 30', unit: 'km/l' },
      sourceUrl: 'https://www.ktm.com/en-in/models/naked-bike/ktm-390-duke-2024.html',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The KTM 390 Duke is a high-performance streetfighter motorcycle with 2 seats, available at an estimated rate of ₹1,850 per 24 hours.',
    suitedFor: ['Spirited highway rides', 'Track enthusiasts', 'Agile city commuting'],
    images: [
      {
        file: 'ktm/bike_display_2_KTM_3.png',
        alt: 'KTM 390 Duke naked performance motorcycle in vibrant orange',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'ktm/bike_display_2_KTM_1.png',
        alt: 'KTM 390 Duke side perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'ktm/bike_display_2_KTM_2.png',
        alt: 'KTM 390 Duke front three-quarter view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'bmw-r-1250-gs',
    name: 'BMW R 1250 GS',
    brand: 'BMW',
    category: 'bike',
    pricingInputs: {
      category: 'bike',
      segmentMultiplier: 4.8,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.35,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'bike',
      segmentMultiplier: 4.8,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.35,
    }),
    seats: 2,
    efficiency: { value: '20 to 22', unit: 'km/l' },
    specs: {
      engineOrMotor: '1254cc twin-cylinder boxer engine with ShiftCam variable valve timing',
      power: '136 hp at 7750 rpm, 143 Nm torque at 6250 rpm',
      transmission: '6-speed manual with shaft drive',
      fuelType: 'Petrol',
      seats: 2,
      efficiency: { value: '20 to 22', unit: 'km/l' },
      sourceUrl: 'https://www.bmw-motorrad.in/en/models/adventure/r1250gs.html',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The BMW R 1250 GS is a flagship adventure touring motorcycle with 2 seats, available at an estimated rate of ₹6,500 per 24 hours.',
    suitedFor: ['Long-distance touring', 'All-terrain exploration', 'Expedition travel'],
    images: [
      {
        file: 'GS/bike_display_3_GS_3.png',
        alt: 'BMW R 1250 GS adventure tourer motorcycle',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'GS/bike_display_3_GS_1.png',
        alt: 'BMW R 1250 GS front profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'GS/bike_display_3_GS_2.png',
        alt: 'BMW R 1250 GS parked profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },

  // ==========================================
  // CARS (3)
  // ==========================================
  {
    slug: 'honda-civic',
    name: 'Honda Civic',
    brand: 'Honda',
    category: 'car',
    pricingInputs: {
      category: 'car',
      segmentMultiplier: 1.5,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.05,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'car',
      segmentMultiplier: 1.5,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.05,
    }),
    seats: 5,
    efficiency: { value: '16 to 17', unit: 'km/l' },
    specs: {
      engineOrMotor: '1.8-litre i-VTEC 4-cylinder petrol engine',
      power: '141 PS at 6500 rpm, 174 Nm torque at 4300 rpm',
      transmission: '7-speed stepped CVT automatic',
      fuelType: 'Petrol',
      seats: 5,
      efficiency: { value: '16 to 17', unit: 'km/l' },
      sourceUrl: 'https://www.hondacarindia.com/honda-civic',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: true,
    summary:
      'The Honda Civic is an executive sedan with 5 seats, available at an estimated rate of ₹3,100 per 24 hours.',
    suitedFor: ['Business travel', 'Comfortable road trips', 'Family city transit'],
    images: [
      {
        file: 'Honda Civic/car_display_2_honda_3.png',
        alt: 'Honda Civic executive sedan on display',
        focal: '50% 50%',
        quality: 'watermark',
        role: 'card',
      },
      {
        file: 'Honda Civic/car_display_2_honda_1.png',
        alt: 'Honda Civic front view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'Honda Civic/car_display_2_honda_2.png',
        alt: 'Honda Civic three-quarter profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'toyota-rav4-hybrid',
    name: 'Toyota RAV4 Hybrid',
    brand: 'Toyota',
    category: 'car',
    pricingInputs: {
      category: 'car',
      segmentMultiplier: 2.2,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.2,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'car',
      segmentMultiplier: 2.2,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.2,
    }),
    seats: 5,
    efficiency: { value: '21 to 23', unit: 'km/l' },
    specs: {
      engineOrMotor: '2.5-litre Dynamic Force 4-cylinder petrol with Hybrid Synergy Drive',
      power: '219 combined hp, Electronic On-Demand All-Wheel Drive',
      transmission: 'Electronically controlled continuously variable transmission (e-CVT)',
      fuelType: 'Hybrid',
      seats: 5,
      efficiency: { value: '21 to 23', unit: 'km/l' },
      sourceUrl: 'https://www.toyota.com/rav4hybrid/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Toyota RAV4 Hybrid is an all-wheel-drive hybrid crossover SUV with 5 seats, available at an estimated rate of ₹5,150 per 24 hours.',
    suitedFor: ['Eco-friendly family travel', 'All-weather excursions', 'Interstate highway journeys'],
    images: [
      {
        file: 'Toyota/car_display_3_toyota_3.png',
        alt: 'Toyota RAV4 Hybrid crossover SUV',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'Toyota/car_display_3_toyota_1.png',
        alt: 'Toyota RAV4 Hybrid front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'Toyota/car_display_3_toyota_2.png',
        alt: 'Toyota RAV4 Hybrid profile view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'ford-mustang-gt',
    name: 'Ford Mustang GT',
    brand: 'Ford',
    category: 'car',
    pricingInputs: {
      category: 'car',
      segmentMultiplier: 16.0,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.25,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'car',
      segmentMultiplier: 16.0,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.25,
    }),
    seats: 4,
    efficiency: { value: '7 to 8', unit: 'km/l' },
    specs: {
      engineOrMotor: '5.0-litre Ti-VCT Coyote V8 engine',
      power: '450 PS at 7000 rpm, 529 Nm torque at 4600 rpm',
      transmission: '10-speed SelectShift automatic',
      fuelType: 'Petrol',
      seats: 4,
      efficiency: { value: '7 to 8', unit: 'km/l' },
      sourceUrl: 'https://www.ford.com/cars/mustang/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Ford Mustang GT is a high-performance V8 sports coupe with 4 seats, available at an estimated rate of ₹38,900 per 24 hours.',
    suitedFor: ['Special celebrations', 'Performance driving experiences', 'Coastal highway cruises'],
    images: [
      {
        file: 'ford/car_display_1_ford_3.png',
        alt: 'Ford Mustang GT V8 performance sports coupe in red',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'ford/car_display_1_ford_1.png',
        alt: 'Ford Mustang GT front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'ford/car_display_1_ford_2.png',
        alt: 'Ford Mustang GT side profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },

  // ==========================================
  // SCOOTERS (3)
  // ==========================================
  {
    slug: 'vespa-gts-300-hpe',
    name: 'Vespa GTS 300 HPE',
    brand: 'Vespa',
    category: 'scooter',
    pricingInputs: {
      category: 'scooter',
      segmentMultiplier: 1.8,
      capacityFactor: 0.0,
      transmissionFactor: 0.05,
      powerFactor: 0.15,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'scooter',
      segmentMultiplier: 1.8,
      capacityFactor: 0.0,
      transmissionFactor: 0.05,
      powerFactor: 0.15,
    }),
    seats: 2,
    efficiency: { value: '30 to 32', unit: 'km/l' },
    specs: {
      engineOrMotor: '278cc High Performance Engine (HPE) single-cylinder 4-stroke 4-valve liquid-cooled',
      power: '23.8 hp at 8250 rpm, 26 Nm torque at 5250 rpm',
      transmission: 'Automatic CVT with torque server',
      fuelType: 'Petrol',
      seats: 2,
      efficiency: { value: '30 to 32', unit: 'km/l' },
      sourceUrl: 'https://www.vespa.com/en_EN/models/gts/gts-300-hpe/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Vespa GTS 300 HPE is a premium Italian touring scooter with 2 seats, available at an estimated rate of ₹1,300 per 24 hours.',
    suitedFor: ['Urban exploration', 'Heritage district riding', 'Stylish daily travel'],
    images: [
      {
        file: 'Vespa/scooter_display_1_Vespa_3.png',
        alt: 'Vespa GTS 300 HPE touring scooter',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'Vespa/scooter_display_1_Vespa_1.png',
        alt: 'Vespa GTS 300 HPE side profile',
        focal: '50% 50%',
        quality: 'lowres',
        role: 'gallery',
      },
      {
        file: 'Vespa/scooter_display_1_Vespa_2.png',
        alt: 'Vespa GTS 300 HPE front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'yamaha-tmax-tech-max',
    name: 'Yamaha TMAX Tech MAX',
    brand: 'Yamaha',
    category: 'scooter',
    pricingInputs: {
      category: 'scooter',
      segmentMultiplier: 2.8,
      capacityFactor: 0.0,
      transmissionFactor: 0.05,
      powerFactor: 0.25,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'scooter',
      segmentMultiplier: 2.8,
      capacityFactor: 0.0,
      transmissionFactor: 0.05,
      powerFactor: 0.25,
    }),
    seats: 2,
    efficiency: { value: '20 to 22', unit: 'km/l' },
    specs: {
      engineOrMotor: '562cc forward-inclined parallel 2-cylinder 4-stroke DOHC 4-valve',
      power: '47.6 PS at 7500 rpm, 55.7 Nm torque at 5250 rpm',
      transmission: 'V-Belt automatic',
      fuelType: 'Petrol',
      seats: 2,
      efficiency: { value: '20 to 22', unit: 'km/l' },
      sourceUrl: 'https://www.yamaha-motor.eu/gb/en/scooters/maxi/pdp/tmax-tech-max-2024/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Yamaha TMAX Tech MAX is a flagship twin-cylinder sport maxi-scooter with 2 seats, available at an estimated rate of ₹2,200 per 24 hours.',
    suitedFor: ['Highway touring', 'Premium commuter comfort', 'Longer suburban commutes'],
    images: [
      {
        file: 'Yamaha/scooter_display_2_yamaha_3.png',
        alt: 'Yamaha TMAX Tech MAX sport maxi-scooter',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'Yamaha/scooter_display_2_yamaha_1.png',
        alt: 'Yamaha TMAX Tech MAX profile view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'Yamaha/scooter_display_2_yamaha_2.png',
        alt: 'Yamaha TMAX Tech MAX front three-quarter view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'honda-adv350',
    name: 'Honda ADV350',
    brand: 'Honda',
    category: 'scooter',
    pricingInputs: {
      category: 'scooter',
      segmentMultiplier: 2.1,
      capacityFactor: 0.0,
      transmissionFactor: 0.05,
      powerFactor: 0.15,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'scooter',
      segmentMultiplier: 2.1,
      capacityFactor: 0.0,
      transmissionFactor: 0.05,
      powerFactor: 0.15,
    }),
    seats: 2,
    efficiency: { value: '28 to 30', unit: 'km/l' },
    specs: {
      engineOrMotor: '330cc enhanced Smart Power+ (eSP+) single-cylinder SOHC 4-valve liquid-cooled',
      power: '29.2 PS at 7500 rpm, 31.5 Nm torque at 5250 rpm',
      transmission: 'V-Matic automatic',
      fuelType: 'Petrol',
      seats: 2,
      efficiency: { value: '28 to 30', unit: 'km/l' },
      sourceUrl: 'https://www.honda.co.uk/motorcycles/range/scooter/adv350/overview.html',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Honda ADV350 is an adventure crossover scooter with 2 seats, available at an estimated rate of ₹1,500 per 24 hours.',
    suitedFor: ['Versatile urban commuting', 'Weekend country outings', 'Varied road surfaces'],
    images: [
      {
        file: 'ADV/scooter_display_3_ADV_3.png',
        alt: 'Honda ADV350 adventure scooter',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'ADV/scooter_display_3_ADV_1.png',
        alt: 'Honda ADV350 front profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'ADV/scooter_display_3_ADV_2.png',
        alt: 'Honda ADV350 side view',
        focal: '50% 50%',
        quality: 'lowres',
        role: 'gallery',
      },
    ],
  },

  // ==========================================
  // BUSES (3)
  // ==========================================
  {
    slug: 'volvo-b8rle',
    name: 'Volvo B8RLE',
    brand: 'Volvo',
    category: 'bus',
    pricingInputs: {
      category: 'bus',
      segmentMultiplier: 1.25,
      capacityFactor: 0.2,
      transmissionFactor: 0.1,
      powerFactor: 0.1,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'bus',
      segmentMultiplier: 1.25,
      capacityFactor: 0.2,
      transmissionFactor: 0.1,
      powerFactor: 0.1,
    }),
    seats: 45,
    efficiency: { value: '3 to 4', unit: 'km/l' },
    specs: {
      engineOrMotor: '7.7-litre Volvo D8K 6-cylinder in-line common-rail diesel',
      power: '320 hp at 2100 rpm, 1224 Nm torque at 1050 to 1600 rpm',
      transmission: 'ZF EcoLife 6-speed automatic with hydraulic retarder',
      fuelType: 'Diesel',
      seats: 45,
      efficiency: { value: '3 to 4', unit: 'km/l' },
      sourceUrl: 'https://www.volvobuses.com/en/city-and-intercity/chassis/volvo-b8rle.html',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Volvo B8RLE is a low-entry commercial coach with 45 passenger seats, available at an estimated rate of ₹21,000 per 24 hours.',
    suitedFor: ['Corporate group transit', 'Airport passenger transfers', 'City group charters'],
    images: [
      {
        file: 'Volvo/display_bus_1_volvo_3.png',
        alt: 'Volvo B8RLE low-entry commercial coach',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'Volvo/display_bus_1_volvo_1.png',
        alt: 'Volvo B8RLE passenger coach view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'Volvo/display_bus_1_volvo_2.png',
        alt: 'Volvo B8RLE side perspective',
        focal: '50% 50%',
        quality: 'lowres',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'mercedes-benz-tourismo',
    name: 'Mercedes-Benz Tourismo M/2',
    brand: 'Mercedes-Benz',
    category: 'bus',
    pricingInputs: {
      category: 'bus',
      segmentMultiplier: 1.4,
      capacityFactor: 0.35,
      transmissionFactor: 0.1,
      powerFactor: 0.15,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'bus',
      segmentMultiplier: 1.4,
      capacityFactor: 0.35,
      transmissionFactor: 0.1,
      powerFactor: 0.15,
    }),
    seats: 54,
    efficiency: { value: '3 to 4', unit: 'km/l' },
    specs: {
      engineOrMotor: '10.7-litre Mercedes-Benz OM 470 6-cylinder Euro VI diesel',
      power: '428 hp (315 kW) at 1800 rpm, 2100 Nm torque at 1100 rpm',
      transmission: '8-speed Mercedes-Benz GO 250-8 PowerShift automated manual',
      fuelType: 'Diesel',
      seats: 54,
      efficiency: { value: '3 to 4', unit: 'km/l' },
      sourceUrl: 'https://www.mercedes-benz-bus.com/en_DE/models/tourismo.html',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Mercedes-Benz Tourismo M/2 is a high-deck luxury touring coach with 54 passenger seats, available at an estimated rate of ₹26,900 per 24 hours.',
    suitedFor: ['Interstate corporate tours', 'Luxury wedding charters', 'Long-haul tourism groups'],
    images: [
      {
        file: 'merce/display_bus_2_mercedes_3.png',
        alt: 'Mercedes-Benz Tourismo M/2 luxury high-deck coach',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'merce/display_bus_2_mercedes_1.png',
        alt: 'Mercedes-Benz Tourismo front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'merce/display_bus_2_mercedes_2.jpg',
        alt: 'Mercedes-Benz Tourismo highway profile',
        focal: '50% 50%',
        quality: 'lowres',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'thomas-built-saf-t-liner-c2',
    name: 'Thomas Built Saf-T-Liner C2',
    brand: 'Thomas Built',
    category: 'bus',
    pricingInputs: {
      category: 'bus',
      segmentMultiplier: 1.05,
      capacityFactor: 0.25,
      transmissionFactor: 0.05,
      powerFactor: 0.0,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'bus',
      segmentMultiplier: 1.05,
      capacityFactor: 0.25,
      transmissionFactor: 0.05,
      powerFactor: 0.0,
    }),
    seats: 72,
    efficiency: { value: '3 to 4', unit: 'km/l' },
    specs: {
      engineOrMotor: '6.7-litre Cummins B6.7 turbocharged inline-6 diesel',
      power: '260 hp at 2400 rpm, 660 lb-ft torque at 1600 rpm',
      transmission: 'Allison 2500 PTS 5-speed automatic',
      fuelType: 'Diesel',
      seats: 72,
      efficiency: { value: '3 to 4', unit: 'km/l' },
      sourceUrl: 'https://thomasbuiltbuses.com/school-buses/saf-t-liner-c2/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Thomas Built Saf-T-Liner C2 is a high-capacity group transport bus with 72 passenger seats, available at an estimated rate of ₹16,400 per 24 hours.',
    suitedFor: ['Large group excursions', 'Educational campus charters', 'Event group transport'],
    images: [
      {
        file: 'thomas/display_bus_3_thomas_3.png',
        alt: 'Thomas Built Saf-T-Liner C2 high-capacity group bus',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'thomas/display_bus_3_thomas_1.png',
        alt: 'Thomas Built Saf-T-Liner front view',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'thomas/display_bus_3_thomas_2.jpg',
        alt: 'Thomas Built Saf-T-Liner roadside view',
        focal: '50% 50%',
        quality: 'lowres',
        role: 'gallery',
      },
    ],
  },

  // ==========================================
  // TRUCKS (3)
  // ==========================================
  {
    slug: 'ford-f-150',
    name: 'Ford F-150',
    brand: 'Ford',
    category: 'truck',
    pricingInputs: {
      category: 'truck',
      segmentMultiplier: 2.0,
      capacityFactor: 0.15,
      transmissionFactor: 0.1,
      powerFactor: 0.2,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'truck',
      segmentMultiplier: 2.0,
      capacityFactor: 0.15,
      transmissionFactor: 0.1,
      powerFactor: 0.2,
    }),
    seats: 5,
    efficiency: { value: '8 to 10', unit: 'km/l' },
    specs: {
      engineOrMotor: '3.5-litre twin-turbocharged EcoBoost V6 engine',
      power: '400 hp at 6000 rpm, 500 lb-ft (678 Nm) torque at 3000 rpm',
      transmission: '10-speed SelectShift automatic with 4x4',
      fuelType: 'Petrol',
      seats: 5,
      efficiency: { value: '8 to 10', unit: 'km/l' },
      sourceUrl: 'https://www.ford.com/trucks/f150/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: true,
    summary:
      'The Ford F-150 is a full-size crew cab pickup truck with 5 seats, available at an estimated rate of ₹8,700 per 24 hours.',
    suitedFor: ['Heavy equipment hauling', 'Outdoor expeditions', 'Utility cargo transit'],
    images: [
      {
        file: 'ford-f/display_truck_1_ford_3.png',
        alt: 'Ford F-150 full-size crew cab pickup truck',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'ford-f/display_truck_1_ford_1.png',
        alt: 'Ford F-150 pickup front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'ford-f/display_truck_1_ford_2.png',
        alt: 'Ford F-150 side profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'kenworth-t680',
    name: 'Kenworth T680',
    brand: 'Kenworth',
    category: 'truck',
    pricingInputs: {
      category: 'truck',
      segmentMultiplier: 2.2,
      capacityFactor: 0.2,
      transmissionFactor: 0.1,
      powerFactor: 0.3,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'truck',
      segmentMultiplier: 2.2,
      capacityFactor: 0.2,
      transmissionFactor: 0.1,
      powerFactor: 0.3,
    }),
    seats: 3,
    efficiency: { value: '2 to 3', unit: 'km/l' },
    specs: {
      engineOrMotor: '12.9-litre PACCAR MX-13 heavy-duty 6-cylinder diesel',
      power: '455 hp at 1600 rpm, 1650 lb-ft torque at 900 rpm',
      transmission: 'PACCAR 12-speed automated transmission',
      fuelType: 'Diesel',
      seats: 3,
      efficiency: { value: '2 to 3', unit: 'km/l' },
      sourceUrl: 'https://www.kenworth.com/trucks/t680/',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Kenworth T680 is a Class 8 commercial semi-tractor with 3 seats, available at an estimated rate of ₹10,500 per 24 hours.',
    suitedFor: ['Commercial freight haulage', 'Interstate cargo transport', 'Heavy trailer prime moving'],
    images: [
      {
        file: 'kenworth/truck_display_2_kenworth_3.jpg',
        alt: 'Kenworth T680 Class 8 commercial semi-tractor in red',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'kenworth/truck_display_2_kenworth_1.png',
        alt: 'Kenworth T680 front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'kenworth/truck_display_2_kenworth_2.png',
        alt: 'Kenworth T680 cabin perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
  {
    slug: 'rivian-r1t',
    name: 'Rivian R1T',
    brand: 'Rivian',
    category: 'truck',
    pricingInputs: {
      category: 'truck',
      segmentMultiplier: 3.6,
      capacityFactor: 0.15,
      transmissionFactor: 0.25,
      powerFactor: 0.35,
    },
    estimatedRatePer24h: calculateEstimated24hRate({
      category: 'truck',
      segmentMultiplier: 3.6,
      capacityFactor: 0.15,
      transmissionFactor: 0.25,
      powerFactor: 0.35,
    }),
    seats: 5,
    // Note: efficiency (km/l) deliberately undefined for EV
    evSpecs: {
      batteryCapacity: '135 kWh Large Pack',
      claimedRange: '505 km (314 miles EPA)',
    },
    specs: {
      engineOrMotor: 'Quad-Motor All-Wheel Drive with independent motor per wheel',
      power: '835 hp, 908 lb-ft (1231 Nm) torque',
      transmission: 'Single-speed direct drive per motor',
      fuelType: 'Electric',
      seats: 5,
      evSpecs: {
        batteryCapacity: '135 kWh Large Pack',
        claimedRange: '505 km (314 miles EPA)',
      },
      sourceUrl: 'https://rivian.com/r1t',
      accessedDate: '2026-11-17',
    },
    specsVerified: true,
    featured: false,
    summary:
      'The Rivian R1T is an all-electric adventure pickup truck with 5 seats, available at an estimated rate of ₹18,900 per 24 hours.',
    suitedFor: ['Zero-emission adventure travel', 'High-performance off-roading', 'Modern utility transit'],
    images: [
      {
        file: 'Rivian/truck_display_3_rivian_3.png',
        alt: 'Rivian R1T all-electric adventure pickup truck',
        focal: '50% 50%',
        quality: 'ok',
        role: 'card',
      },
      {
        file: 'Rivian/truck_display_3_rivian_1.png',
        alt: 'Rivian R1T front perspective',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
      {
        file: 'Rivian/truck_display_3_rivian_2.png',
        alt: 'Rivian R1T side profile',
        focal: '50% 50%',
        quality: 'ok',
        role: 'gallery',
      },
    ],
  },
];

/**
 * Returns a vehicle by its unique slug, or undefined if not found.
 */
export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

/**
 * Returns all vehicles filtered by category.
 */
export function getVehiclesByCategory(category: VehicleCategory): Vehicle[] {
  return vehicles.filter((v) => v.category === category);
}
