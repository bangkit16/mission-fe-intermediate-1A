// ================================================
// Shared types for Course module
// ================================================

import type { Question } from "../../services/api/courseContentService";

export interface ContentItem {
  id: string;
  type: "pre-test" | "video" | "rangkuman" | "quiz" | "final-test";
  title: string;
  subtitle: string;
  isActive?: boolean;
  isCompleted?: boolean;
  isDisabled?: boolean;
  /** Quiz-specific */
  questions?: Question[];
  durationMinutes?: number;
  passingScore?: number;
  totalQuestions?: number;
}

export interface ModuleData {
  id: string;
  title: string;
  items: ContentItem[];
}
