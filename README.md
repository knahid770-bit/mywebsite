# Thoroughbred Racing Syndicate Website
Static HTML/CSS/JS. No build step: open `index.html` in a browser.

## 1. Add photography (required)
No photos are bundled. Add licensed images (e.g. from Unsplash) to `assets/images/` with these names (JPG, ~1920px wide for heroes, ~1200px for horses, compressed):
`hero-gallop.jpg`, `about-hero.jpg`, `racecourse-atmosphere.jpg`, `horse-portrait.jpg`, `horse-stable.jpg`, `horse-motion.jpg`, `horse-jockey.jpg`.
Until added, sections show a navy placeholder. Update the `alt` text to match your photos.

## 2. Contact form
Edit the top of `js/contact.js`:
- **FormSubmit:** set `OWNER_EMAIL`. The first submission triggers an activation email from FormSubmit to that address; confirm it once.
- **Other service (Formspree etc.):** set `FORM_ENDPOINT`.
Until one is set the form says it is not connected. It never fakes success. A honeypot field blocks basic spam bots.

## 3. Customise
- Colours and fonts: variables at top of `css/style.css` (`:root`).
- Logo: text in the `.logo` link in each page header/footer (replace with an `<img>` or SVG).
- Text, horse names/status: edit the HTML directly; each horse is one `<article class="horse">`.
- Placeholders to replace: `hello@example.com`, `https://www.example.com/` (canonical and Open Graph URLs), social links `#`, "Your Syndicate Name", favicon in `assets/icons/`.

## 4. Deploy
- **Netlify:** drag the project folder onto app.netlify.com/drop.
- **GitHub Pages:** push to a repo, Settings > Pages > deploy from `main` / root.
- **Traditional hosting:** upload all files via FTP to `public_html`.
