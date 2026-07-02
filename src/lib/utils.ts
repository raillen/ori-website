/**
 * Merge class names — lightweight clsx + tailwind-merge alternative.
 * Filters falsy values and deduplicates.
 */
export function cn(...inputs: (string | false | null | undefined)[]): string {
  return inputs.filter(Boolean).join(' ');
}
