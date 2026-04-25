import { cn } from "@/lib/utils";
import { LAYOUT } from "@/lib/constants/brand";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Default horizontal max-width and padding for landing sections (1760px cap).
 * Use inside `<section>` so spacing (`py-*`) stays on the section.
 */
export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div
      className={cn("relative z-10 mx-auto w-full px-4 sm:px-5 lg:px-8", LAYOUT.maxWidthClass, className)}
    >
      {children}
    </div>
  );
}
