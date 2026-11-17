# Architecture Decision Record (ADR) — RentWheels v2

Chronological record of architectural decisions, assumptions, and deviations.

## ADR-001: Design rules precedence and heading typography
- **Date:** 2026-11-17
- **Decision:** When `docs/design-rules/landing-page-design.md` and `docs/design-rules/figma-designer.md` disagree, `landing-page-design.md` takes precedence. Specifically, heading font weight is set to Semibold (600), rather than Regular.
- **Reason:** `landing-page-design.md` governs web visual implementation, while `figma-designer.md` provides token definitions and limits.

## ADR-002: Interpretation of the hyphen rule
- **Date:** 2026-11-17
- **Decision:** The rule banning hyphens inside copy applies to prose, headings, labels, number ranges (e.g., "35 to 40 km/l", not "35-40 km/l"), and phone numbers (using spaces). Official brand and model names containing hyphens (e.g., "Mercedes-Benz", "Ford F-150", "Thomas Built Saf-T-Liner C2") retain their official hyphens. Code identifiers, URLs, slugs, and CSS classes are exempt.
- **Reason:** Rewriting manufacturer brand trademarks is inaccurate, while UI copy strictly follows typography guidelines.

## ADR-003: Core stack selection (Astro + TypeScript + Plain CSS)
- **Date:** 2026-11-17
- **Decision:** Build with Astro (`output: 'static'`), TypeScript in strict mode, and plain CSS with CSS custom properties. No client frameworks (React, Vue), no Tailwind, no CSS-in-JS.
- **Reason:** Delivers zero-JS default pages, exact token control matching the design specification, automated build-time image pipeline (AVIF/WebP), and single-template rendering for 15 vehicle pages.

## ADR-004: Primary brand accent and surface tokens
- **Date:** 2026-11-17
- **Decision:** Accent color is burnt orange Primary 500 `#D9822B` (~70% saturation). Selected surface state uses Grayscale 750 (`#313131`) instead of Figma table's Grayscale 700 (`#444444`) to preserve contrast hierarchy. Primary button hover uses Primary 400 (lighter) to maintain contrast against dark label `#1F1F1F`.
- **Reason:** Adheres to accessibility and contrast ratios while staying grounded in RentWheels brand identity.

## ADR-005: Raw CSS value exceptions for token compliance
- **Date:** 2026-11-17
- **Decision:** The token linter (`scripts/check-tokens.mjs`) allows raw values for: 1px and 2px border widths, 2px focus ring and 2px offset, 44px minimum touch target, container max-widths (e.g. 1200px, 680px), aspect ratios (3:2, 16:9, 1:1), and blur radii (12px, 24px).
- **Reason:** These values represent structural limits and browser requirements rather than arbitrary styling tokens.

## ADR-006: Inclusive day calculation for vehicle rentals
- **Date:** 2026-11-17
- **Decision:** Rental day duration is calculated inclusively by default: `(UTC(to) - UTC(from)) / 86,400,000 + 1`. Both pickup and return days count as rental days.
- **Reason:** Standard Indian vehicle rental practice where return on the same day counts as 1 rental day. Configurable via `site.billing.mode`.

## ADR-007: Demo mode default and claim gating
- **Date:** 2026-11-17
- **Decision:** `site.demoMode` defaults to `true`. While true, the site explicitly notes in the footer and confirmation flow that fleet and rates are for demonstration, no payment is taken, and no commercial `Product`/`Offer` structured data is emitted.
- **Reason:** The repository README explicitly notes vehicle specs and prices are samples and real reservations are not taken. Prevents deceptive business claims.

## ADR-008: Live site vs repository divergence (Finding L1)
- **Date:** 2026-11-17
- **Decision:** The live site at `wheel-rent.netlify.app` showed copyright year 2026 and extensionless paths (`/browse`, `/about`, `/cart`), whereas repository HTML files used 2025 and `.html` extensions. The redesign uses dynamic build-year copyright generation (`© {year}`) and clean URLs with 301 redirects for both `.html` and legacy paths.
- **Reason:** Ensures canonical consistency across deployed environments and prevents stale copyright or broken legacy links.

## ADR-009: Omission of fake proof section
- **Date:** 2026-11-17
- **Decision:** Omit the customer proof/testimonials/star-ratings section on the home page entirely. Only verified data-derived proof (e.g. "15 vehicles across 5 types, from ₹700 per day") is displayed.
- **Reason:** Ground rule: never invent facts. No real customer testimonials or verified ratings currently exist in repository or owner records.
