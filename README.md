# jerylteo.com

Personal portfolio of Jeryl Teo, full-stack developer and Cyber Security Expert (C4X) in Singapore.

Hosted on GitHub Pages at [www.jerylteo.com](https://www.jerylteo.com).

## Stack

Deliberately dependency-free: semantic HTML, modern CSS (custom properties, fluid type,
dark theme, `prefers-reduced-motion` respected), and a small vanilla-JS enhancement layer
(`js/main.js`) for the mobile menu, scroll-spy, and reveal-on-scroll. No frameworks,
no build step, no external CDNs.

## Structure

- `index.html`: the whole site (single page)
- `css/styles.css`: all styling
- `js/main.js`: progressive enhancement only; the site works with JS disabled
- `assets/`: optimized WebP screenshots, icons, Open Graph image
- `404.html`, `robots.txt`, `sitemap.xml`, `CNAME`

## Development

No build step. Open `index.html` in a browser, or serve locally:

```sh
python3 -m http.server
```
