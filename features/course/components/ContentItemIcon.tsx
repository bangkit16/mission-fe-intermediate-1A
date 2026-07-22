import React from "react";
import { PlayCircle, FileText, CheckSquare } from "lucide-react";
import type { ContentItem } from "../types";

// ================================================
// Interface Props
// ================================================
export interface ContentItemIconProps {
  item: ContentItem;
  isActive: boolean;
}

// ================================================
// Component
// ================================================
export const ContentItemIcon: React.FC<ContentItemIconProps> = ({
  item,
  isActive,
}) => {
  if (item.isCompleted) {
    return (
      <div className="w-5 h-5 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
        ✓
      </div>
    );
  }

  const iconClass = `w-5 h-5 shrink-0 ${
    isActive
      ? "text-gray-800"
      : item.isDisabled
        ? "text-gray-400"
        : "text-gray-500"
  }`;

  switch (item.type) {
    case "pre-test":
    case "quiz":
      return <CheckSquare className={iconClass} />;
    case "video":
      return <PlayCircle className={iconClass} />;
    case "rangkuman":
      return <FileText className={iconClass} />;
    default:
      return null;
  }
};

ContentItemIcon.displayName = "ContentItemIcon";
