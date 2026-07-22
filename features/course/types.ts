// ================================================
// Shared types for Course module
// ================================================

export interface ContentItem {
  id: string;
  type: "pre-test" | "video" | "rangkuman" | "quiz";
  title: string;
  subtitle: string;
  isActive?: boolean;
  isCompleted?: boolean;
  isDisabled?: boolean;
}

export interface ModuleData {
  id: string;
  title: string;
  items: ContentItem[];
}
