# Ann Chisom Sokwueaku , Portfolio

Personal portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deploy:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new project

1. Open `src/data/projects.ts`
2. Copy an existing project block and fill in your details
3. Drop the project screenshot into `public/images/projects/your-image.png`
4. Set `image: "/images/projects/your-image.png"` in the project entry
5. Save , the project card appears automatically

### Project fields

| Field | Required | Notes |
|,-|,-|,-|
| `id` | Yes | Unique slug, no spaces |
| `title` | Yes | Display name |
| `tagline` | Yes | One-liner shown on hover (future use) |
| `description` | Yes | 2-3 sentences |
| `vertical` | Yes | Industry label shown as badge |
| `client` | No | Use `"NDA Client"` if confidential |
| `stack` | Yes | Array of tools used |
| `image` | No | Path from `/public` |
| `liveUrl` | No | Shows "Live site →" link |
| `githubUrl` | No | Shows "GitHub →" link |
| `featured` | No | Reserved for future featured section |

## Project images

- Drop screenshots into `public/images/projects/`
- Recommended size: 1200 x 800px minimum
- Format: PNG or WebP
- The card crops to `h-48` from the top , make sure the key part of the screenshot is in the upper half

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo to Vercel for automatic deploys on push.

## Updating content

- **About text:** `src/components/sections/About.tsx`
- **Services:** `src/components/sections/Services.tsx`
- **Contact links:** `src/components/sections/Contact.tsx`
- **Hero phrases:** `src/components/sections/Hero.tsx` → `phrases` array
- **Nav links:** `src/components/layout/Navbar.tsx`
