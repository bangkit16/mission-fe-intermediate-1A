import React from "react";
import { PlayCircle, Clock } from "lucide-react";

// ================================================
// Interface Props
// ================================================
export interface LessonItemProps {
  /** Judul pelajaran */
  title: string;
  /** Tipe konten (e.g. "Video") */
  type: string;
  /** Durasi pelajaran (e.g. "12 Menit") */
  duration: string;
}

// ================================================
// Component
// ================================================
export const LessonItem: React.FC<LessonItemProps> = ({
  title,
  type,
  duration,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-200 gap-3">
      <span className="text-xs md:text-sm font-medium text-gray-800">
        {title}
      </span>

      {/* Metadata info */}
      <div className="flex items-center gap-4 text-xs font-medium text-gray-500 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <PlayCircle className="w-4 h-4 text-gray-400" />
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

LessonItem.displayName = "LessonItem";
