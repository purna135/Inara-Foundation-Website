# Sanity CMS Migration Guide

Reference document for tracking what content is managed by Sanity, what remains hardcoded, and what to migrate next.

---

## Current Sanity Schemas

| Schema | Type | Studio Location | Purpose |
|--------|------|-----------------|---------|
| `project` | Document (list) | Projects | Project entries with rich text, images, dates |
| `projectType` | Document (list) | Project Types | Reusable categories (e.g. Interactive, Fundraisers) |
| `testimonial` | Document (list) | Testimonials | Volunteer/beneficiary quotes with avatars |
| `blogPost` | Document (list) | Blog Posts | Blog articles with rich text body and cover image |
| `siteSettings` | Singleton | Site Settings | Contact info, social links, volunteer form URL |
| `siteStats` | Singleton | Site Stats | Org-wide impact numbers (volunteers, projects, etc.) |
| `richText` | Object (shared) | — | Custom Portable Text blocks (callout, CTA, image row, quote, video embed) |

---

## What's Already Migrated

### Fully managed by Sanity

| Content | Schema | Used In |
|---------|--------|---------|
| All project data | `project` | Homepage, `/projects`, `/projects/[slug]` |
| Project categories | `projectType` | Referenced by projects |
| Testimonials | `testimonial` | Homepage |
| Blog posts | `blogPost` | `/blog`, `/blog/[slug]` |
| Contact info (email, phone, location) | `siteSettings` | Footer, Contact page, Donate page |
| Social links (Instagram, Facebook, LinkedIn, X) | `siteSettings` | Navbar, Footer, Contact page |
| Volunteer form URL | `siteSettings` | Navbar (desktop + mobile) |
| Org-wide stats (300+ volunteers, 25+ projects, 10k+ lives, since 2020) | `siteStats` | Homepage Stats component, About page quick stats, Donate page stats + trust points |

### Data flow

```
Sanity Content Lake
  │
  ├─ (site)/layout.tsx ──→ fetches siteSettings ──→ passes to Navbar + Footer
  ├─ (site)/page.tsx ──→ fetches projects, testimonials, siteStats
  ├─ (site)/about/page.tsx ──→ fetches siteStats
  ├─ (site)/donate/page.tsx ──→ fetches siteSettings + siteStats
  ├─ (site)/contact/page.tsx ──→ fetches siteSettings
  ├─ (site)/projects/page.tsx ──→ fetches all projects
  ├─ (site)/projects/[slug]/page.tsx ──→ fetches single project
  ├─ (site)/blog/page.tsx ──→ fetches all blog posts
  ├─ (site)/blog/[slug]/page.tsx ──→ fetches single blog post
  └─ sitemap.ts ──→ fetches project + blog slugs
```

---

## What's Still Hardcoded

### High Priority — Frequently duplicated or likely to change

| Content | File(s) | Notes |
|---------|---------|-------|
| ~~**Volunteer form URL**~~ | ~~All pages~~ | **DONE** — Now fetched from `siteSettings.volunteerFormUrl` everywhere. |
| ~~**Social links in JSON-LD**~~ | ~~`app/layout.tsx`~~ | **DONE** — `sameAs` and `foundingDate` now pulled from Sanity. |
| ~~**Founded year ("Since 2020")**~~ | ~~`about/page.tsx`~~ | **DONE** — Now uses `siteStats.foundedYear`. |
| **Hero slides** | `components/Hero.tsx` | 3 slides with titles, descriptions, CTA labels, and background images. Changes when campaigns or messaging shifts. |
| **Nagpur chapter** | `app/(site)/nagpur/page.tsx` | Stats (83+ volunteers, 3 projects, etc.), 3 project cards, all body copy. Completely hardcoded. |

### Medium Priority — Changes occasionally

| Content | File(s) | Notes |
|---------|---------|-------|
| **Core values** | `app/(site)/page.tsx` — `CORE_VALUES` array | 4 items (Community First, Youth-Led, Impact Driven, Section 8 NGO). |
| **Impact areas** | `app/(site)/donate/page.tsx` — `IMPACT_AREAS` array | 4 donation focus areas with icons and descriptions. |
| **Guiding principles** | `app/(site)/about/page.tsx` — `PRINCIPLES` array | 6 philosophical principles. |
| **Why join reasons** | `app/(site)/about/page.tsx` — `WHY_JOIN` array | 6 reasons to join as a volunteer. |
| **CTA section copy** | `components/CTA.tsx` | "Join Our Community" heading, description text (button URL is now from Sanity). |

