# Abdullah A S M — Portfolio ("The Signal Architect")

Vite + React + TypeScript + Tailwind. All candidate content lives in `src/content.ts`.

```bash
npm install
npm run dev      # local dev
npm run build    # type-check + production build into dist/
```

## Before publishing
- **Resume:** add the real PDF as `public/Abdullah_ASM_Resume.pdf`. Until it exists the resume buttons show "Resume – upload pending"; they switch to live downloads automatically.
- **LinkedIn:** set `profile.linkedinUrl` in `src/content.ts`. The link stays hidden while it is empty.
- **Custom domain:** copy `.env.example` to `.env` and set `VITE_SITE_URL` to inject canonical + og:url.
- **Social preview image:** none yet (add `og:image` to `index.html` once an image exists).
