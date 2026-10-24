# yapin.js

The website for yapin.js, a bot framework for [Yapin'](https://yapin.gg) — commands, events,
embeds, buttons and voice, with no dependencies.

This repo is the site itself: static HTML, CSS and a few lines of JavaScript, no build step.

Live at [yapin.js.org](https://yapin.js.org) (once the js.org PR lands) ·
Pages URL: [yapin-js.github.io/yapinjs](https://yapin-js.github.io/yapinjs/)

> The framework itself is not written yet. The API shown on the site is a draft and is
> labelled as such.

## Layout

```text
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

Then open <http://localhost:8000>.

## Deploying

Pushing to `main` triggers `.github/workflows/pages.yml`, which uploads the repo root and
deploys it to GitHub Pages. Pages must be set to **Source: GitHub Actions** in the repo
settings (Settings → Pages).

A `CNAME` file is **not** read when publishing from a workflow, so it does not set the
custom domain here. It is kept in the repo because js.org's instructions reference it and
because it would take effect if this ever switched to branch-based publishing. The domain
itself is set under Settings → Pages → Custom domain — see the sequencing note below.

## The js.org subdomain

`yapin.js.org` comes from [js-org/js.org](https://github.com/js-org/js.org). To request it,
add one line to `cnames_active.js`, in alphabetical order:

```js
"yapin": "yapin-js.github.io/yapinjs",
```

It belongs between `"yana"` and `"yargs"`, around line 3880 of that file.

Their requirements, and where this repo stands:

- [x] JavaScript-related project, not a personal page or portfolio
- [x] Substantive content, not a placeholder
- [x] No automatic redirects away from js.org
- [x] Hosted on GitHub Pages at `yapin-js.github.io/yapinjs`
- [x] `CNAME` file present (not read by workflow publishing, but harmless)

**Order matters.** Do not set the custom domain in Settings → Pages until the js.org PR is
merged. Setting it early makes the Pages URL redirect to `yapin.js.org`, which does not
resolve yet, so reviewers would find a dead link. The sequence is:

1. Open the js.org PR with the entry above and the Pages URL as the target.
2. Wait for the merge — the DNS record goes live within about 24 hours.
3. Then set `yapin.js.org` as the custom domain in Settings → Pages and enable
   **Enforce HTTPS** once the certificate is issued.

## Design

The palette and type follow Yapin's own client so the two sit side by side: coral accent
(`#ff6b4a`), warm-biased dark neutrals, Fredoka for display, Inter for body, JetBrains Mono
for code. Dark by default, light when the OS asks for it.

yapin.js is a community project. It is not made by, endorsed by or affiliated with Yapin'.
