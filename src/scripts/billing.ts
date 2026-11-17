import { siteConfig } from '../config/site';

export interface RentalValidationResult {
  valid: boolean;
  periods: number;
  totalHours: number;
  error?: string;
}

/**
 * Returns today's date formatted as YYYY-MM-DD in the Asia/Kolkata timezone.
 */
export function getTodayKolkata(): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: siteConfig.timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date());
}

/**
 * Parses a date (YYYY-MM-DD) and optional time (HH:mm) assuming the Asia/Kolkata timezone (UTC+05:30).
 * Returns epoch milliseconds in UTC.
 */
export function parseKolkataDateTime(dateStr: string, timeStr = '10:00'): number | null {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return null;
  }
  const time = /^\d{2}:\d{2}$/.test(timeStr) ? timeStr : '10:00';
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const [hourStr, minStr] = time.split(':');

  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const day = parseInt(dayStr, 10);
  const hour = parseInt(hourStr, 10);
  const min = parseInt(minStr, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour) || isNaN(min)) {
    return null;
  }

  // Asia/Kolkata offset is fixed at UTC+05:30 (no daylight saving)
  const kolkataOffsetMs = (5 * 60 + 30) * 60 * 1000;
  const utcMs = Date.UTC(year, month, day, hour, min, 0, 0) - kolkataOffsetMs;
  return utcMs;
}

/**
 * Calculates rental periods based on consecutive 24-hour intervals with ceiling rounding.
 * Any additional commenced 24-hour period is rounded up to the next full period.
 */
export function calculateRentalPeriods(
  pickupDate: string,
  returnDate: string,
  pickupTime = '10:00',
  returnTime = '10:00'
): RentalValidationResult {
  if (!pickupDate || !returnDate) {
    return {
      valid: false,
      periods: 0,
      totalHours: 0,
      error: 'Please choose both pickup and return dates.',
    };
  }

  const pickupMs = parseKolkataDateTime(pickupDate, pickupTime);
  const returnMs = parseKolkataDateTime(returnDate, returnTime);

  if (pickupMs === null || returnMs === null) {
    return {
      valid: false,
      periods: 0,
      totalHours: 0,
      error: 'Invalid date or time format provided.',
    };
  }

  if (returnMs <= pickupMs) {
    return {
      valid: false,
      periods: 0,
      totalHours: 0,
      error: 'Return time must be after the pickup time.',
    };
  }

  const diffMs = returnMs - pickupMs;
  const totalHours = diffMs / (1000 * 60 * 60);

  // Ceiling rounding on 24-hour periods
  const periods = Math.max(1, Math.ceil(totalHours / 24));

  if (periods > siteConfig.billing.maxTripDays) {
    return {
      valid: false,
      periods,
      totalHours,
      error: `Maximum trip duration is ${siteConfig.billing.maxTripDays} periods (30 days).`,
    };
  }

  return {
    valid: true,
    periods,
    totalHours,
  };
}

/**
 * Human-readable period summary (e.g., "1 period (24 hours)", "3 periods (72 hours)")
 */
export function formatPeriodSummary(periods: number): string {
  if (periods <= 0) return '0 periods';
  const hours = periods * 24;
  if (periods === 1) {
    return '1 rental period (24 hours)';
  }
  return `${periods} rental periods (${hours} hours)`;
}
