# Data to Confirm with Owner — RentWheels v2

This checklist catalogs all business facts, technical policies, and vehicle specifications that require explicit confirmation from the owner before removing `demoMode: true`.

## 1. Business Identity & Legal Entity
- [ ] Legal business name and registration status (RentWheels operating entity vs project/demo name)
- [ ] Registered office address (if public)
- [ ] Terms of Service approval
- [ ] Privacy Policy approval (data retention duration, grievance contact)

## 2. Contact Channels
- [ ] Public customer phone number
- [ ] WhatsApp contact number
- [ ] Support / booking email address
- [ ] Working hours / support window
- [ ] Office or pickup locations / physical service address

## 3. Operating Territory
- [ ] Actual cities and regions serviced (pickup & drop-off locations)
- [ ] Inter-city / interstate travel policy

## 4. Vehicle Inventory & Verification
- [ ] Confirm if all 15 vehicles are actively part of the fleet:
  - Bikes: Royal Enfield Classic 350, KTM 390 Duke, BMW R 1250 GS
  - Cars: Honda Civic, Toyota RAV4 Hybrid, Ford Mustang GT
  - Scooters: Vespa GTS 300 HPE, Yamaha TMAX Tech MAX, Honda ADV350
  - Buses: Volvo B8RLE, Mercedes-Benz Tourismo M/2, Thomas Built Saf-T-Liner C2
  - Trucks: Ford F-150, Kenworth T680, Rivian R1T
- [ ] Specific vehicle spec anomalies requiring owner review (Finding D1):
  - **Rivian R1T:** Currently listed with fuel mileage of 30 km/l. Rivian R1T is an electric vehicle (EV); fuel efficiency metric is not applicable.
  - **Honda Civic:** Listed at 33 km/l. Confirm actual mileage figure.
  - **Ford F-150:** Listed at 30 km/l. Confirm actual mileage figure.
  - **Kenworth T680:** Listed with 3 seats. Confirm commercial tractor configuration.
  - **Thomas Built Saf-T-Liner C2:** School bus configuration with 72 seats. Confirm commercial rental viability.

## 5. Daily Rates & Pricing Model
- [ ] Confirm daily rental rates (in INR) for each vehicle:
  - Royal Enfield Classic 350: ₹900/day
  - KTM 390 Duke: ₹1,100/day
  - BMW R 1250 GS: ₹1,200/day
  - Honda Civic: ₹1,700/day
  - Toyota RAV4 Hybrid: ₹1,900/day
  - Ford Mustang GT: ₹2,400/day
  - Vespa GTS 300 HPE: ₹700/day
  - Yamaha TMAX Tech MAX: ₹800/day
  - Honda ADV350: ₹1,000/day
  - Volvo B8RLE: ₹2,800/day
  - Mercedes-Benz Tourismo M/2: ₹3,500/day
  - Thomas Built Saf-T-Liner C2: ₹4,200/day
  - Ford F-150: ₹3,100/day
  - Kenworth T680: ₹3,300/day
  - Rivian R1T: ₹3,700/day
- [ ] Taxes and GST treatment (included in daily rate or added at confirmation)
- [ ] Security deposit amounts per category

## 6. Rental Terms & Policies
- [ ] Billing calculation mode: Inclusive day count (default) vs 24-hour night-based billing
- [ ] Minimum rental duration (e.g., 1 day)
- [ ] Cancellation window and refund policy
- [ ] Security deposit refund timeline
- [ ] Fuel policy (full-to-full, or pay per km)
- [ ] Driving license requirements by vehicle category (standard light motor vehicle, two-wheeler, commercial heavy vehicle)
- [ ] Minimum driver age requirement

## 7. Insurance & Roadside Support
- [ ] Insurance coverage details (third-party, comprehensive, collision damage waiver)
- [ ] 24/7 roadside assistance partner / contact number (Finding T1)

## 8. Workflow & Netlify Notifications
- [ ] Netlify Forms email notification recipient address configured in Netlify Dashboard
- [ ] Booking request confirmation turnaround time SLA (e.g. within 2 hours, within 24 hours)

## 9. Brand & Visual Assets
- [ ] Vector SVG or high-resolution source for RentWheels logo mark
- [ ] High-resolution replacement photography for low-resolution/watermarked assets (e.g., Mercedes-Benz Tourismo, Thomas Built bus, Honda Civic / Classic 350 watermarks)
