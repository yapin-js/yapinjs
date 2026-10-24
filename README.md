# yapin.js

The website for yapin.js, an unofficial client mod runtime for [Yapin'](https://yapin.gg).
Static HTML, CSS and a few lines of JavaScript — no build step, no dependencies.

Live at **https://yapin.js.org** · Pages URL: **https://yapin-js.github.io/yapinjs/**

> The runtime itself is not written yet. The API on the site is a draft and is labelled as such.

## Layout

```
index.html         the whole page
assets/styles.css  design tokens + layout
assets/main.js     copy buttons
favicon.svg
CNAME              yapin.js.org
.nojekyll          serve files as-is, no Jekyll pass
.github/workflows/pages.yml
```

All asset paths are relative, so the site works both at the domain root and under the
`/yapinjs/` Pages path.

## Run it locally

Any static server works:

```sh
python -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000.

## Deploying

Pushing to `main` triggers `.github/workflows/pages.yml`, which uploads the repo root and
deploys it to GitHub Pages. Pages must be set to **Source: GitHub Actions** in the repo
settings (Settings → Pages).

The `CNAME` file is part of the artifact, so the custom domain is applied on every deploy.

## The js.org subdomain

`yapin.js.org` comes from [js-org/js.org](https://github.com/js-org/js.org). To request it,
add one line to `cnames_active.js`, in alphabetical order:

```js
"yapin": "yapin-js.github.io/yapinjs",
```

Their checklist, and where this repo stands:

- [x] `CNAME` file containing `yapin.js.org`
- [x] A real page with content, not a placeholder
- [x] JavaScript-related project
- [ ] Site reachable at the Pages URL above (needs the first deploy to finish)

Once the PR is merged, DNS points `yapin.js.org` at GitHub Pages and the certificate is
issued automatically. Until then the Pages URL serves the same site.

## Design

The palette and type follow Yapin's own client so the two sit side by side: coral accent
(`#ff6b4a`), warm-biased dark neutrals, Fredoka for display, Inter for body, JetBrains Mono
for code. Dark by default, light when the OS asks for it.

yapin.js is a community project. It is not made by, endorsed by or affiliated with Yapin'.
