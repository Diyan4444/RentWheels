# Preservation and Migration Map — RentWheels v2

This document records the exact mapping of existing pages, data points, user interactions, and assets to the target architecture.

## 1. Page and Route Mapping

| Existing File | Live URL Equivalent | Target v2 Route | Target File | Status / Action |
|---|---|---|---|---|
| `index.html` | `/` | `/` | `src/pages/index.astro` | Replaced by Astro home page with classic Layout A; 301 redirect for `/index.html` |
| `browse.html` | `/browse` | `/fleet` | `src/pages/fleet/index.astro` | Replaced by unified fleet directory with filters & sort; 301 redirect for `/browse` and `/browse.html` |
| `about.html` | `/about` | `/about` | `src/pages/about.astro` | Replaced by factual about page; 301 redirect for `/about.html` |
| `cart.html` | `/cart` | `/trip` | `src/pages/trip/index.astro` | Replaced by Trip review & booking request form; 301 redirect for `/cart` and `/cart.html` |
| `royal_enfield.html` | `/royal_enfield` | `/vehicles/royal-enfield-classic-350` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/royal_enfield` and `.html` |
| `ktm_390.html` | `/ktm_390` | `/vehicles/ktm-390-duke` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/ktm_390` and `.html` |
| `bmw_gs.html` | `/bmw_gs` | `/vehicles/bmw-r-1250-gs` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/bmw_gs` and `.html` |
| `honda_civic.html` | `/honda_civic` | `/vehicles/honda-civic` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/honda_civic` and `.html` |
| `toyota_rav4.html` | `/toyota_rav4` | `/vehicles/toyota-rav4-hybrid` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/toyota_rav4` and `.html` |
| `ford_mustang.html` | `/ford_mustang` | `/vehicles/ford-mustang-gt` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/ford_mustang` and `.html` |
| `vespa_gts.html` | `/vespa_gts` | `/vehicles/vespa-gts-300-hpe` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/vespa_gts` and `.html` |
| `yamaha_tmax.html` | `/yamaha_tmax` | `/vehicles/yamaha-tmax-tech-max` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/yamaha_tmax` and `.html` |
| `honda_adv.html` | `/honda_adv` | `/vehicles/honda-adv350` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/honda_adv` and `.html` |
| `volvo_bus.html` | `/volvo_bus` | `/vehicles/volvo-b8rle` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/volvo_bus` and `.html` |
| `mercedes_tourismo.html` | `/mercedes_tourismo` | `/vehicles/mercedes-benz-tourismo` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/mercedes_tourismo` and `.html` |
| `thomas_bus.html` | `/thomas_bus` | `/vehicles/thomas-built-saf-t-liner-c2` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/thomas_bus` and `.html` |
| `ford_f150.html` | `/ford_f150` | `/vehicles/ford-f-150` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/ford_f150` and `.html` |
| `kenworth_t680.html` | `/kenworth_t680` | `/vehicles/kenworth-t680` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/kenworth_t680` and `.html` |
| `rivian_r1t.html` | `/rivian_r1t` | `/vehicles/rivian-r1t` | `src/pages/vehicles/[slug].astro` | Single dynamic template; 301 redirect for `/rivian_r1t` and `.html` |
| *(New)* | — | `/fleet/cars` | `src/pages/fleet/[category].astro` | Prefiltered category view |
| *(New)* | — | `/fleet/bikes` | `src/pages/fleet/[category].astro` | Prefiltered category view |
| *(New)* | — | `/fleet/scooters` | `src/pages/fleet/[category].astro` | Prefiltered category view |
| *(New)* | — | `/fleet/buses` | `src/pages/fleet/[category].astro` | Prefiltered category view |
| *(New)* | — | `/fleet/trucks` | `src/pages/fleet/[category].astro` | Prefiltered category view |
| *(New)* | — | `/trip/sent` | `src/pages/trip/sent.astro` | Booking request confirmation (`noindex`) |
| *(New)* | — | `/compare` | `src/pages/compare.astro` | Vehicle comparison view (`noindex`) |
| *(New)* | — | `/faq` | `src/pages/faq.astro` | Dedicated FAQ page |
| *(New)* | — | `/terms` | `src/pages/terms.astro` | Draft rental terms (`noindex`) |
| *(New)* | — | `/privacy` | `src/pages/privacy.astro` | Draft privacy notice (`noindex`) |
| *(New)* | — | `/404` | `src/pages/404.astro` | Custom branded 404 page |
| *(New)* | — | `/design` | `src/pages/design.astro` | Token & component QA reference (`noindex`) |

