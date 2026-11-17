export interface TripState {
  version: 1;
  pickupDate: string | null;
  returnDate: string | null;
  pickupTime: string;
  returnTime: string;
  items: string[]; // vehicle slugs
  updatedAt: number;
}

const STORAGE_KEY = 'rentwheels.trip.v1';
const LEGACY_STORAGE_KEY = 'rentWheelsCart';

function getInitialState(): TripState {
  return {
    version: 1,
    pickupDate: null,
    returnDate: null,
    pickupTime: '10:00',
    returnTime: '10:00',
    items: [],
    updatedAt: Date.now(),
  };
}

let inMemoryFallback: TripState = getInitialState();

export function getTripState(): TripState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      migrateLegacyCart();
      return inMemoryFallback;
    }
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 1 && Array.isArray(parsed.items)) {
      return parsed;
    }
    return inMemoryFallback;
  } catch {
    return inMemoryFallback;
  }
}

export function saveTripState(state: TripState): boolean {
  state.updatedAt = Date.now();
  inMemoryFallback = state;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    syncTripHeaderCount();
    window.dispatchEvent(new Event('rentwheels:trip-updated'));
    return true;
  } catch {
    syncTripHeaderCount();
    return false;
  }
}

export function addToTrip(slug: string): { success: boolean; message: string } {
  const state = getTripState();
  if (state.items.includes(slug)) {
    return { success: false, message: 'Already in your trip' };
  }
  if (state.items.length >= 5) {
    return { success: false, message: 'You can add up to 5 vehicles in one trip request' };
  }
  state.items.push(slug);
  saveTripState(state);
  return { success: true, message: 'Vehicle added to your trip' };
}

export function removeFromTrip(slug: string): boolean {
  const state = getTripState();
  const initialLength = state.items.length;
  state.items = state.items.filter((item) => item !== slug);
  if (state.items.length !== initialLength) {
    saveTripState(state);
    return true;
  }
  return false;
}

export function isInTrip(slug: string): boolean {
  const state = getTripState();
  return state.items.includes(slug);
}

export function getTripCount(): number {
  return getTripState().items.length;
}

export function syncTripHeaderCount(): void {
  if (typeof document === 'undefined') return;
  const badge = document.getElementById('headerTripCount');
  if (badge) {
    const count = getTripCount();
    badge.textContent = count.toString();
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
}

export function showToast(message: string, durationMs = 4000): void {
  if (typeof document === 'undefined') return;
  const region = document.getElementById('toastRegion');
  if (!region) return;

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <a href="/trip" class="toast-action">View Trip</a>
  `;
  region.innerHTML = '';
  region.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, durationMs);
}

/**
 * Migrates old legacy rentWheelsCart to rentwheels.trip.v1
 */
function migrateLegacyCart(): void {
  try {
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!legacy) return;
    const parsed = JSON.parse(legacy);
    if (Array.isArray(parsed)) {
      const state = getInitialState();
      for (const item of parsed) {
        if (item && item.title) {
          const t = item.title.toLowerCase();
          if (t.includes('classic 350')) state.items.push('royal-enfield-classic-350');
          else if (t.includes('ktm 390')) state.items.push('ktm-390-duke');
          else if (t.includes('bmw')) state.items.push('bmw-r-1250-gs');
          else if (t.includes('civic')) state.items.push('honda-civic');
          else if (t.includes('rav4')) state.items.push('toyota-rav4-hybrid');
          else if (t.includes('mustang')) state.items.push('ford-mustang-gt');
          else if (t.includes('vespa')) state.items.push('vespa-gts-300-hpe');
          else if (t.includes('tmax')) state.items.push('yamaha-tmax-tech-max');
          else if (t.includes('adv350') || t.includes('adv 350')) state.items.push('honda-adv350');
          else if (t.includes('volvo')) state.items.push('volvo-b8rle');
          else if (t.includes('mercedes') || t.includes('tourismo')) state.items.push('mercedes-benz-tourismo');
          else if (t.includes('thomas') || t.includes('saf-t-liner')) state.items.push('thomas-built-saf-t-liner-c2');
          else if (t.includes('f-150') || t.includes('f150')) state.items.push('ford-f-150');
          else if (t.includes('kenworth')) state.items.push('kenworth-t680');
          else if (t.includes('rivian')) state.items.push('rivian-r1t');
        }
      }
      state.items = Array.from(new Set(state.items));
      saveTripState(state);
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    }
  } catch {
    // Ignore migration failures safely
  }
}

// Auto sync on client load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    syncTripHeaderCount();
  });
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      syncTripHeaderCount();
    }
  });
}
