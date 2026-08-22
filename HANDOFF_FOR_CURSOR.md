# BGDev website redesign, handoff notes

This document summarizes everything changed in `bgdev-react/` during a Claude/Cowork session.

## Status: committed locally, not yet pushed

Everything described below (sections 12a onward, the splash screen, About/Contact/Blog pages, and the image/Contact/blog-count bug fixes) is committed on `main` as commit `4327118`, on top of Cursor's already-pushed cleanup commit `0253e0c`. Claude could not push it: this session runs in a sandbox with no GitHub credentials configured, `git push` failed with "could not read Username for 'https://github.com'". **Run `git push origin main` from Cursor or a normal terminal on this machine to publish it**, that terminal already has working push access since it just pushed `0253e0c`.

The commit intentionally leaves out root-level `.gitignore`, `bgdev-react/package.json`, `bgdev-react/package-lock.json`, `bgdev-react/public/logo.svg`, and the legacy root-level image duplicates (`logo.png`, `robots.txt`, `asnatesikk*.png`, `convert*.png`, etc.), all confirmed as CRLF line-ending churn or unreadable OneDrive cloud-placeholder files in this sandbox, not real edits. They will keep showing as "modified" in `git status` locally; that is expected, not a bug, see the section below.

Two files are still flagged safe-to-delete but could not actually be deleted from this sandbox (same OneDrive permission restriction that blocks all file deletion here): `bgdev-react/src/components/Skills.tsx` (unused, unimported) and `bgdev-react/public/inpspiration2.png` (typo'd duplicate, unreferenced). Neither affects the site, delete them locally whenever convenient.

## Important: ignore the line-ending noise

`git status` in this environment shows many unrelated files as "modified" (root-level images, `.gitignore`, `404.html`, `package-lock.json`, `bgdev-react/package.json`, etc). These are **not real changes**, they are CRLF/LF line-ending churn introduced by the OneDrive-synced mount this session ran in (confirmed: `package.json` shows 49 insertions / 49 deletions on a 50-line file, and `404.html` errors as unreadable, both signatures of the sync layer, not content edits).

**Before committing, diff-check and likely `git checkout --` anything outside the file list below.** Only the files listed under "Files changed" were intentionally edited.

## What changed, by theme

### 1. Full visual redesign (dark, premium, brand-navy/blue)
Replaced the original light/glassmorphic, purple-blue-gradient "AI template" look with a consistent dark theme:
- New color system: near-black (`ink`) background + a blue accent ramp (`brand`) sampled from the actual BGDev logo (`#3B93F0` to `#134C8F`), replacing the old default Tailwind blue/purple and a short-lived gold/orange experiment.
- New type pairing: Bricolage Grotesque (display/headings) + Inter (body).
- Real motion: scroll-reveal animations, animated gradient blobs, an infinite tech-stack marquee, animated stat counters, hover lift/tilt on cards, grain texture overlay.
- Removed template signifiers: floating emoji icons, rainbow per-card gradients, skill percentage bars.

### 2. Logo and favicon
- The user supplied a real 3D-rendered "B" logo mark (`favicon1.png`, blue/navy, brackets and slash built into the letterform).
- Trimmed and exported via ImageMagick into: `logo-mark.png` (source, transparent), `logo192.png`, `logo512.png`, `favicon.ico` (multi-size), `apple-touch-icon.png` (180x180).
- `BrandLogo.tsx` now renders `logo-mark.png` everywhere (header, hero, footer) instead of a hand-drawn icon.
- `manifest.json` and `index.html` icon links updated to match.
- **Cleanup needed before commit**: leftover intermediate files should be deleted, they are not referenced by any code: `bgdev-react/public/trimmed.png`, `logo192-new.png`, `logo512-new.png`, `favicon-new.ico`, `apple-touch-icon-new.png`, `favicon-16.png`, `favicon-32.png`. Also superseded (no longer used, safe to delete): `favicon.svg`, `bgdev-icon.svg`, `bgdev-logo-lockup.svg` (an earlier hand-coded concept before the real logo was supplied). `bgdev-logo-lockup.png` is a nice-to-keep marketing asset (icon + wordmark lockup) but isn't referenced by the app.

### 3. Services catalog expanded
`Services.tsx` now lists the full agency scope instead of just mobile/AI/web: web development, mobile app development, AI chatbot integration, SaaS platforms end-to-end, AI-powered platforms, UI/UX and product design, 3D and interactive design, IT business analysis, SEO and digital marketing, and customer support solutions.

### 4. Skills section removed
The percentage skill-bar section read as templated filler. Removed from `App.tsx` and the nav in `Header.tsx`. `Skills.tsx` still exists on disk but is unused, safe to delete if you want the tree clean.

### 5. Trust signals added
New `TrustBar.tsx`, a slim strip under the hero with five real trust signals (NDA and IP protection, secure delivery pipeline, on-time delivery, post-launch support, full code ownership transfer). No fabricated certifications or numbers.

### 6. Projects section
- Removed GitHub links from every project card and the modal (client work, not open-source).
- Fixed three project cover images that were showing dummyimage.com placeholder graphics instead of the real screenshots already in `public/`: Flowwaz now uses `flowwazicos.png`, Inspirationights uses `inspiration2.png`, Umay Kuyumculuk uses `umayi.png`.

### 7. Footer
Removed the GitHub icon/link from the social row (LinkedIn, Instagram, TikTok remain).

### 8. Copy pass
Removed every em dash across the site copy and rewrote the surrounding sentence rather than just deleting the character.

### 9. SEO and AI-agent discoverability (GEO)
- `index.html`: rewritten title/meta description around "trusted web, mobile and AI development agency," fixed `lang="tr"` to `lang="en"`, added canonical tag, geo meta tags (Riga, Latvia), corrected OG/Twitter tags to the real domain (`bgdevofficial.com`, previously `bgdev.com`), and added `ProfessionalService` JSON-LD structured data (services, address, geo-coordinates, social links).
- `robots.txt`: explicit `Allow: /` plus named allow rules for AI crawlers (GPTBot, ChatGPT-User, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot, CCBot) and a `Sitemap:` reference.
- New `sitemap.xml` and new `llms.txt` (a plain-text company/services summary aimed at AI agents that read it for citations).
- `manifest.json`: icons pointed at the correct files, theme/background colors updated to match the new palette.

### 10. Chatbot widget fixed
`Chatbot.tsx` was still on the old light theme and referenced Tailwind color classes (`primary-500`, `purple-600`) that no longer exist in `tailwind.config.js` after the palette rewrite, so the widget rendered as an unreadable white-on-white panel. Rewritten to the dark brand theme (readable contrast throughout), and removed emoji from all bot copy.

## Files changed

**Modified:**
```
bgdev-react/public/favicon.ico
bgdev-react/public/index.html
bgdev-react/public/logo.svg
bgdev-react/public/logo192.png
bgdev-react/public/logo512.png
bgdev-react/public/manifest.json
bgdev-react/public/robots.txt
bgdev-react/public/sitemap.xml
bgdev-react/public/llms.txt
bgdev-react/tailwind.config.js
bgdev-react/src/index.css
bgdev-react/src/App.tsx
bgdev-react/src/components/About.tsx
bgdev-react/src/components/BrandLogo.tsx
bgdev-react/src/components/Chatbot.tsx
bgdev-react/src/components/Contact.tsx
bgdev-react/src/components/Footer.tsx
bgdev-react/src/components/Header.tsx
bgdev-react/src/components/Hero.tsx
bgdev-react/src/components/Projects.tsx
bgdev-react/src/components/Services.tsx
bgdev-react/src/components/Skills.tsx (now unused, kept for reference)
```

**New (visual redesign round):**
```
bgdev-react/src/components/TrustBar.tsx
bgdev-react/public/logo-mark.png
bgdev-react/public/apple-touch-icon.png
bgdev-react/public/bgdev-logo-lockup.png   (optional marketing asset)
```

**New (splash screen, About/Contact/Blog pages round):**
```
bgdev-react/src/components/SplashScreen.tsx
bgdev-react/src/components/AboutPage.tsx
bgdev-react/src/components/ContactPage.tsx
bgdev-react/src/components/ContactForm.tsx
bgdev-react/src/components/BlogPage.tsx
bgdev-react/src/components/BlogPost.tsx
bgdev-react/src/data/blogPosts.ts
bgdev-react/src/utils/seo.ts
```

**Safe to delete (leftover intermediates / superseded concepts):**
```
bgdev-react/public/trimmed.png
bgdev-react/public/logo192-new.png
bgdev-react/public/logo512-new.png
bgdev-react/public/favicon-new.ico
bgdev-react/public/apple-touch-icon-new.png
bgdev-react/public/favicon-16.png
bgdev-react/public/favicon-32.png
bgdev-react/public/favicon.svg
bgdev-react/public/bgdev-icon.svg
bgdev-react/public/bgdev-logo-lockup.svg
favicon1.png   (root, the source file the user supplied, keep or archive as you prefer)
```

### 11. Copy repositioning pass (Hero, About, SEO)
Rewrote the hero hook, about section, and SEO/meta copy to reflect accurate positioning: BGDev is an IT solutions partner for small and medium businesses (custom websites/apps to grow their business), with AI chatbot integration and AI-powered products like Convertonix (an AI file converter that analyzes and converts files, a feature, not "AI builds your site and we resell it"). Copy now uses real search-intent keywords (e.g. "hire web developer," "AI chatbot integration for business," "IT solutions for SMEs").
- `Hero.tsx`: new badge, H1, and subtext.
- `About.tsx`: new H2, intro paragraph, "Why BGDev" checklist, and mission paragraph.
- `index.html`: meta description, keywords, OG/Twitter tags, JSON-LD description, and title updated to match.
- `llms.txt`: intro and Convertonix line updated to match.

### 12a. New pages: splash screen, About, Contact, Blog (8 articles)
Major feature addition, new routes and content, not just styling:

- **Splash screen** (`SplashScreen.tsx`, new): a full-screen animated loading screen with the real logo, shown once per browser session (`sessionStorage`), then fades into the site. Mounted at the top of `App.tsx`.
- **`/about`** (`AboutPage.tsx`, new): dedicated About page, story, four value cards, four-step process, stats, CTA. The homepage `About.tsx` section is kept as a shorter teaser, its "Learn more" link now points to `/about` instead of `#contact`.
- **`/contact`** (`ContactPage.tsx`, new): dedicated Contact page with hero header, the contact form, and an FAQ accordion. The contact form itself was extracted out of `Contact.tsx` into a new shared `ContactForm.tsx` component so the homepage Contact section and the new `/contact` page share one implementation instead of duplicating the form/API logic. `Contact.tsx` (homepage section) is now a thin wrapper around `ContactForm.tsx`.
- **`/blog`** (`BlogPage.tsx`, new) and **`/blog/:slug`** (`BlogPost.tsx`, new): a full blog with a featured post, category filter, and article cards on the listing page, and a full reader view per article with cover image, related posts, and a CTA. Article content lives in `src/data/blogPosts.ts` (new), 8 original articles written for this project: choosing a trusted web dev agency, AI chatbots for small business, n8n vs Zapier vs Make, NVIDIA RTX vs AMD for AI, SaaS trends 2026/2027, Claude vs GPT vs Gemini, Elon Musk's xAI/Grok, and an AI integration roadmap for SMEs. Facts used in these (GPU market share, AI model comparisons, xAI/SpaceX merger, SaaS market figures, automation tool comparisons) were grounded via live web search before writing, not invented, then paraphrased in original wording. Cover images are real, verified Unsplash photo URLs (found via search, not guessed IDs).
- **`src/utils/seo.ts`** (new): `usePageSEO()` hook updates `document.title`, meta description, canonical URL, and OG/Twitter tags per route (this is a client-side-rendered CRA app, so this helps browsers, tab titles, and any crawler that executes JavaScript, it does not replace server-side rendering for crawlers that do not run JS). `useJsonLd()` injects a `BlogPosting` JSON-LD script per article page for rich snippets.
- **Routing** (`App.tsx`): added `/about`, `/contact`, `/blog`, `/blog/:slug` routes. Added a `ScrollManager` component that scrolls to top on route change and smooth-scrolls to a hash target (e.g. `/#services`) when navigating cross-page.
- **Nav links now route-aware**: `Header.tsx`, `Footer.tsx`, and `BrandLogo.tsx` previously used plain `<a href="#section">` anchors, which only worked on the homepage. These now use React Router `Link`, `About` and `Contact` point to their new dedicated pages, `Services`/`Work` point to `/#services` / `/#projects` (homepage anchors, still valid since those sections only exist there), and a new `Blog` nav item points to `/blog`.
- **`sitemap.xml`**: added `/about`, `/contact`, `/blog`, and all 8 blog post URLs; removed the old `#about`/`#contact` hash entries in favor of the new real routes.
- **`llms.txt`**: added a "Pages" section listing the homepage, About, Contact, and Blog.

### 12b. Hero visual fix (background visibility + empty right column)
User feedback: hero background photo was nearly invisible and the right side of the hero (below the small "Recent engagement" card) looked empty against the taller left column. Fixed in `Hero.tsx`:
- Background photo opacity raised (`0.14` to `0.32`) and the flat dark overlay replaced with a left-to-right gradient (`from-ink-950 via-ink-950/90 to-ink-950/30`) plus a lighter vertical fade, so the image is actually visible while the headline text stays fully legible on the left.
- Right column rebuilt from a single small floating card into a full-height visual panel: a second image (`HERO_SIDE_IMG`, a code/dev photo) fills the column at `min-h-[420px]`, with two floating pill badges over it ("Available for new projects" with a pulsing dot, and "Riga, Latvia / Remote worldwide"). The existing "Recent engagement / BGFocus" card now floats over the bottom edge of that image (`absolute -bottom-8`) instead of sitting in empty space.
- Grid alignment changed from `items-end` to `items-stretch` so the right column matches the left column's height instead of collapsing to content size.
- Marquee top margin bumped slightly (`mt-16` to `mt-20` on mobile) to clear the now-overlapping floating card.
- No new files, this only touches `Hero.tsx` (already listed above under "Modified").

### 13. Bug fixes and follow-up requested by the user
The user reported three issues after testing the live site: the Convertonix project cover was broken, every blog cover image was broken, and the full Contact form was still on the homepage after already asking for it to be moved to its own page. Also asked for at least 15 blog articles instead of 8. Fixed:

- **Convertonix project image** (`Projects.tsx`): the `image`, `logo`, and first `images[]` entry pointed to `/favicon-192.svg`, a file that does not exist in `public/`. That was the bug. Real screenshots already existed on disk (`convert1.png` through `convert4.png`) but were never wired up. Now points to those.
- **Blog cover images, actual root cause found and fixed**: the previous round's Unsplash URLs were broken because of a real bug, Unsplash has two different, unrelated ID systems: the short ID in a page URL like `unsplash.com/photos/<slug>-<shortId>` is NOT the same ID used by the image CDN at `images.unsplash.com/photo-<cdnId>`. The short page-slug ID was being used to construct CDN URLs directly, which is simply the wrong ID format, guaranteed to 404. Confirmed by fetching the actual Unsplash pages and reading their real `og:image` values, which use a completely different ID string. This was caught this round by fetching real pages instead of guessing. Fix: switched to Pexels, which uses one unified numeric ID for both the page URL and the CDN image URL (confirmed the same way, by fetching a real Pexels photo page and cross-checking its `og:image` against the constructed URL, they matched exactly). All 16 posts now carry a verified `image: pexels(<id>)` URL in `src/data/blogPosts.ts`. As a safety net on top of that, `BlogCoverImage.tsx` (new) renders the real photo but catches `onError` and swaps to `BlogCover.tsx` (the brand-gradient icon panel built last round) so a future dead link degrades gracefully instead of showing a broken image icon. Used in the listing page, featured card, article header, and related-post thumbnails.
- **Contact removed from the homepage**: `Contact.tsx` (the homepage section) no longer renders the contact form. It is now a slim CTA banner ("Let's talk about your project" plus a button to `/contact`). The actual form only lives on the dedicated `/contact` page (`ContactPage.tsx` via the shared `ContactForm.tsx`), which is what was asked for originally.
- **8 more blog articles, 16 total**: added to `src/data/blogPosts.ts`, all written the same way as the first 8 (facts checked against real-world knowledge, no fabricated statistics, original wording). New articles: website/app cost guide for SMEs, a dedicated GEO guide on getting recommended by ChatGPT/Claude/Google AI Overviews (directly targets the user's stated goal of AI search recommending BGDev, and doubles as a demonstration since this site follows its own advice), AI agents vs AI chatbots, vertical vs horizontal SaaS, a founder/shipping-fast piece (written as general commentary on a known pattern, not fabricated quotes attributed to any named individual), a no-hype AI tools buyer's guide, a website redesign checklist, and mobile app vs website decision guide.
- **New files**: `bgdev-react/src/components/BlogCover.tsx`, `bgdev-react/src/components/BlogCoverImage.tsx`.
- **`sitemap.xml`**: added all 8 new article URLs.

### 14. Follow-up: user asked for real photos on the blog, not gradient covers
After the fix above (gradient-only covers), the user asked specifically for real Unsplash/Pexels photos on blog articles. Since the root cause of the original breakage was now understood (the Unsplash dual-ID mixup, see section 13), it was safe to bring real photos back. Every one of the 16 posts now has a `pexels()` image URL, sourced by web search then cross-verified by fetching the real Pexels photo page and confirming its `og:image` matches the constructed URL exactly, not guessed from a search snippet alone. `BlogCoverImage.tsx` keeps the `BlogCover.tsx` gradient as an automatic `onError` fallback, so even a future dead link cannot show a broken image icon, it will just quietly show the brand gradient instead.

## Verification done this session

- `tsc --noEmit` passes cleanly, no TypeScript errors across every changed and new file, through all rounds including this bug-fix pass.
- Manually checked every new/changed file's imports for unused identifiers (a common source of CI-only ESLint failures under CRA); none found. A standalone `eslint` run times out in this sandbox (slow OneDrive-mounted filesystem) and could not be used as a second check, so **still run `npm run build` locally before deploying**, that remains the one check this session cannot fully complete, and the one most likely to catch anything a type check would not.
- Blog article facts (GPU market share, AI model comparisons, xAI/SpaceX corporate changes, SaaS market figures, automation tool comparisons, GEO/AI search behavior) were checked against real information before writing, not invented, then written in original wording.
- Blog cover images no longer depend on any external URL, so the broken-image issue reported by the user cannot recur for that specific cause. If any other image on the site (project photos, logo, hero backgrounds) still looks broken after this fix, it is worth listing exactly which one, since project and hero images are local files already confirmed to exist on disk, not hotlinks.

## Suggested commit

```
git add bgdev-react/src bgdev-react/public bgdev-react/tailwind.config.js
git rm bgdev-react/public/trimmed.png bgdev-react/public/logo192-new.png \
  bgdev-react/public/logo512-new.png bgdev-react/public/favicon-new.ico \
  bgdev-react/public/apple-touch-icon-new.png bgdev-react/public/favicon-16.png \
  bgdev-react/public/favicon-32.png bgdev-react/public/favicon.svg \
  bgdev-react/public/bgdev-icon.svg bgdev-react/public/bgdev-logo-lockup.svg
git commit -m "Redesign site in dark brand theme, real logo, expanded services, SEO/GEO, trust signals, fix chatbot contrast"
git push
```
