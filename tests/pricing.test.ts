import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateEstimated24hRate,
  calculateTripEstimate,
  formatINR,
  roundToNearest50,
  CATEGORY_BASE_RATES,
} from '../src/scripts/pricing';

describe('Mumbai Rental Market Pricing Estimation Model (ADR-010)', () => {
  it('should round values to nearest 50 correctly', () => {
    assert.equal(roundToNearest50(1312.5), 1300);
    assert.equal(roundToNearest50(1325), 1350);
    assert.equal(roundToNearest50(1337), 1350);
    assert.equal(roundToNearest50(1840), 1850);
  });

  it('should calculate Royal Enfield Classic 350 rate as ₹1,300', () => {
    const rate = calculateEstimated24hRate({
      category: 'bike',
      segmentMultiplier: 1.25,
      capacityFactor: 0.0,
      transmissionFactor: 0.0,
      powerFactor: 0.05,
    });
    assert.equal(rate, 1300);
  });

  it('should calculate Honda Civic rate as ₹3,100', () => {
    const rate = calculateEstimated24hRate({
      category: 'car',
      segmentMultiplier: 1.5,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.05,
    });
    assert.equal(rate, 3100);
  });

  it('should calculate Ford Mustang GT rate as ₹38,900', () => {
    const rate = calculateEstimated24hRate({
      category: 'car',
      segmentMultiplier: 16.0,
      capacityFactor: 0.0,
      transmissionFactor: 0.1,
      powerFactor: 0.25,
    });
    assert.equal(rate, 38900);
  });

  it('should calculate Volvo B8RLE bus rate as ₹21,000', () => {
    const rate = calculateEstimated24hRate({
      category: 'bus',
      segmentMultiplier: 1.25,
      capacityFactor: 0.2,
      transmissionFactor: 0.1,
      powerFactor: 0.1,
    });
    assert.equal(rate, 21000);
  });

  it('should calculate Rivian R1T electric pickup truck rate as ₹18,900', () => {
    const rate = calculateEstimated24hRate({
      category: 'truck',
      segmentMultiplier: 3.6,
      capacityFactor: 0.15,
      transmissionFactor: 0.25,
      powerFactor: 0.35,
    });
    assert.equal(rate, 18900);
  });

  it('should calculate multi-period trip estimates deterministically', () => {
    assert.equal(calculateTripEstimate(3100, 1), 3100);
    assert.equal(calculateTripEstimate(3100, 3), 9300);
    assert.equal(calculateTripEstimate(3100, 0), 0);
  });

  it('should format INR currency values with Indian lakhs and crores notation', () => {
    const f1 = formatINR(1300);
    assert.ok(f1.includes('1,300'));

    const f2 = formatINR(115000);
    assert.ok(f2.includes('1,15,000'));
  });
});
