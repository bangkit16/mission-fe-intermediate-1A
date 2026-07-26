import {
  ChevronUp,
  ChevronDown,
  PlayCircle,
  FileText,
  CheckSquare,
} from "lucide-react";
import type { CourseModule, ContentItem } from "../types";

interface ModuleAccordionProps {
  module: CourseModule;
  isOpen: boolean;
  activeContentId: string | null;
  onToggle: (id: string) => void;
  onItemClick: (item: ContentItem) => void;
}

export function ModuleAccordion({
  module,
  isOpen,
  activeContentId,
  onToggle,
  onItemClick,
}: ModuleAccordionProps) {
  const renderIcon = (type: ContentItem["type"], isActive?: boolean) => {
    const iconColor = isActive ? "text-emerald-600" : "text-gray-500";
    switch (type) {
      case "pre-test":
      case "quiz":
        return <CheckSquare className={`w-6 h-6 ${iconColor}`} />;
      case "video":
        return <PlayCircle className={`w-6 h-6 ${iconColor}`} />;
      case "rangkuman":
        return <FileText className={`w-6 h-6 ${iconColor}`} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button
        onClick={() => onToggle(module.id)}
        className="w-full flex justify-between items-center py-2 text-left focus:outline-none"
      >
        <span className="text-[15px] font-bold text-gray-800">
          {module.title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {isOpen && module.items.length > 0 && (
        <div className="flex flex-col gap-2 mt-1">
          {module.items.map((item) => {
            const active = item.id === activeContentId;
            return (
              <div
                key={item.id}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                  active
                    ? "border-emerald-500 bg-emerald-50/50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
                onClick={() => onItemClick(item)}
              >
                <div className="mt-0.5 flex-shrink-0">
                  {renderIcon(item.type, active)}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-semibold text-sm ${
                      active ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
