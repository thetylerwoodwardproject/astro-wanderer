---
title: Welcome to your new site
subtitle: You cloned a theme — here's how to make it yours in ten minutes
date: 2026-08-20
tags: [meta]
category: tech
description: A quick tour of everything to edit in this Astro theme — site config, blog posts, the work page, and travel galleries.
audio:
  src: /audio/getting-started.wav
  duration: 3.5
  title: Welcome to your new site
---

If you can see this post, the theme is working. Everything below lives under `src/` and takes plain markdown or one small TypeScript file each.

## 1. Make it yours

Start with `src/data/site.ts`. It's the single source of truth for your name, tagline, social links, and production URL. Every page title, meta tag, footer link, and RSS entry reads from it.

Then swap `public/img/avatar.svg` for a real photo (keep the filename, or update the path in `src/components/Hero.astro`) and drop a 1200×630 `og.jpg` into `public/img/` for social share cards. Finally, set your domain as `site` in `astro.config.mjs`. If your site lives under a subpath (like GitHub Pages project sites do), also set `base` — every internal link already respects it.

## 2. Write posts

Add a markdown file to `src/content/blog/`:

```markdown
---
title: My first post
subtitle: An optional subtitle
date: 2026-01-15
tags: [notes]
category: tech
description: Shown on cards and in meta descriptions.
---

Your words here.
```

That's it — the post shows up on `/blog`, its tags get their own pages, and it lands in the RSS feed. Set `draft: true` while writing to keep it out of builds.

## 3. Add a podcast episode

If a post has an episode to go with it, add an `audio` block to its frontmatter:

```markdown
audio:
  src: /audio/episode-01.mp3
  duration: 1820
  title: Episode 1 — An optional override for the player's title
```

`src` can be a file under `public/audio/` or a link straight to your podcast host's CDN.
`duration` (seconds) is only needed to show a time before the browser loads the file — it's
fine to leave off. Add the block and a themed player shows up automatically: compact on the
`/blog` cards, full-sized with skip and speed controls on the post page. This post has one
wired up above, using a short sample tone in `public/audio/` — swap it for your first real
episode and drop the block from any post that isn't one.

Point the "Listen on" links in the hero at your show by editing `site.podcast` in
`src/data/site.ts` — the same way `site.socials` drives the row below it.

## 4. Fill in the work page

Open `src/data/resume.ts`. Roles, education, skills, and even the words typed in the hero animation are plain arrays — delete the sample entries and add yours.

## 5. Add a trip

Create `src/content/trips/japan-2026.md` with a title, place, date, summary, a hero image, and a `gallery` list pointing at images in `public/img/trips/...`. You get the photo carousel and lightbox for free.

## Delete this post

Once you've written something real, delete this file. Good luck — and if this theme saved you an afternoon, consider [starring the repo](https://github.com/igagansingh/astro-wanderer).
