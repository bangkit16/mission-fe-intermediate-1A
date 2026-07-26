// ================================================
// Utility functions for course navigation
// ================================================

import type { ContentItem, ModuleData } from "./types";

/** Flatten all items from all modules into a single ordered list for navigation */
export function flattenItems(data: ModuleData[]): ContentItem[] {
  return data.reduce<ContentItem[]>((acc, m) => acc.concat(m.items), []);
}

/** Find the item after `id` in the flat list, or null */
export function getNextItem(id: string, all: ContentItem[]): ContentItem | null {
  const idx = all.findIndex((i) => i.id === id);
  if (idx === -1 || idx >= all.length - 1) return null;
  return all[idx + 1];
}

/** Find the item before `id` in the flat list, or null */
export function getPrevItem(id: string, all: ContentItem[]): ContentItem | null {
  const idx = all.findIndex((i) => i.id === id);
  if (idx <= 0) return null;
  return all[idx - 1];
}
