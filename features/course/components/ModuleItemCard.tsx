import React from "react";
import type { ContentItem } from "../types";
import { ContentItemIcon } from "./ContentItemIcon";

// ================================================
// Interface Props
// ================================================
export interface ModuleItemCardProps {
  item: ContentItem;
  isActive: boolean;
  onClick: (item: ContentItem) => void;
}

// ================================================
// Component
// ================================================
export const ModuleItemCard: React.FC<ModuleItemCardProps> = ({
  item,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        if (!item.isDisabled) onClick(item);
      }}
      className={`border rounded-xl p-4 flex gap-3 items-center transition-colors ${
        isActive
          ? "bg-[#f0fdf4] border-[#22c55e] cursor-pointer"
          : item.isDisabled
            ? "bg-white border-gray-100 opacity-60 cursor-not-allowed"
            : "bg-white border-gray-100 hover:border-gray-200 cursor-pointer"
      }`}
    >
      <ContentItemIcon item={item} isActive={isActive} />

      <div className="min-w-0">
        <h4
          className={`font-medium text-xs truncate ${
            isActive
              ? "text-gray-900"
              : item.isDisabled
                ? "text-gray-500"
                : "text-gray-800"
          }`}
        >
          {item.title}
        </h4>
        <p
          className={`text-[11px] mt-0.5 ${
            isActive ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};

ModuleItemCard.displayName = "ModuleItemCard";
