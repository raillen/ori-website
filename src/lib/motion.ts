/**
 * Motion presets aligned with DESIGN-RULES.md.
 * These map to CSS custom properties defined in custom.css.
 */

export const easing = {
  /** Premium entrance: modal, drawer, overlay */
  easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** General transitions */
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** Spring for interactive elements */
  springSoft: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const duration = {
  /** Hover, focus, toggles */
  fast: 120,
  /** State changes */
  base: 180,
  /** Modal open, layout shift */
  slow: 280,
  /** Complex entrance animations */
  slower: 400,
} as const;

/** CSS class names for keyframe animations */
export const animations = {
  fadeInUp: 'animate-fade-in-up',
  scaleIn: 'animate-scale-in',
  shimmer: 'animate-shimmer',
  pageIn: 'animate-page-in',
  slideDown: 'animate-slide-down',
} as const;

/** Check if user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
