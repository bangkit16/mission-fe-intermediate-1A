import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { ModuleData, ContentItem } from "../types";
import { ModuleItemCard } from "./ModuleItemCard";

// ================================================
// Interface Props
// ================================================
export interface ModuleAccordionProps {
  module: ModuleData;
  isOpen: boolean;
  activeContentId: string | null;
  onToggle: (id: string) => void;
  onItemClick: (item: ContentItem) => void;
}

// ================================================
// Component
// ================================================
export const ModuleAccordion: React.FC<ModuleAccordionProps> = ({
  module,
  isOpen,
  activeContentId,
  onToggle,
  onItemClick,
}) => {
  return (
    <div className="border-b border-gray-50 last:border-none pb-2">
      {/* Accordion Header */}
      <div
        onClick={() => onToggle(module.id)}
        className="flex items-center justify-between py-3 cursor-pointer select-none"
      >
        <h3 className="font-bold text-[14px] text-gray-900">
          {module.title}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="space-y-3 pt-1 pb-3 animate-fade">
          {module.items.length > 0 ? (
            module.items.map((item) => (
              <ModuleItemCard
                key={item.id}
                item={item}
                isActive={activeContentId === item.id}
                onClick={onItemClick}
              />
            ))
          ) : (
            <p className="text-xs text-gray-400 italic pl-2">
              Tidak ada materi.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

ModuleAccordion.displayName = "ModuleAccordion";
