# Dum Chronicles

> *Slow Cooked. Deeply Rooted. Purely Indian.*

A premium restaurant landing page built with Next.js, Tailwind CSS  and Framer Motion. Dark, warm and cinematic - designed to make you hungry just by scrolling.

**Live Site:** [ Dum-Chronicles](https://dum-chronicles.vercel.app/) <!-- Replace with your Vercel URL -->

---

## What Makes This Different

- Dark rich theme - deep blacks, burnt orange, golden accents
- Diagonal section cuts throughout - no straight horizontal sections
- Cinematic hero with slow zoom background and staggered text reveal
- Tab based menu - 4 categories, 12 dishes, smooth switch animation
- Editorial testimonials - full width alternating layout, no cards
- Masonry ambience gallery with golden hover overlay
- Reservation form with direct WhatsApp redirect - no backend needed
- Reusable UI primitives used from day one - Button, Card, AnimatedSection, SectionBadge

---

## Tech Stack

- **Next.js** - App Router
- **Tailwind CSS** - design tokens via CSS variables
- **Framer Motion** - scroll animations, hover effects, stagger reveals
- **React Icons** - icon library
- **Google Fonts** - Playfair Display + Lato

---

## Project Structure

```
├── app/
│   ├── globals.css        # design tokens, diagonal cuts, dark theme utilities
│   ├── layout.js          # fonts, metadata, favicon, WhatsApp FAB
│   └── page.js            # assembles all sections
├── components/
│   ├── ui/
│   │   ├── AnimatedSection.jsx   # scroll animation wrapper — used everywhere
│   │   ├── Button.jsx            # primary, secondary, outline variants
│   │   ├── Card.jsx              # dark card with gold hover border
│   │   ├── SectionBadge.jsx      # golden label above every heading
│   │   └── index.js
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Menu.jsx
│   ├── Specialities.jsx
│   ├── Ambience.jsx
│   ├── Testimonials.jsx
│   ├── Reservation.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── WhatsAppFAB.jsx
├── data/
│   └── restaurantData.js  # all content in one place
└── public/
    └── favicon.svg        # handi pot icon - matches the brand
```

---

## Reservation Form

Submitting the form builds a pre-filled WhatsApp message and opens it directly - no backend, no database, no email setup needed. Find the integration point in `components/Reservation.jsx`.

---

## License

© 2026 Nihal Gavandi. All rights reserved.

This repository is public for portfolio viewing only. Do not copy, reuse, or redistribute without written permission.
