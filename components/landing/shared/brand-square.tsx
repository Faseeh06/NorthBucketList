import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";
import { cn } from "@/lib/utils";

type BrandSquareProps = { className?: string; "aria-hidden"?: boolean };

/** Small red square used beside mono labels (intro, featured trips, etc.) */
export function BrandSquare({ className, "aria-hidden": ariaHidden = true }: BrandSquareProps) {
  return (
    <span
      className={cn("inline-block h-2 w-2 shrink-0", className)}
      style={{ backgroundColor: BRAND_ACCENT_HEX }}
      aria-hidden={ariaHidden}
    />
  );
}
