# keshav-website

Personal site for Keshav Verma, built with Next.js 16 (pages router), React 19 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
```

## Where content lives

| What | File |
| --- | --- |
| Experience timeline | `data/experience.js` |
| Testimonials (only `approved: true` show) | `data/testimonials.js` |
| Portfolio cards | `pages/portfolio.js` |
| Skills and profile | `pages/profile.js` |
| Resume | `public/Keshav_Verma_Resume.pdf`, `public/resume_keshav.html` |
| Travel photos | `public/life/<country>/` (folders are picked up automatically) |
| GobbleCube graphics | `public/projects/gobblecube/*.svg` |
