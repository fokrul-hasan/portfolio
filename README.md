# Fokrul Hasan — Works & Finds (Astro version)

Your site, rebuilt so you can add blog posts and recipes just by adding a
text file — no editing of design/code required for everyday updates.

## How it's organized

```
src/
  content/
    blog/       ← one .md file per blog post
    recipes/    ← one .md file per recipe
  data/
    projects.js ← the 4 project cards on your homepage
  pages/
    index.astro ← homepage (pulls blog/recipes automatically)
  layouts/
    BaseLayout.astro ← nav, footer, fonts (shared by every page)
  styles/
    global.css  ← all your visual design, unchanged from the original
public/
  fokrul_hasan_resume.html ← replace with your real resume file
```

You will almost never need to touch `pages/`, `layouts/`, or `styles/` again.
Day-to-day, you only add files inside `src/content/blog/` or
`src/content/recipes/`.

---

## Part 1 — Get this code onto GitHub

1. Go to https://github.com/new and create a new repository (e.g. `fokrul-site`). Keep it **Public**, don't add a README/gitignore (we already have files).
2. On your own computer, install [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org) (LTS version) if you don't have them.
3. Download this project folder, then open a terminal inside it and run:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/fokrul-site.git
   git push -u origin main
   ```

   (Replace `YOUR-USERNAME` with your GitHub username.)

## Part 2 — Deploy on Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Choose the `fokrul-site` repo you just pushed.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. In about a minute you'll get a live URL like `fokrul-site.pages.dev`.

That's it — every time you push a change to GitHub, Cloudflare rebuilds and redeploys automatically.

---

## Part 3 — Adding a new blog post (no local coding needed)

1. Go to your repo on GitHub → open the `src/content/blog` folder.
2. Click **Add file → Create new file**.
3. Name it something like `my-new-post.md` (use dashes, no spaces).
4. Paste this template and fill it in:

   ```markdown
   ---
   title: "Your Post Title Here"
   date: "2026-07-04"
   topic: "Tech"
   excerpt: "One or two sentence teaser shown on the homepage."
   ---

   Write your full post here. Regular paragraphs work fine.

   ## You can add headings like this

   - and bullet points
   - **bold text**
   - *italic text*
   ```

5. Scroll down, click **Commit changes**.
6. Wait ~30–60 seconds — Cloudflare Pages rebuilds automatically, and your new post appears on the homepage (sorted by date) with its own page.

## Part 4 — Adding a new recipe

Same process, but inside `src/content/recipes/`:

```markdown
---
name: "Recipe Name"
cuisine: "Bangladeshi"
time: "30 min"
emoji: "🍜"
note: "Short teaser shown on the recipe card."
---

## Ingredients
- item 1
- item 2

## Steps
1. Step one
2. Step two
```

## Part 5 — Adding/editing a project card

Open `src/data/projects.js` on GitHub, copy one of the existing objects,
edit the fields, add a comma, save. This one file is a small exception —
it's not markdown, but it's just as simple to edit as a text file.

---

## Testing locally (optional, once you're comfortable)

```bash
npm install
npm run dev
```

Then open http://localhost:4321 to preview changes before pushing.

## Notes

- I didn't have your actual resume HTML file in this upload, so
  `public/fokrul_hasan_resume.html` is a placeholder — drop your real
  resume file in there with that exact filename and it'll just work.
- If you want a nicer visual dashboard instead of editing files on GitHub
  (fill-in-the-blank forms, image uploads, etc.), the next upgrade step is
  adding a free tool called Decap CMS — happy to set that up whenever you're ready.
