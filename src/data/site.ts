import type { IconName } from './icons';

/** A link shown in the hero and footer.
 *  `icon` is any name from src/components/Icon.astro */
export interface SocialLink {
  url: string;
  label: string;
  icon?: IconName;
}

/**
 * ─────────────────────────────────────────────────────────────
 *  Site identity — the one file you must edit first.
 *  Everything on the site (titles, meta tags, footer, hero
 *  social links) reads from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Your full name — used for <title> and meta tags */
  title: 'Rowan Hale',
  /** Short handle used after the dot in page titles ("About · rowanhale") */
  shortTitle: 'rowanhale',
  /** Default meta description for pages that don't set their own */
  description:
    'Software engineer and occasional traveler — writing about code and sharing photos from the road.',
  /** Your production URL — no trailing slash. Used for canonical URLs, OG tags, RSS and sitemap */
  url: 'https://example.com',
  author: {
    name: 'Rowan Hale',
    email: 'hello@example.com',
    location: 'Portland, OR',
    /** Optional: link to a PDF résumé served from /public */
    resume: '/resume/Resume.pdf',
  },
  /** Shown in the "Connect on" row in the hero, and in the footer. Delete a
   *  line to remove it from both places. The hero row itself drops `rss`
   *  (it already sits right below the podcast feed link) but the footer
   *  keeps every entry.
   *  `icon` is any name from src/components/Icon.astro */
  socials: {
    github: { url: 'https://github.com', label: 'GitHub', icon: 'github' },
    linkedin: { url: 'https://www.linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
    instagram: { url: 'https://www.instagram.com', label: 'Instagram', icon: 'instagram' },
    email: { url: 'mailto:hello@example.com', label: 'Email', icon: 'email' },
    rss: { url: '/rss.xml', label: 'RSS', icon: 'rss' },
  } satisfies Record<string, SocialLink>,
  /** Shown in the "Listen on" row (see LinkRow.astro, used from Hero.astro).
   *  `links.feed` is the show's own podcast-host RSS feed — separate from the
   *  site's `/rss.xml` in `socials` above. */
  podcast: {
    name: 'Your Show Name',
    links: {
      apple: { url: 'https://podcasts.apple.com/', label: 'Apple Podcasts', icon: 'apple-podcasts' },
      spotify: { url: 'https://open.spotify.com/', label: 'Spotify', icon: 'spotify' },
      youtube: { url: 'https://youtube.com/', label: 'YouTube', icon: 'youtube' },
      feed: { url: 'https://feeds.example.com/show.xml', label: 'RSS', icon: 'rss' },
    } satisfies Record<string, SocialLink>,
  },
};

export type SocialKey = keyof typeof site.socials;

/**
 * Prefix a root-relative path ("/img/x.jpg") with the configured base
 * path (`base` in astro.config.mjs). Anything else — external URLs,
 * mailto:/tel: links, already-prefixed paths — passes through
 * untouched. Use it for every internal link and public/ asset so the
 * site works at a subpath (e.g. GitHub Pages project sites) as well as
 * at the domain root.
 */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) return path;
  if (path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
};
