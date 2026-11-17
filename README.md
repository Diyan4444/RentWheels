# RentWheels

**More than a ride. A journey worth taking.**

RentWheels is an automotive rental platform for Mumbai, bringing five distinct vehicle categories — cars, motorcycles, scooters, executive coaches, and commercial trucks — into a unified browsing and booking enquiry experience. Customers can select schedules, review transparent indicative 24-hour rates, stage multi-vehicle trips, and submit a single consolidated enquiry.

- **Live Website:** [wheel-rent.netlify.app](https://wheel-rent.netlify.app/)
- **GitHub Repository:** [github.com/Diyan4444/RentWheels](https://github.com/Diyan4444/RentWheels)

---

## Key Features

- **Multi-Category Fleet Discovery:** Explore 15 vehicles across 5 categories (cars, motorcycles, scooters, coaches, and trucks) backed by verified primary manufacturer specifications.
- **Dedicated Vehicle Routes:** 15 individual vehicle detail pages (`/vehicles/[slug]`) featuring multi-angle photography galleries, verified technical specifications, and real-time 24-hour rental rate calculators.
- **Exact 24-Hour Rental Billing:** Rental duration is calculated in consecutive 24-hour periods starting from the customer's selected pickup time (`Asia/Kolkata` timezone), with ceiling rounding for any commenced period. Calendar-day billing is not used.
- **Indicative Price Estimation:** Transparent, formula-based rate estimates benchmarked against Mumbai market categories, eliminating arbitrary sample pricing.
- **Trip Staging (Cart):** Client-side journey staging via `localStorage` allowing customers to combine up to 5 vehicles across any categories into one consolidated trip request.
- **Booking Enquiry Workflow:** Genuine Netlify Forms submission (`booking-request`) with client validation, confirmation states, and reference code generation. No instant booking claims or false payment processing.
- **Cinematic Automotive Landing Page:** Asymmetric editorial composition with floating translucent glass navbar, integrated vehicle photography, and an architectural journey-planning search bar.
- **Category Filtering & Search:** Category-specific routes (`/fleet/cars`, `/fleet/bikes`, etc.) and instant keyword search across vehicle names, categories, and brands.
- **Backward Compatibility:** Permanent 301 redirects configured in `netlify.toml` for all legacy HTML endpoints.

---

## Technology Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation, file-based routing)
- **Language:** TypeScript 5 (Strict Mode enabled)
- **Typography:** Geist & Geist Mono (`@fontsource-variable/geist`, `@fontsource-variable/geist-mono`)
- **Styling:** Plain CSS with centralized Design Tokens (`tokens.css`, `base.css`)
- **Testing:** Node.js native test runner with `tsx` (22 automated unit tests)
- **Forms & Hosting:** [Netlify](https://www.netlify.com/) (Netlify Forms, static hosting, security headers)

---

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Diyan4444/RentWheels.git
   cd RentWheels
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/](http://localhost:3000/) in your browser.

4. **Run type checks:**
   ```bash
   npm run typecheck
   ```

5. **Run automated test suite:**
   ```bash
   npm test
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```
   Static files are generated into the `dist/` directory (31 static routes).

---

## Project Structure

```text
RentWheels/
├── public/                  # Static assets and original vehicle photography
├── src/
│   ├── components/          # Reusable Astro UI components (VehicleCard, etc.)
│   ├── config/              # Centralized site and billing configuration (siteConfig)
│   ├── data/                # 15 vehicles with verified manufacturer specifications
│   ├── layouts/             # BaseLayout with floating glass pill navbar and footer
│   ├── pages/               # 31 file-based static routes (Home, Fleet, Vehicles, Trip)
│   ├── scripts/             # Pure calculation modules (billing.ts, pricing.ts, trip.ts)
│   └── styles/              # Design tokens and global CSS (tokens.css, base.css)
├── tests/                   # 22 automated tests for billing, pricing, and vehicle data
├── docs/                    # Architecture Decision Records (ADR) and pricing methodology
├── astro.config.mjs         # Astro static site configuration
├── netlify.toml             # Netlify build, security headers, and 301 legacy redirects
├── package.json             # Scripts, dependencies, and rollup wasm override
└── tsconfig.json            # Strict TypeScript configuration
```

---

## Rental Pricing and Enquiries

### Exact 24-Hour Rental Billing Rule
RentWheels calculates rental durations in **consecutive 24-hour periods** starting from the selected pickup date and time in the `Asia/Kolkata` timezone:
- Pickup: 12 December, 10:00 AM &bull; Return: 13 December, 10:00 AM = **1 rental period (24 hours)**
- Pickup: 12 December, 10:00 AM &bull; Return: 14 December, 10:00 AM = **2 rental periods (48 hours)**
- Pickup: 12 December, 10:00 AM &bull; Return: 14 December, 4:00 PM = **3 rental periods** (partial period rounded up via ceiling rule)

Calendar-day billing is not used. A same-day rental or rental under 24 hours counts as a minimum of 1 rental period.

### Price Estimates
Displayed rates are **indicative estimates** calculated via a deterministic estimation formula based on vehicle class, power output, seating capacity, and transmission. They represent baseline planning estimates for the Mumbai market, not final commercial quotations.

### Booking Enquiries (Demonstration Mode)
The platform operates in demonstration request mode:
- Submitting an enquiry via `/trip` sends details to the reservations team through Netlify Forms.
- **No online payments** are collected or processed on this website.
- Submissions generate an enquiry reference code for verification; they do not constitute instant confirmed reservations.

---

## Author & Contact

- **Author:** Diyan Shah
- **GitHub:** [Diyan4444](https://github.com/Diyan4444)
- **Email:** [diyanshah2301@gmail.com](mailto:diyanshah2301@gmail.com)
- **Repository:** [https://github.com/Diyan4444/RentWheels](https://github.com/Diyan4444/RentWheels)
- **Live Website:** [https://wheel-rent.netlify.app/](https://wheel-rent.netlify.app/)

---

## License

No open-source license has been specified for this project. All rights are reserved by the author.
