# Portfolio (P1) — Vibe Coding Module 12

React + TypeScript + Tailwind + Vite. Dependencies are pre-installed in
`node_modules`, so **you do not need to run `npm install`** — this was
done deliberately because corporate/managed networks often block or
can't reach the public npm registry.

## Run it locally
```
npm run dev
```
Then open the printed http://localhost:5173 link.

## Edit your content
All portfolio text lives in `src/data/portfolio.ts` — name, bio, projects,
skills, contact email. Edit that one file to make it genuinely yours.

## Deploy
1. `git init`
2. `git add .`
3. `git commit -m "initial commit"`
4. Create an empty repo on github.com, then follow its "push an existing
   repository" instructions to connect and push.
   (`node_modules` will NOT be pushed — `.gitignore` excludes it. This is
   correct and expected: Vercel installs dependencies itself on their
   servers, using the public registry, which works fine there.)
5. On vercel.com: New Project → Import your GitHub repo → Deploy.
   Vercel auto-detects Vite. You'll get a live `*.vercel.app` URL.

## If something breaks
- `npm run build` locally first — it should finish with no red errors
  before you try to deploy.
- If `node_modules` ever gets deleted or corrupted and you need to
  reinstall on this machine, `npm install` may fail on a
  corporate-proxied network — see the chat history for that
  troubleshooting, or just re-extract this original zip.
