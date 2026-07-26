import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ContentItem } from "../types";

interface CourseNavigationProps {
  activeItem: ContentItem | null;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  isMobile: boolean;
}

export function CourseNavigation({
  activeItem,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  isMobile,
}: CourseNavigationProps) {
  if (!activeItem) return null;

  return (
    <nav
      className={`bg-white border-t border-gray-100 ${
        isMobile ? "p-4" : "px-8 py-3 flex items-center justify-between shrink-0"
      }`}
    >
      {isMobile ? (
        <div className="flex gap-3">
          <button
            type="button"
            disabled={!hasPrev}
            onClick={onPrev}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-green-300 text-green-400 font-semibold rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Sebelumnya
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Selanjutnya
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <>
          <span className="text-sm text-gray-500">
            {activeItem.title}
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              disabled={!hasPrev}
              onClick={onPrev}
              className="flex items-center gap-2 px-5 py-2 border-2 border-green-300 text-green-400 font-semibold rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Sebelumnya
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
            >
              Selanjutnya
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
