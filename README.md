# Inara Foundation

The official website for **Inara Foundation** — a youth-led Section 8 non-profit turning compassion into meaningful change through community welfare, animal care, and environmental action across India.

**Live site:** [inarafoundation.in](https://inarafoundation.in)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| CMS | [Sanity.io](https://www.sanity.io/) (embedded Studio) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Hosting | [Vercel](https://vercel.com/) |
| Analytics | Vercel Analytics & Speed Insights |

## Features

- **Headless CMS** — Content managed through Sanity Studio at `/studio`. Non-technical team members can add and edit projects, blog posts, and testimonials without touching code.
- **Rich Text Editor** — Portable Text with custom blocks: video embeds, call-to-action boxes, info callouts, multi-image rows, and inline quotes with attribution.
- **On-demand Revalidation** — Webhook-based ISR ensures content updates go live within seconds of publishing.
- **Static Generation** — Project and blog pages are statically generated at build time via `generateStaticParams` for fast TTFB.
- **SEO Optimized** — Complete metadata, OpenGraph/Twitter cards, JSON-LD structured data, dynamic sitemap, and canonical URLs on every page.
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop with optimized layouts.
- **Image Optimization** — All CMS images served via Sanity's CDN with automatic format conversion (WebP/AVIF) and resizing. Static assets optimized through Next.js Image.
- **Accessibility** — Skip navigation, semantic HTML, ARIA labels, visible focus indicators, and proper heading hierarchy.
- **Security Headers** — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
- **PWA Ready** — Web manifest and theme color for installable experience.

## Project Structure

```
├── app/
│   ├── (site)/              # Public-facing pages
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects listing + [slug] detail
│   │   ├── blog/            # Blog listing + [slug] detail
│   │   ├── contact/         # Contact page
│   │   ├── donate/          # Donate page
│   │   ├── nagpur/          # Nagpur chapter page
│   │   ├── error.tsx        # Error boundary
│   │   ├── not-found.tsx    # 404 page
│   │   └── layout.tsx       # Site layout (Navbar + Footer)
│   ├── (studio)/            # Sanity Studio (isolated layout)
│   │   └── studio/[[...tool]]/page.tsx
│   ├── api/revalidate/      # Webhook endpoint for ISR
│   ├── layout.tsx           # Root layout (fonts, metadata, JSON-LD)
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # Shared UI components
│   └── project/             # Project detail components
├── sanity/
│   ├── schemas/             # Content type definitions
│   │   ├── project.ts
│   │   ├── projectType.ts
│   │   ├── blogPost.ts
│   │   ├── testimonial.ts
│   │   └── objects/richText.ts
│   └── lib/                 # Client, queries, image helpers
├── sanity.config.ts         # Studio configuration
├── next.config.ts           # Next.js config (headers, images)
└── public/                  # Static assets (logos, hero images)
```

## Getting Started

### Prerequisites

- Node.js 20+
- A [Sanity.io](https://www.sanity.io/) account with a project

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/purna135/Inara-Foundation-Website.git
   cd Inara-Foundation-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_REVALIDATE_SECRET=your_secret
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/studio](http://localhost:3000/studio) for the CMS.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Content Management

The CMS is accessible at `/studio` and supports:

- **Projects** — Title, slug, type, dates, location, participants, collaborator, summary, rich text description, cover image, gallery images, and highlights.
- **Blog Posts** — Title, slug, author, publish date, categories, excerpt, cover image, and rich text body.
- **Testimonials** — Name, role, quote, and avatar.
- **Project Types** — Customizable categories that appear as filter options on the projects page.

### For Content Editors

1. Navigate to `inarafoundation.in/studio`
2. Log in with your Sanity account
3. Create or edit content
4. Click **Publish** — changes go live within seconds

## Deployment

The site is deployed on Vercel. Pushes to `main` trigger automatic deployments.

### Environment Variables (Vercel)

| Variable | Environments |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Production, Preview |
| `NEXT_PUBLIC_SANITY_DATASET` | Production, Preview |
| `SANITY_REVALIDATE_SECRET` | Production, Preview (Sensitive) |

### Sanity Configuration

- **CORS Origins** — Add your production domain and `localhost:3000` with credentials enabled
- **Webhook** — POST to `https://inarafoundation.in/api/revalidate` with the revalidate secret, triggered on Create/Update/Delete

## License

This project is proprietary to Inara Foundation. All rights reserved.
