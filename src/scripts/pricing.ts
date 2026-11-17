export type VehicleCategory = 'car' | 'bike' | 'scooter' | 'bus' | 'truck';

export interface PricingParams {
  category: VehicleCategory;
  segmentMultiplier: number;
  capacityFactor: number;
  transmissionFactor: number;
  powerFactor: number;
}

export const CATEGORY_BASE_RATES: Record<VehicleCategory, number> = {
  scooter: 600,
  bike: 1000,
  car: 1800,
  truck: 3000,
  bus: 12000,
};

/**
 * Rounds an integer value to the nearest 50 rupees.
 */
export function roundToNearest50(value: number): number {
  return Math.round(value / 50) * 50;
}

/**
 * Evaluates the indicative estimated rental rate per 24 hours
 * using the transparent Mumbai rental market formula:
 * Rate = roundToNearest50(Bc * Mseg * (1 + Fcap + Ftrans + Fpwr))
 */
export function calculateEstimated24hRate(params: PricingParams): number {
  const baseRate = CATEGORY_BASE_RATES[params.category] ?? 1000;
  const factorSum = 1 + params.capacityFactor + params.transmissionFactor + params.powerFactor;
  const rawRate = baseRate * params.segmentMultiplier * factorSum;
  return roundToNearest50(rawRate);
}

/**
 * Calculates indicative trip estimate given the 24-hour rate and period count.
 */
export function calculateTripEstimate(ratePer24h: number, periods: number): number {
  if (periods <= 0 || ratePer24h <= 0) return 0;
  return ratePer24h * periods;
}

/**
 * Formats a number in Indian Rupee format with standard lakh and crore grouping.
 * e.g. 1300 -> "₹1,300", 115000 -> "₹1,15,000"
 */
export function formatINR(amount: number): string {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
}
