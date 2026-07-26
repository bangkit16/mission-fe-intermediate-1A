import type { ContentItem, CourseModule } from "./types";

export function flattenItems(modules: CourseModule[]): ContentItem[] {
  return modules.flatMap((m) => m.items);
}

export function getNextItem(
  currentId: string,
  allItems: ContentItem[],
): ContentItem | null {
  const idx = allItems.findIndex((i) => i.id === currentId);
  if (idx === -1 || idx >= allItems.length - 1) return null;
  return allItems[idx + 1];
}

export function getPrevItem(
  currentId: string,
  allItems: ContentItem[],
): ContentItem | null {
  const idx = allItems.findIndex((i) => i.id === currentId);
  if (idx <= 0) return null;
  return allItems[idx - 1];
}
