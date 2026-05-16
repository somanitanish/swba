# SWBA – Siddharth Wagh Badminton Academy

## Original Problem Statement
Build a modern responsive 2-page badminton academy website with black/white/yellow sports theme.
- Page 1: Home (Hero "DOMINATE THE COURT", Our Players, Tournaments, Footer)
- Page 2: About Coach (photo + bio, image/text split)
- Contact: +91 8605981981, Niwec Club MIDC Satpur Nashik 422007
- Social: Instagram, Facebook, YouTube

## Architecture
- Static React 19 + Tailwind 3 frontend (no backend required)
- Routing: react-router-dom v7 (BrowserRouter, ScrollToTop helper)
- Typography: Barlow Condensed (headings) + DM Sans (body) via Google Fonts
- Icons: lucide-react
- Tournament + player data: static JS in `/app/frontend/src/data/tournaments.js`

## What's Been Implemented (2026-05-16)
- ✅ Navbar (sticky, scroll-aware, mobile hamburger menu)
- ✅ Home: cinematic hero with badminton court bg, animated stat strip, marquee accent
- ✅ Our Players: 4-card grid with grayscale → color hover effect
- ✅ Tournaments: 87 events from MBA 2026-27 calendar, client-side filter (All/International/National/State/District), desktop table + mobile cards
- ✅ About Coach: photo with offset accent frame, professional bio draft, 4 method pillars
- ✅ Footer: contact, full Nashik MIDC address, social icons, copyright
- ✅ SEO meta tags, page-specific titles, smooth scroll, scroll-to-top on route change
- ✅ Fully responsive (390 / 768 / 1920 verified), a11y aria-label on hero h1
- ✅ data-testid on all interactive elements
- ✅ Testing agent: 100% frontend pass rate

## User Personas
- Prospective students / parents in Nashik researching badminton academies
- Current players checking the tournament calendar
- Coaches / scouts evaluating the academy

## Backlog (P1/P2)
- P1: Replace placeholder player cards with real SWBA player names + photos (awaiting from user)
- P1: Replace generic social URLs with SWBA-specific handles
- P2: Tournament data → CMS / backend admin so coach can update without code changes
- P2: Contact form on About Coach page → email/WhatsApp inquiry capture
- P2: Gallery / video reel section
- P2: Testimonials from current students / parents
- P2: Google Maps embed in footer for academy directions

## Next Tasks
- Collect real player roster + photos from user
- Confirm actual social media handles