### Low Priority — Rarely changes, fine to keep in code

| Content | File(s) | Notes |
|---------|---------|-------|
| Nav links | `Navbar.tsx` — `links` array | Route structure rarely changes. |
| Footer copy | `Footer.tsx` | Tagline, legal text, explore links. |
| Page metadata | Various `page.tsx` / `layout.tsx` | SEO titles, descriptions, OG images. |
| Contact form endpoint | `ContactForm.tsx` | Google Form submission URL. |
| Logo paths | Navbar, Footer | `/inara-logo.png`, `/inara-logo-white.png`. |
| Base URL | `layout.tsx`, `sitemap.ts`, `robots.ts` | `https://inarafoundation.in`. |

---

## Recommended Next Steps

### ~~Phase 1~~ — COMPLETED

All quick wins are done:
- `volunteerFormUrl` propagated to every page and component.
- JSON-LD `sameAs` and `foundingDate` pulled from Sanity.
- "Since 2020" / "Established 2020" replaced with dynamic `foundedYear`.

### Phase 2 — New singleton schemas

3. **Hero slides** → Create a `heroSlides` schema (array of objects: title, subtitle, CTA label, CTA link, background image).
   - Enables marketing team to update homepage hero without code changes.
   - File to update: `components/Hero.tsx`.

4. **Nagpur chapter** → Create a `chapter` schema (title, slug, description, stats array, projects array, cover image).
   - Makes it easy to add more chapters (e.g. future Pune or Delhi chapter).
   - File to update: `app/(site)/nagpur/page.tsx`.

### Phase 3 — Content arrays (optional, lower value)

5. **Core values / Principles / Why Join / Impact Areas** → Could be managed via a `contentBlock` schema with type discriminators, or individual singleton documents.
   - Only worth doing if non-technical team members frequently edit this copy.
   - Most orgs keep these in code since they rarely change.

### Phase 4 — Future features

6. **Team members page** → A `teamMember` schema (name, role, bio, photo, social links).
7. **Events/calendar** → An `event` schema (title, date, location, description, registration link).
8. **FAQ** → A `faq` schema (question, answer as Portable Text).
9. **Partners/sponsors** → A `partner` schema (name, logo, URL).

---

## Technical Notes

- **Client config**: `sanity/lib/client.ts` uses `useCdn: false` — Next.js ISR handles caching via `revalidate`.
- **Revalidation**: Time-based (60s for projects/blog, 300s for settings/stats). Webhook at `/api/revalidate` triggers tag-based revalidation on content changes.
- **Studio**: Embedded at `/studio` via route group `(studio)`. Sidebar organized with icons for each document type.
- **Image pipeline**: `@sanity/image-url` via `sanity/lib/image.ts`. Sanity CDN handles resizing/optimization automatically.
- **Rich text**: Custom Portable Text blocks in `sanity/schemas/objects/richText.ts` — rendered by `components/project/PortableTextBody.tsx`.

---

## Schema Quick Reference

```
siteSettings (singleton, id: "siteSettings")
├── email: string (required)
├── phone: string (required)
├── location: string
├── volunteerFormUrl: url
├── instagram: url
├── facebook: url
├── linkedin: url
└── twitter: url

siteStats (singleton, id: "siteStats")
├── volunteers: number (required)
├── volunteersSuffix: string (default: "+")
├── projects: number (required)
├── projectsSuffix: string (default: "+")
├── livesImpacted: number (required)
├── livesImpactedSuffix: string (default: "k+")
└── foundedYear: number (required)

project
├── title: string (required)
├── slug: slug (required)
├── summary: text
├── description: portableText (richTextBlocks)
├── typeRef: reference → projectType
├── collaborator: string
├── startDate: date
├── endDate: date
├── location: string
├── participants: number
├── highlights: array of strings
├── cover: image
└── images: array of images with caption

projectType
└── title: string (required)

testimonial
├── name: string (required)
├── role: string
├── quote: text (required)
└── avatar: image

blogPost
├── title: string (required)
├── slug: slug (required)
├── author: string
├── publishedAt: datetime
├── categories: array of strings
├── coverImage: image
├── excerpt: text
└── body: portableText (richTextBlocks)
```
