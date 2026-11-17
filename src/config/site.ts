export interface SiteConfig {
  name: string;
  url: string;
  locale: string;
  currency: string;
  timezone: string;
  demoMode: boolean;
  legalReviewed: boolean;
  contact: {
    email: string;
    phone?: string;
    whatsapp?: string;
    address?: string;
  };
  forms: {
    notificationEmail: string;
    bookingFormName: string;
  };
  billing: {
    mode: '24-hour' | 'inclusive' | 'nights';
    maxTripDays: number;
    maxAdvanceDays: number;
    maxVehiclesPerTrip: number;
    roundPartialPeriods: 'ceil' | 'exact';
  };
}

export const siteConfig: SiteConfig = {
  name: 'RentWheels',
  url: 'https://wheel-rent.netlify.app',
  locale: 'en-IN',
  currency: 'INR',
  timezone: 'Asia/Kolkata',
  demoMode: true,
  legalReviewed: false,
  contact: {
    email: 'diyanshah2301@gmail.com',
  },
  forms: {
    notificationEmail: 'dailykarma1910@gmail.com',
    bookingFormName: 'booking-request',
  },
  billing: {
    mode: '24-hour',
    maxTripDays: 30,
    maxAdvanceDays: 180,
    maxVehiclesPerTrip: 5,
    roundPartialPeriods: 'ceil',
  },
};
