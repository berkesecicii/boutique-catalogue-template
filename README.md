# Boutique Catalogue Template

A fast, mobile-first product catalogue for a small shop that takes orders over WhatsApp. Plain HTML, CSS and vanilla JavaScript — no framework, no build step, no backend.

> All brand names, contact details and images are fictional placeholders. Replace them before using this for a real shop.

## Features

- Filterable product grid (categories driven by one `PRODUCTS` array in `app.js`)
- Photo viewer dialog with per-product enquiry button
- Favourites and a shopping bag persisted in `localStorage`
- **WhatsApp checkout** — the bag becomes a pre-filled message to the shop; no payments or stock backend
- Responsive navigation with a mobile slide-in panel, announcement bar and floating WhatsApp button
- Accessible markup (labelled controls, dialog roles, keyboard support)

## Project structure

```
index.html   page markup
styles.css   styles
app.js       product data + cart/favourites/filter logic
assets/      placeholder images
_headers     Cloudflare Pages security headers
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Customise

1. Set `PHONE` at the top of `app.js` (international format, digits only) and update the `wa.me` link in `index.html`.
2. Edit the `PRODUCTS` array: `id`, `name`, `category`, `categoryLabel`, `photo`, `tag`, `description`.
3. Replace the images in `assets/` and update the contact/footer details in `index.html`.

## Deploy

Static files only — works on Cloudflare Pages, Netlify, GitHub Pages, etc.

## License

MIT — see [LICENSE](LICENSE).
