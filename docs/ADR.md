# Architecture Decision Record (ADR) — RentWheels v2

Chronological record of architectural decisions, assumptions, and deviations.

## ADR-001: Design rules precedence and heading typography
- **Date:** 2026-11-17
- **Decision:** When `docs/design-rules/landing-page-design.md` and `docs/design-rules/figma-designer.md` disagree, `landing-page-design.md` takes precedence. Specifically, heading font weight is set to Semibold (600), rather than Regular.
- **Reason:** `landing-page-design.md` governs web visual implementation, while `figma-designer.md` provides token definitions and limits.
- **Status:** Approved by Owner.

## ADR-002: Interpretation of the hyphen rule
- **Date:** 2026-11-17
- **Decision:** The rule banning hyphens inside copy applies to prose, headings, labels, number ranges (e.g., "35 to 40 km/l", not "35-40 km/l"), and phone numbers (using spaces). Official brand and model names containing hyphens (e.g., "Mercedes-Benz", "Ford F-150", "Thomas Built Saf-T-Liner C2") retain their official hyphens. Code identifiers, URLs, slugs, and CSS classes are exempt.
- **Reason:** Rewriting manufacturer brand trademarks is inaccurate, while UI copy strictly follows typography guidelines.
- **Status:** Approved by Owner.

## ADR-003: Core stack selection (Astro + TypeScript + Plain CSS)
- **Date:** 2026-11-17
- **Decision:** Build with Astro (`output: 'static'`), TypeScript in strict mode, and plain CSS with CSS custom properties. No client frameworks (React, Vue), no Tailwind, no CSS-in-JS.
- **Reason:** Delivers zero-JS default pages, exact token control matching the design specification, automated build-time image pipeline (AVIF/WebP), and single-template rendering for 15 vehicle pages.
- **Status:** Approved by Owner.

## ADR-004: Primary brand accent and surface tokens
- **Date:** 2026-11-17
- **Decision:** Accent color is burnt orange Primary 500 `#D9822B` (~70% saturation). Selected surface state uses Grayscale 750 (`#313131`) instead of Figma table's Grayscale 700 (`#444444`) to preserve contrast hierarchy. Primary button hover uses Primary 400 (lighter) to maintain contrast against dark label `#1F1F1F`.
- **Reason:** Adheres to accessibility and contrast ratios while staying grounded in RentWheels brand identity.
- **Status:** Approved by Owner.

## ADR-005: Raw CSS value exceptions for token compliance
- **Date:** 2026-11-17
- **Decision:** The token linter (`scripts/check-tokens.mjs`) allows raw values for: 1px and 2px border widths, 2px focus ring and 2px offset, 44px minimum touch target, container max-widths (e.g. 1200px, 680px), aspect ratios (3:2, 16:9, 1:1), and blur radii (12px, 24px).
- **Reason:** These values represent structural limits and browser requirements rather than arbitrary styling tokens.
- **Status:** Approved by Owner.

## ADR-006: 24-hour rental period billing (Owner Confirmed)
- **Date:** 2026-11-17
- **Decision:** Rental duration is calculated on consecutive **24-hour periods** starting from the customer's selected pickup timestamp, **not** inclusive calendar days. Any additional commenced 24-hour period is rounded up to the next full period (ceiling rounding).
  $$\text{Hours} = \frac{\text{UTC}(\text{return}) - \text{UTC}(\text{pickup})}{3{,}600{,}000}$$
  $$\text{Rental Periods} = \max\left(1, \left\lceil \frac{\text{Hours}}{24} \right\rceil\right)$$
  - Example 1: 12 Dec 10:00 to 13 Dec 10:00 = 24.0h -> 1 rental period.
  - Example 2: 12 Dec 10:00 to 14 Dec 10:00 = 48.0h -> 2 rental periods.
  - Example 3: 12 Dec 10:00 to 14 Dec 16:00 = 54.0h -> 3 rental periods (partial period rounded up).
  - Timezone: `Asia/Kolkata` is used for all user-facing inputs and boundary calculations.
- **Reason:** Explicitly confirmed by owner to reflect true commercial 24-hour vehicle hire practices rather than hotel-style nights or inclusive calendar days.
- **Status:** Approved by Owner.

## ADR-007: Demo mode default and genuine booking enquiry workflow
- **Date:** 2026-11-17
- **Decision:** `site.demoMode` defaults to `true`. While true, the website operates a transparent booking enquiry workflow:
  1. Vehicles, cart, and trip-staging functionality are fully preserved.
  2. Customers review selected vehicles, duration, and indicative estimated rates.
  3. Form submits through Netlify Forms without claiming payment or instant confirmation.
  4. Confirmation page displays a reference code only after valid submission.
  5. Notification recipient is set to `dailykarma1910@gmail.com`. Public contact email is `diyanshah2301@gmail.com`.
- **Reason:** Replaces the fake 2-second alert checkout with an honest, functional lead-generation pipeline.
- **Status:** Approved by Owner.

## ADR-008: Live site vs repository divergence (Finding L1)
- **Date:** 2026-11-17
- **Decision:** The live site at `wheel-rent.netlify.app` showed copyright year 2026 and extensionless paths (`/browse`, `/about`, `/cart`), whereas repository HTML files used 2025 and `.html` extensions. The redesign uses dynamic build-year copyright generation (`© {year}`) and clean URLs with 301 redirects for both `.html` and legacy paths.
- **Reason:** Ensures canonical consistency across deployed environments and prevents stale copyright or broken legacy links.
- **Status:** Approved by Owner.

## ADR-009: Omission of fake proof section
- **Date:** 2026-11-17
- **Decision:** Omit the customer proof/testimonials/star-ratings section on the home page entirely. Only verified data-derived proof (e.g. "15 vehicles across 5 types") is displayed.
- **Reason:** Ground rule: never invent facts. No real customer testimonials or verified ratings currently exist in repository or owner records.
- **Status:** Approved by Owner.

## ADR-010: Mumbai rental market transparent pricing estimation model
- **Date:** 2026-11-17
- **Decision:** Remove all arbitrary sample prices. Implement an objective, transparent, and centralized pricing estimation formula based on researched Mumbai rental market benchmarks across all five categories (cars, bikes, scooters, buses, trucks). Indicative prices are labeled as estimates subject to confirmation, calculated per 24-hour period.
- **Reason:** Owner instructed to remove sample prices and ground pricing in verifiable Mumbai market rates.
- **Status:** Approved by Owner.
