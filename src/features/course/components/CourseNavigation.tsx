import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ContentItem } from "../types";

// ================================================
// Interface Props
// ================================================
export interface CourseNavigationProps {
  /** Current active item (for label display) */
  activeItem: ContentItem | null;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  /** Render mobile variant */
  isMobile: boolean;
}

// ================================================
// Component
// ================================================
export const CourseNavigation: React.FC<CourseNavigationProps> = ({
  activeItem,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  isMobile,
}) => {
  // Mobile navigation bar (below main content)
  if (isMobile) {
    return (
      <section className="bg-[#22c55e] text-white flex justify-between text-sm font-semibold">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="p-4 pl-6 text-nowrap flex items-center gap-1 justify-start disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" /> Sebelumnya
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="p-4 pr-6 w-full flex items-center gap-1 justify-end disabled:opacity-40"
        >
          Selanjutnya <ChevronRight className="w-4 h-4" />
        </button>
      </section>
    );
  }

  // Desktop footer navigation
  return (
    <footer className="h-14 shrink-0 bg-[#22c55e] text-white flex items-center justify-between px-8 text-xs font-medium tracking-wide">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="flex items-center gap-2 hover:opacity-90 disabled:opacity-40"
      >
        <ChevronLeft className="w-4 h-4" /> Sebelumnya
      </button>

      <span className="text-white/80 text-[11px]">
        {activeItem ? activeItem.title : "Pilih materi"}
      </span>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="flex items-center gap-2 hover:opacity-90 disabled:opacity-40"
      >
        Selanjutnya <ChevronRight className="w-4 h-4" />
      </button>
    </footer>
  );
};

CourseNavigation.displayName = "CourseNavigation";