## 2. Vehicle Data Preservation Map

All 15 vehicles with their original names, categories, prices, seating capacities, and displayed mileage:

| # | Existing Display Name | Target Slug | Category | Daily Rate (INR) | Seats | Displayed Efficiency | Original Asset Folder |
|---|---|---|---|---|---|---|---|
| 1 | Royal Enfield Classic 350 | `royal-enfield-classic-350` | bike | ₹900 | 2 | 35-40 km/l | `350/` |
| 2 | KTM 390 Duke | `ktm-390-duke` | bike | ₹1,100 | 2 | 25-30 km/l | `ktm/` |
| 3 | BMW R 1250 GS | `bmw-r-1250-gs` | bike | ₹1,200 | 2 | 15-20 km/l | `GS/` |
| 4 | Honda Civic | `honda-civic` | car | ₹1,700 | 5 | 33 km/l | `Honda Civic/` |
| 5 | Toyota RAV4 Hybrid | `toyota-rav4-hybrid` | car | ₹1,900 | 5 | 40 km/l | `Toyota/` |
| 6 | Ford Mustang GT | `ford-mustang-gt` | car | ₹2,400 | 5 | 18 km/l | `ford/` |
| 7 | Vespa GTS 300 HPE | `vespa-gts-300-hpe` | scooter | ₹700 | 2 | 30 km/l | `Vespa/` |
| 8 | Yamaha TMAX Tech MAX | `yamaha-tmax-tech-max` | scooter | ₹800 | 2 | 21 km/l | `Yamaha/` |
| 9 | Honda ADV350 | `honda-adv350` | scooter | ₹1,000 | 2 | 30 km/l | `ADV/` |
| 10 | Volvo B8RLE | `volvo-b8rle` | bus | ₹2,800 | 45 | 15 km/l | `Volvo/` |
| 11 | Mercedes-Benz Tourismo M/2 | `mercedes-benz-tourismo` | bus | ₹3,500 | 54 | 20 km/l | `merce/` |
| 12 | Thomas Built Saf-T-Liner C2 | `thomas-built-saf-t-liner-c2` | bus | ₹4,200 | 72 | 16 km/l | `thomas/` |
| 13 | Ford F-150 | `ford-f-150` | truck | ₹3,100 | 5 | 30 km/l | `ford-f/` |
| 14 | Kenworth T680 | `kenworth-t680` | truck | ₹3,300 | 3 | 15 km/l | `kenworth/` |
| 15 | Rivian R1T | `rivian-r1t` | truck | ₹3,700 | 5 | *(EV - omitted)* | `Rivian/` |

## 3. User Interaction Preservation and Intent

- **Search:** Preserved and upgraded. Original substring search on DOM cards replaced by full-site search dialog accessible from every page, ranking by name, brand, and type.
- **Category Filter:** Preserved and upgraded. Original link click hiding DOM nodes replaced by dedicated category routes (`/fleet/cars`, etc.) and multi-filter toolbar on `/fleet` with URL query state.
- **Cart -> Trip:** Preserved and upgraded. Original item collection in localStorage preserved as `rentwheels.trip.v1` (storing slugs only). Legacy cart migration transfers any existing items without data loss.
- **Booking Flow:** Replaced broken 2-second fake checkout with legitimate Netlify Forms booking request workflow.
- **Gallery:** Upgraded from static 300×200 inline boxes to responsive 16:9 main view with 3:2 thumbnails and accessible `<dialog>` lightbox.

## 4. Asset Inventory Preservation

- 52 original image files (~208.8 MB) remain completely untouched and preserved in their original folders throughout phases 0 to 8.
- Dedicated AVIF/WebP optimization pipeline will generate right-sized master derivatives in `src/assets/` during Phase 1 & 9 without destructive modifications to originals.
