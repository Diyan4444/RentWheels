import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { vehicles, getVehicleBySlug, getVehiclesByCategory } from '../src/data/vehicles';

describe('Vehicle Data Invariants & Schema Verification (Section 4.2)', () => {
  it('should contain exactly 15 vehicles in the dataset', () => {
    assert.equal(vehicles.length, 15);
  });

  it('should have exactly 3 vehicles in each of the 5 categories', () => {
    const categories = ['bike', 'car', 'scooter', 'bus', 'truck'] as const;
    for (const cat of categories) {
      const filtered = getVehiclesByCategory(cat);
      assert.equal(filtered.length, 3, `Expected 3 vehicles for category: ${cat}`);
    }
  });

  it('should ensure all slugs are unique, non-empty, and lowercase kebab-case', () => {
    const slugs = new Set<string>();
    for (const v of vehicles) {
      assert.ok(v.slug && v.slug.length > 0, `Vehicle ${v.name} has empty slug`);
      assert.match(v.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `Slug ${v.slug} is not valid kebab-case`);
      assert.ok(!slugs.has(v.slug), `Duplicate slug detected: ${v.slug}`);
      slugs.add(v.slug);
    }
  });

  it('should ensure all vehicles have valid positive 24h rates and seating >= 1', () => {
    for (const v of vehicles) {
      assert.ok(v.estimatedRatePer24h > 0, `Vehicle ${v.slug} has non-positive rate`);
      assert.ok(v.seats >= 1, `Vehicle ${v.slug} has invalid seat count: ${v.seats}`);
      assert.ok(v.brand.length > 0, `Vehicle ${v.slug} missing brand`);
      assert.ok(v.images.length === 3, `Vehicle ${v.slug} should have exactly 3 images`);
    }
  });

  it('should ensure Rivian R1T has EV specs and NO km/l efficiency', () => {
    const rivian = getVehicleBySlug('rivian-r1t');
    assert.ok(rivian, 'Rivian R1T must exist in dataset');
    assert.equal(rivian.specs.fuelType, 'Electric');
    assert.equal(rivian.efficiency, undefined, 'Rivian R1T must NOT have km/l efficiency');
    assert.ok(rivian.evSpecs, 'Rivian R1T must have EV specifications');
    assert.match(rivian.evSpecs.batteryCapacity, /kWh/);
    assert.match(rivian.evSpecs.claimedRange, /km/);
  });

  it('should ensure all vehicles have primary verifiable source URLs', () => {
    for (const v of vehicles) {
      assert.ok(v.specs.sourceUrl.startsWith('https://'), `Vehicle ${v.slug} missing https source URL`);
      assert.match(v.specs.accessedDate, /^\d{4}-\d{2}-\d{2}$/, `Vehicle ${v.slug} has invalid access date`);
    }
  });
});
