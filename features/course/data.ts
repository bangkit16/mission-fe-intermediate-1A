// ================================================
// Static course data — modules and content items
// ================================================

import type { ModuleData } from "./types";

export const modulesData: ModuleData[] = [
  {
    id: "mod-1",
    title: "Introduction to HR",
    items: [
      {
        id: "c1",
        type: "pre-test",
        title: "Pre-Test: Introduction to HR",
        subtitle: "10 Pertanyaan",
        isCompleted: true,
      },
      {
        id: "c2",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
        isCompleted: true,
      },
      {
        id: "c3",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
        isCompleted: true,
      },
      {
        id: "c4",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
        isCompleted: true,
      },
      {
        id: "c5",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
        isCompleted: true,
      },
      {
        id: "c6",
        type: "rangkuman",
        title: "Rangkuman: Introduction to HR",
        subtitle: "12 Menit",
        isActive: true,
      },
      {
        id: "c7",
        type: "quiz",
        title: "Quiz: Introduction to HR",
        subtitle: "10 Pertanyaan",
        isDisabled: true,
      },
    ],
  },
  {
    id: "mod-2",
    title: "Introduction to HR",
    items: [],
  },
];
