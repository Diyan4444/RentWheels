import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateRentalPeriods, parseKolkataDateTime, formatPeriodSummary } from '../src/scripts/billing';

describe('24-Hour Rental Billing Calculations (ADR-006)', () => {
  it('should calculate exactly 1 period for a 24-hour rental', () => {
    // 12 Dec 10:00 AM to 13 Dec 10:00 AM
    const res = calculateRentalPeriods('2026-12-12', '2026-12-13', '10:00', '10:00');
    assert.equal(res.valid, true);
    assert.equal(res.totalHours, 24);
    assert.equal(res.periods, 1);
  });

  it('should calculate exactly 2 periods for a 48-hour rental', () => {
    // 12 Dec 10:00 AM to 14 Dec 10:00 AM
    const res = calculateRentalPeriods('2026-12-12', '2026-12-14', '10:00', '10:00');
    assert.equal(res.valid, true);
    assert.equal(res.totalHours, 48);
    assert.equal(res.periods, 2);
  });

  it('should round up partial 24-hour periods using ceiling rounding', () => {
    // 12 Dec 10:00 AM to 14 Dec 4:00 PM (54 hours -> 3 periods)
    const res = calculateRentalPeriods('2026-12-12', '2026-12-14', '10:00', '16:00');
    assert.equal(res.valid, true);
    assert.equal(res.totalHours, 54);
    assert.equal(res.periods, 3);
  });

  it('should count a same-day rental as 1 rental period (minimum period = 1)', () => {
    // 12 Dec 10:00 AM to 12 Dec 6:00 PM (8 hours -> 1 period)
    const res = calculateRentalPeriods('2026-12-12', '2026-12-12', '10:00', '18:00');
    assert.equal(res.valid, true);
    assert.equal(res.totalHours, 8);
    assert.equal(res.periods, 1);
  });

  it('should reject invalid dates where return is before or equal to pickup', () => {
    // Return before pickup
    const res1 = calculateRentalPeriods('2026-12-14', '2026-12-12', '10:00', '10:00');
    assert.equal(res1.valid, false);
    assert.match(res1.error ?? '', /Return time must be after/);

    // Return same as pickup
    const res2 = calculateRentalPeriods('2026-12-12', '2026-12-12', '10:00', '10:00');
    assert.equal(res2.valid, false);
    assert.match(res2.error ?? '', /Return time must be after/);
  });

  it('should reject trips exceeding 30 periods (720 hours)', () => {
    // 35 days rental
    const res = calculateRentalPeriods('2026-12-01', '2027-01-05', '10:00', '10:00');
    assert.equal(res.valid, false);
    assert.match(res.error ?? '', /Maximum trip duration is 30 periods/);
  });

  it('should parse Asia/Kolkata date times reliably across date boundaries', () => {
    // Check UTC epoch offset: Asia/Kolkata is UTC+05:30 (19800000 ms)
    const ms = parseKolkataDateTime('2026-12-12', '10:00');
    assert.ok(ms !== null);

    const utcDate = new Date(ms!);
    // 10:00 AM IST is 04:30 AM UTC
    assert.equal(utcDate.getUTCHours(), 4);
    assert.equal(utcDate.getUTCMinutes(), 30);
  });

  it('should format human-readable duration correctly', () => {
    assert.equal(formatPeriodSummary(1), '1 rental period (24 hours)');
    assert.equal(formatPeriodSummary(3), '3 rental periods (72 hours)');
    assert.equal(formatPeriodSummary(0), '0 periods');
  });
});
