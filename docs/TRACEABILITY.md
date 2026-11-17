# Traceability Matrix — RentWheels v2

Mapping of verified findings (P1 through L1) to architectural remedies, test evidence, and completion status.

| ID | Category | Original Finding Summary | Planned / Implemented Remedy | Target Phase | Status |
|---|---|---|---|---|---|
| **P1** | Performance | 21 images on home (~87 MB) + 2.4 MB fixed `bg.png`; repo ~208 MB across 52 images | Remove fixed background; build AVIF/WebP image pipeline via Astro; responsive srcsets; budgets under 1.5MB | Phase 1, 4, 9 | Planned |
| **P2** | Performance | Unscaled 2816×1536 PNG card images displayed at 400×200px (up to 8.7 MB each) | Generate appropriately sized variants for cards, hero, and galleries | Phase 1, 9 | Planned |
| **P3** | Performance | No `loading`, `decoding`, `srcset`, `sizes`, `width` or `height` attributes; all 25 requests load eagerly | Use responsive image components with explicit aspect ratios, `loading="lazy"`, `decoding="async"`, and `fetchpriority="high"` for hero only | Phase 4, 9 | Planned |
| **P4** | Performance | `body` has fixed 2.4 MB background with gradient overlay; scroll repaints | Remove fixed background entirely; use flat Surface/Primary `#181818` background | Phase 2, 4 | Planned |
| **P5** | Performance | Detail pages pull full 8MB+ images into 300×200 boxes | Use responsive gallery thumbnails and optimized main image variants | Phase 6, 9 | Planned |
| **P6** | Performance | `dropDown` animation starts `body` at opacity 0 with 100px offset, blanking first second | Eliminate `dropDown` animation; paint content immediately; zero layout shifts | Phase 2, 4 | Planned |
| **P7** | Performance | Gallery onerror requests external `via.placeholder.com` host | Use local styled fallback surface displaying vehicle name without 3rd party calls | Phase 6, 9 | Planned |
| **V1** | Visual | 5 mixed font families; no webfont (Cambria, Trebuchet, Verdana, Lucida, sans-serif) | Single typeface family: Geist Variable (400, 500, 600), self-hosted WOFF2 with size-adjusted system fallback | Phase 1, 2 | Planned |
| **V2** | Visual | `-webkit-text-stroke: 2px black` on headings, orange-yellow gradient on text | Clean typography tokens; Semibold weights; single subtle hero text gradient (`#FFFFFF` to `#9B9B9B`) | Phase 2, 4 | Planned |
| **V3** | Visual | Emoji icons (fuel, seats, etc.) and mismatched orange PNG icons | Unified Phosphor Regular inline SVG icons throughout | Phase 2, 3, 5 | Planned |
| **V4** | Visual | Hero is DRIVE YOUR ADVENTURE over sunset photo with no offer, CTA or proof | Classic Hero (Layout A) with offer, dates/type selector, Primary CTA "Find a vehicle", data-derived proof line | Phase 4 | Planned |
| **V5** | Visual | `scale(1.1)` hover on cards and category tiles overlapping neighbors | Restrained interactive states: subtle background shifts and 1px/scale(0.98) micro-interactions on button press | Phase 2, 5 | Planned |
| **V6** | Visual | Cards `width: 28%`, `display: flexbox` (invalid); distorted stretched/squashed images | CSS Grid (1 col mobile, 2 col tablet, 3 col desktop); 3:2 aspect ratio with `object-fit: cover` | Phase 2, 5 | Planned |
| **V7** | Visual | Two competing filled buttons per card (+ Cart, View); inline styles everywhere | Single primary card affordance (title links to detail); quiet secondary "Add to trip" and compare checkbox | Phase 2, 5 | Planned |
| **V8** | Visual | "Why choose RentWheels" inside `div.footer`; real footer is 1 line without navigation | Semantic `<footer class="site-footer">` with columns for Fleet, Company, Legal, copyright, and demo mode notice | Phase 3 | Planned |
| **V9** | Visual | Fixed navbar scrolls out of view due to `body` transform containing block | Clean fixed/sticky navbar without transformed ancestor; verified scroll position | Phase 3 | Planned |
| **V10** | Visual | Contrast risks: `rgb(175, 175, 175)` on dark, cart text black on dark | Token-based color system; automated `check-contrast.mjs` enforcing WCAG AA (4.5:1 text, 3:1 UI) | Phase 2 | Planned |
| **V11** | Visual | Mixed art direction; watermark marks visible on Honda Civic and Classic 350 images | Comprehensive image audit; mark detection; exclude watermarked candidates from public display | Phase 1, 9 | Planned |
| **V12** | Visual | Low-resolution gallery images (e.g. 320×226 Tourismo, 537×350 Thomas) | Audit images, display only `ok` quality images in public galleries; log gaps in `DATA_TO_CONFIRM.md` | Phase 6, 9 | Planned |
| **R1** | Responsive | Zero `@media` queries in CSS and HTML | Modern mobile-first CSS with 640px, 768px, 1024px, 1440px breakpoints | Phase 2 | Planned |
| **R2** | Responsive | 390px scroll width is 906px; nav overflows; elements fall off screen | Fully responsive layouts; verified zero horizontal overflow at 320px and 390px viewports | Phase 2-8 | Planned |
| **R3** | Responsive | 1440px scroll width is 1460px; 20px content clipped by `overflow-x: hidden` | Fix container widths (1200px max centered, proper responsive gutters) | Phase 2 | Planned |
| **R4** | Responsive | Fixed 70px/100px hero type; cards remain 28% width (109px on phone) | Fluid/stepped typography scale per breakpoint; responsive grid columns | Phase 2, 4, 5 | Planned |
| **N1** | Navigation | Category tiles `<a href="#">` with JS preventDefault, hardcoded counts, no active state | Clean category links to `/fleet/cars`, etc.; dynamic counts derived from data | Phase 3, 5 | Planned |
| **N2** | Navigation | Current page not indicated in navigation | `aria-current="page"` and visible Surface/Secondary pill indicator | Phase 3 | Planned |
| **N3** | Navigation | Search input in navbar does nothing on Cart, About, and detail pages | Search button opens accessible native `<dialog>` search across entire fleet on every page | Phase 3 | Planned |
| **N4** | Navigation | `about.html` does not load `project.js`, missing cart count badge | Shared layout ensures persistent header with live trip badge on all routes | Phase 3 | Planned |
| **N5** | Navigation | No footer navigation or breadcrumbs; back button links to `index.html` not fleet | Structured footer links; breadcrumbs on detail pages; back to filtered fleet | Phase 3, 6 | Planned |
| **S1** | Search | Title substring match on current page only; blank page on no match; no URL state | Normalized multi-token search dialog; composed empty state; shareable URL query state | Phase 3, 5 | Planned |
| **S2** | Search | `browse.html` duplicates home cards without filters or sorting | Unified `/fleet` route with search, category chips, rate range, seat filters, and sort options | Phase 5 | Planned |
| **S3** | Search | Category filter and search do not combine; cannot reset without reload | Combined pure filter/search pipeline; active filter chips with "Clear all" | Phase 5 | Planned |
| **C1** | Cart | `alert()` used for add to cart and checkout | Non-blocking polite accessible Toast notifications (`role="status"`) | Phase 2, 7 | Planned |
| **C2** | Cart | Fake checkout 2s timer alerting "Payment Successful! Your ride is booked" | Honest booking request workflow: form submission via Netlify Forms; confirmation code | Phase 7 | Planned |
| **C3** | Cart | Cart lacks dates, duration, pickup place, driver details; sums daily rates without days | Structured trip state with dates, inclusive day count, per-vehicle subtotals, and trip total | Phase 7 | Planned |
| **C4** | Cart | Prices parsed from text using regex (`₹900 /day` vs `₹900 / day`) | Pure typed data (`pricePerDay: number`); totals calculated directly from data schema | Phase 1, 7 | Planned |
| **C5** | Cart | Cart stores title, price, absolute img src in localStorage; rendered with `innerHTML` | Store only vehicle slugs in `rentwheels.trip.v1`; resolve details from data; safe DOM methods | Phase 7 | Planned |
| **C6** | Cart | No error handling when localStorage is blocked or contains corrupt JSON | `try/catch` wrapping; in-memory fallback; schema validation on read; graceful degradation | Phase 7 | Planned |
| **C7** | Cart | Cart fallback in black text on dark background | Consistent semantic tokens for empty state and initial loading skeleton | Phase 2, 7 | Planned |
| **T1** | Content | Unverifiable business claims (Fully Insured, Best Price Guarantee, 24/7 roadside) | Removed unsupported claims; honest copy; documented in `DATA_TO_CONFIRM.md` | Phase 4, 8 | Planned |
| **T2** | Content | Marketing superlatives (ultimate, seamless, unmatched) and hyphens in copy | Editorial tone; plain specific copy; strict adherence to hyphen-free copy rules | Phase 4-8 | Planned |
| **T3** | Content | Broken case rules (DRIVE YOUR ADVENTURE, CARS, FEATURED VEHICLES) | Strict Sentence case across all headings, buttons, and labels | Phase 2-8 | Planned |
| **T4** | Content | All 15 detail descriptions copied from a single template with swapped names | Unique, factual summaries generated from confirmed vehicle attributes | Phase 1, 6 | Planned |
| **T5** | Content | Title tag "RentWheels - Car Rental" on all pages despite diverse fleet | Distinct, accurate `<title>` per route (e.g. "Cars for rent \| RentWheels") | Phase 1, 8 | Planned |
| **T6** | Content | Copyright year mismatch (2025 in repo, 2026 on cart and live site) | Dynamic build-time year evaluation (`© {year} RentWheels`) | Phase 1, 3 | Planned |
| **T7** | Content | "Built with ♥ in India" boilerplate in footers | Replaced with clean, professional footer navigation and copyright line | Phase 3 | Planned |
| **T8** | Content | Prices lack thousands separator; inconsistent spacing (`₹1700`, `/day` vs `/ day`) | `Intl.NumberFormat('en-IN')` formatting (₹1,700 per day) | Phase 1, 5, 6 | Planned |
| **A1** | Accessibility | All images have `alt=""`; detail galleries have non-descriptive labels | Descriptive alt text for all vehicle photography; decorative icons `aria-hidden` | Phase 1, 6, 9 | Planned |
| **A2** | Accessibility | No semantic landmarks; multiple `<h1>` tags on home page | Semantic `<header>`, `<main>`, `<footer>`, `<nav>`; exactly one `<h1>` per page | Phase 1, 3, 4 | Planned |
| **A3** | Accessibility | Buttons nested inside `<a>` tags; category links to `#` | Valid HTML; proper semantic buttons and links; no nested interactive controls | Phase 2, 5 | Planned |
| **A4** | Accessibility | No custom `:focus-visible` styles; search input unlabelled | High-contrast 2px focus ring with 2px offset; explicit visible labels | Phase 2, 3 | Planned |
| **A5** | Accessibility | No `prefers-reduced-motion` handling; site slides in on load | Dedicated `@media (prefers-reduced-motion: reduce)` disabling motion and reveals | Phase 2, 4 | Planned |
| **A6** | Accessibility | Meaning conveyed via inconsistent emoji (fuel, seats) | Standardized Phosphor icons with text labels or screen-reader descriptions | Phase 2, 5 | Planned |
| **E1** | SEO | Missing meta description, Open Graph, favicon, robots.txt, sitemap, 404, netlify.toml | Full SEO helper, Open Graph/Twitter meta, icons, robots.txt, sitemap, 404, netlify config | Phase 1, 8, 13 | Planned |
| **E2** | SEO | `lang="en"` instead of `en-IN` | Set `<html lang="en-IN">` globally | Phase 1 | Planned |
| **E3** | SEO | Missing privacy/terms pages, contact details, skip link | Accessible skip link, draft terms/privacy pages, conditional contact page | Phase 3, 8 | Planned |
| **E4** | SEO | `about.html` and `browse.html` unclosed `</html>`; repeated manual nav | Single layout template with valid HTML structure and shared header/footer | Phase 1, 3 | Planned |
| **E5** | SEO | No structured data | Emitted JSON-LD (`BreadcrumbList`, `FAQPage`, `WebSite`) with safe serialization | Phase 8 | Planned |
| **K1** | Code | 15 near-identical 6KB detail pages with duplicate CSS `<style>` and repeated specs | Single Astro `[slug].astro` template reading from typed `vehicles.ts` data store | Phase 1, 6 | Planned |
| **K2** | Code | Single 8.7KB CSS with invalid declarations, unused rules, snake/kebab mixed classes | Modular CSS with strict design tokens (`tokens.css`, `base.css`, `components.css`) | Phase 2 | Planned |
| **K3** | Code | 7.8KB JS closure with global window functions, inline onclick, unsafe innerHTML | Modular TypeScript scripts, event delegation, safe DOM textContent/templates | Phase 7 | Planned |
| **K4** | Code | Inconsistent directory naming (`350`, `GS`, `ADV`, `merce`, `Honda Civic`); missing license | Clean asset mapping to slugs; structured project directories; package.json | Phase 1, 9 | Planned |
| **D1** | Data | Electric Rivian R1T listed with 30 km/l fuel; Civic/F-150 unverified fuel values | Omit `efficiency` for Rivian R1T; mark all specs `specsVerified: false` pending owner confirmation | Phase 1, 6 | Planned |
| **D2** | Data | Mileage stored as free text / ranges ("35-40 km/l") | Structured schema (`efficiency?: { value: string; unit: 'km/l' }`); range formatted as "35 to 40" | Phase 1, 6 | Planned |
| **D3** | Data | Category count ("3 available") hardcoded by hand | Dynamic derived counts from `vehicles.ts` data | Phase 1, 5 | Planned |
| **L1** | Live vs Repo | Live site displays 2026 copyright and clean URLs vs 2025 and `.html` in repo | Dynamic copyright year; clean URLs with 301 redirects for legacy URLs; documented in ADR | Phase 0, 1, 13 | Documented |
