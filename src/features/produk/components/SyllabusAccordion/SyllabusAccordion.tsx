import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LessonItem } from "../LessonItem";

// ================================================
// Types
// ================================================
export interface SyllabusLesson {
  id: string;
  title: string;
  type: string;
  duration: string;
}

export interface SyllabusModule {
  id: string;
  title: string;
  lessons: SyllabusLesson[];
}

export interface SyllabusAccordionProps {
  /** Daftar modul silabus */
  modules: SyllabusModule[];
  /** ID modul yang sedang terbuka */
  openModuleId: string | null;
  /** Handler untuk toggle modul */
  onToggleModule: (moduleId: string) => void;
  /** Class name tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const SyllabusAccordion: React.FC<SyllabusAccordionProps> = ({
  modules,
  openModuleId,
  onToggleModule,
  className,
}) => {
  return (
    <div className={`space-y-5 ${className ?? ""}`}>
      {modules.map((module) => {
        const isOpen = openModuleId === module.id;

        return (
          <div
            key={module.id}
            className="border-b border-gray-50 last:border-none pb-2 last:pb-0"
          >
            {/* Accordion Trigger Header */}
            <button
              type="button"
              onClick={() => onToggleModule(module.id)}
              className="w-full flex items-center justify-between text-left group py-2 focus:outline-none"
            >
              <span className="text-sm md:text-base font-semibold text-[#22C55E] group-hover:text-green-600 transition-colors duration-200 pr-4">
                {module.title}
              </span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>

            {/* Accordion Content (List Pelajaran) */}
            {isOpen && module.lessons.length > 0 && (
              <div className="mt-4 space-y-3 pl-0.5">
                {module.lessons.map((lesson) => (
                  <LessonItem
                    key={lesson.id}
                    title={lesson.title}
                    type={lesson.type}
                    duration={lesson.duration}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

SyllabusAccordion.displayName = "SyllabusAccordion";
