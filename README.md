# Florice Milling — Public Website

Next.js site for **Florice Milling Spare & Solution** — B2B consulting for rice milling, wheat flour milling, parboiling, and grain processing.

## Stack

- **Next.js** + React + TypeScript
- **Tailwind CSS**
- **Vercel** (recommended hosting)

## Local development

```bash
cd florice-website
npm install
cp .env.local.example .env.local   # optional, for contact form testing
npm run dev
```

Open http://localhost:8080

## Deploy to Vercel

### 1. Push code to GitHub

Repo: `Florice-Stack/Florice-Website`

### 2. Import on Vercel

1. [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New → Project**
3. Import **Florice-Stack / Florice-Website**
4. Framework: **Next.js** (auto-detected)
5. **Deploy**

### 3. Contact form (Web3Forms)

1. Sign up at [web3forms.com](https://web3forms.com) (free)
2. Create a form → copy your **Access Key**
3. Vercel → Project → **Settings → Environment Variables**
4. Add:

| Key | Value |
|-----|--------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | your Web3Forms access key |

Enable for **Production**, **Preview**, and **Development**.

5. **Redeploy** (required — this variable is baked in at build time)

Submissions are emailed to the address configured in Web3Forms.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/services` | Services, industries, process |
| `/spare-parts` | Spare parts catalogue & ordering |
| `/milling-trains` | Rice & flour process trains (detailed) |
| `/work` | Case studies, machinery |
| `/about` | About, brochure, FAQ |
| `/contact` | Consultation form |

## Assets

- Brochure PDF: `public/florice-capabilities-brochure.pdf`

## Contact placeholders

Update `src/lib/content.ts` with real email and phone before production launch.
