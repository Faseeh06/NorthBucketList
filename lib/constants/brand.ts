/**
 * NorthBucket List — brand-level constants.
 * For theme colors (page background, borders), prefer CSS variables in `app/globals.css`.
 */

/** Marketing accent — deep red, used for dots, CTA icon circles, small squares */
export const BRAND_ACCENT_HEX = "#c41e3a" as const;

export const LAYOUT = {
  /** Max content width (matches `max-w-[min(100%,1760px)]` across the site) */
  maxWidthClass: "max-w-[min(100%,1760px)]",
} as const;
