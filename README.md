# Racing Syndicate Website
Static HTML/CSS/JS, no build step. Open `index.html` in a browser.

## Structure
- `index.html` holds all pages as views: Home, About, Contact, each with 3 demo designs (`#home`, `#home-2`, `#home-3`, `#about`, `#about-2`, `#about-3`, `#contact`, `#contact-2`, `#contact-3`).
- `css/style.css` styles and colour variables (`:root`). `css/images.css` maps the photo classes `.p1 .p2 .p3` to files in `assets/images/`.
- `js/main.js` has menu, header hide/show on scroll, reveal animations, hash routing and form validation.

## Contact form
Edit the top of `js/main.js`: set `OWNER_EMAIL` (FormSubmit; confirm its first activation email) or `FORM_ENDPOINT` (Formspree etc.). Until set, the form says it is not connected.

## Replace content
- Photos: overwrite files in `assets/images/` (keep names) or edit `css/images.css`. Update the `aria-label` text in `index.html`.
- Colours and fonts: `:root` in `css/style.css` and the Google Fonts link in `index.html`.
- Logo, text, horse names, `hello@example.com`, social links: edit `index.html`.
- Choose a demo: keep the pages you like and remove the other views and menu links.

## Deploy
Netlify: drag the folder onto app.netlify.com/drop. GitHub Pages: push and enable Pages. Traditional hosting: upload everything to `public_html`.
