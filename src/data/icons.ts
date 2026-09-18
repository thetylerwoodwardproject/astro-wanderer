/**
 * The single list of icon names `Icon.astro` knows how to render.
 * Shared here (rather than declared inline in `Icon.astro`) so
 * `src/data/site.ts` can reference the same type instead of keeping
 * a second, hand-synced copy.
 */
export type IconName =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'email'
  | 'rss'
  | 'download'
  | 'arrow-right'
  | 'arrow-left'
  | 'sun'
  | 'moon'
  | 'apple-podcasts'
  | 'spotify'
  | 'youtube'
  | 'podcast'
  | 'play'
  | 'pause'
  | 'skip-back'
  | 'skip-forward';
