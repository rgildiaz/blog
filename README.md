# blog

Source for [rafigildiaz.me](https://rafigildiaz.me), a static [Next.js](https://nextjs.org) site deployed to S3.

```sh
npm install
npm run dev    # http://localhost:3000
npm run build  # static site in ./out
```

Deploys run from the "Deploy to S3" GitHub Action, on a published release or a manual run.

## Content

- **Blog posts** are markdown files in `posts/`. Frontmatter: `title`, `date` (`YYYY-MM-DD`), and optional `tags`.
- **Work write-ups** are markdown files in `work/`, shown at `/work`. Frontmatter:
  - `title`, `org`, `period`, `summary` (one sentence, shown in lists and link previews)
  - `stack`: list of tools used
  - `order`: position in the list (lowest first)
  - `featured: true` to also show it on the home page
  - `links`: optional list of `{ label, href }`
  - HTML comments (`<!-- -->`) are not rendered, so they're safe for notes and drafts.
- **The resume** lives in `pages/resume/index.js`. Resume bullets can link to a work write-up by its file name.

## Resume PDF

`public/resume.pdf` is a printout of `/resume`, which has print styles that fit it on one page. After changing the resume, regenerate it: open `/resume` in Chrome, Print, Save as PDF, Letter size, default margins, with "Headers and footers" unchecked, and save over `public/resume.pdf`.
