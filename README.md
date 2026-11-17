# SaharaRefund.in

## Kya kahan badalna hai
- _includes/header.html  : top notice bar, logo, menu
- _includes/footer.html  : footer, disclaimer
- _layouts/default.html  : <head>, meta tags, favicon, AdSense script
- index.html, about.html ... : page ka content (upar --- ke beech title/description)
- style.css              : Tailwind se bani compiled CSS (isko haath se mat badlo)

## Design badalna ho (Tailwind)
Naye Tailwind classes HTML me likhne ke baad CSS dobara build karni padti hai:

    npm install
    npm run build

Isse style.css naye sire se ban jati hai. Bina build kiye nayi class kaam nahi karegi.
Font (Poppins): tailwind.config.js + _layouts/default.html. Rang: Tailwind ka orange/neutral palette. Components (btn, tile, sec, chip, callout): src/input.css
