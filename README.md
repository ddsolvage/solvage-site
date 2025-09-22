# Solvage™ Landing (Next.js + Tailwind)

## Quick Deploy (Vercel)
1) Create a GitHub repo named `solvage-site` and push this project.
2) Go to vercel.com → New Project → Import `solvage-site`.
3) Framework auto-detect: Next.js → Deploy with defaults.
4) Done. You get `https://<project>.vercel.app` (and `/uk` route for GBP).

## Local Dev
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Notes
- No env vars required.
- Contact form uses `mailto:` as MVP. Switch to Formspree/Netlify Forms later if needed.
- Currency: Root (`/`) shows `$`. UK route (`/uk`) shows `£`.
