# Data to Confirm with Owner — RentWheels v2

This checklist catalogs all business facts, technical policies, and vehicle specifications, distinguishing **Resolved Decisions** from **Outstanding Items** requiring owner review before production launch.

---

## Part A: Resolved Decisions (Approved by Owner)

### 1. Billing Calculation Model (ADR-006)
- [x] **24-Hour Period Billing:** Confirmed. Pricing is calculated on consecutive 24-hour periods starting from pickup time in `Asia/Kolkata` timezone. Partial periods are rounded up (ceiling rounding). Inclusive calendar-day counting is eliminated.

### 2. Demo Mode & Booking Enquiry Flow (ADR-007)
- [x] **Demo Mode Default:** Confirmed `site.demoMode: true`.
- [x] **Honest Enquiry Flow:** Vehicles, cart, and trip-staging functionality are preserved. Submissions are processed via Netlify Forms without claiming payment or instant confirmation.
- [x] **Notification Routing:** Netlify Forms email notification recipient set to `dailykarma1910@gmail.com`.
- [x] **Public Contact Email:** Confirmed `diyanshah2301@gmail.com`.

### 3. Vehicle Specifications & Electric Vehicle Correction
- [x] **Rivian R1T EV Correction:** Fuel mileage ("30 km/l") removed. EV specifications (135 kWh battery pack, ~505 km / 314 mi EPA range, dual/quad motor AWD) implemented.
- [x] **Specification Research:** Primary manufacturer specifications cataloged for all 15 vehicles with source URLs and access dates.

### 4. Vehicle Pricing Model (ADR-010)
- [x] **Sample Prices Removed:** All arbitrary sample rates (₹700 to ₹4,200) removed from public display and vehicle data.
- [x] **Mumbai Rental Market Model:** Transparent, objective estimation formula developed using verifiable Mumbai benchmarks across all 5 vehicle segments. Clearly labeled as an indicative estimate.

---

## Part B: Outstanding Items Requiring Owner Confirmation

### 1. Business Identity & Legal Entity
- [ ] Legal business name and registration status (operating entity vs project/demo name)
- [ ] Registered office address in Mumbai / MMR (if public)
- [ ] Final Terms of Service review and approval
- [ ] Final Privacy Notice review (data retention duration, grievance officer contact)

### 2. Additional Contact Channels
- [ ] Public customer support phone number (if desired)
- [ ] WhatsApp business number (if desired)
- [ ] Physical pickup depot / branch locations within Mumbai

### 3. Operating Territory
- [ ] Specific Mumbai pickup locations (e.g., Bandra, Andheri, Airport T1/T2, Navi Mumbai, Thane)
- [ ] Outstation / inter-state travel permissions (e.g., Mumbai to Pune, Goa, Gujarat)

### 4. Operational Policies for Confirmed Bookings
- [ ] Security deposit amounts per category (held during rental)
- [ ] Cancellation window and refund policy
- [ ] Minimum driver age requirement (e.g., 21 for cars/bikes, 25 for sports/supercars)
- [ ] Required driving license vintage (e.g., minimum 1 year valid DL)
- [ ] Fuel policy (full-to-full vs flat refueling fee)

### 5. Production Launch Approval
- [ ] Approval to toggle `site.demoMode: false` once real operational infrastructure and payments are ready.
