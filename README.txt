# Dandiya Utsav 2026 — Event Website

Static HTML/CSS/JavaScript landing page for:
- Date: 16 October 2026
- Venue: Children's Park, Morabadi, Ranchi
- Stag: ₹399
- Couple: ₹699
- Group Pass (5 People): ₹1,749
- Kids: ₹199

## Run
Open `index.html` in a browser, or use VS Code Live Server.

## IMPORTANT — Vihaya
This website is the promotional/front-end page. Payment, QR ticket generation and check-in should remain on Vihaya.

Before publishing, open `script.js` and replace:
PASTE_YOUR_VIHAYA_EVENT_URL_HERE

with your public Vihaya event/checkout URL.

Example:
const VIHAYA_CHECKOUT_URL = "https://events.vihaya.app/events/your-event-slug";

Then upload the whole folder to Vercel, Netlify, GitHub Pages, or any static host.
