import { Menu, ChevronLeft } from "lucide-react";

interface CourseHeaderProps {
  title: string;
  isMobile: boolean;
}

export function CourseHeader({ title, isMobile }: CourseHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-100 bg-white shrink-0">
      <div className="flex items-center gap-3">
        {isMobile ? (
          <button className="p-1">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        ) : (
          <button className="p-1">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <h1 className="text-sm md:text-base font-bold text-gray-900 truncate max-w-[200px] md:max-w-none">
          {title}
        </h1>
      </div>

      {isMobile && (
        <button className="p-1">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </header>
  );
}
