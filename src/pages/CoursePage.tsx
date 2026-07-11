import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  FileText,
  PlayCircle,
  BookOpen,
  // HelpCircle,
  Star,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import LayoutCourse from "../components/layout/LayoutCourse";

// --- Types & Interfaces ---
interface ModuleItem {
  id: string;
  type: "pre-test" | "video" | "summary" | "quiz";
  title: string;
  durationOrQuestions: string;
  isCompleted?: boolean;
}

interface ModuleSection {
  id: string;
  title: string;
  items: ModuleItem[];
}

// --- Dummy Data ---
const modulesData: ModuleSection[] = [
  {
    id: "m1",
    title: "Introduction to HR",
    items: [
      {
        id: "item-1",
        type: "video",
        title: "Video: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-2",
        type: "video",
        title: "Video: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-3",
        type: "video",
        title: "Video: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-4",
        type: "video",
        title: "Video: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-5",
        type: "video",
        title: "Video: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-6",
        type: "summary",
        title: "Rangkuman: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-7",
        type: "quiz",
        title: "Quiz: Introduction to HR",
        durationOrQuestions: "10 Pertanyaan",
      },
    ],
  },
  { id: "m2", title: "Introduction to HR", items: [] },
  { id: "m3", title: "Introduction to HR", items: [] },
];

export default function CoursePage() {
  const [activeModuleId, setActiveModuleId] = useState<string>("m1");
  const [activeItemId, setActiveItemId] = useState<string>("item-7");

  const renderModuleIcon = (
    type: ModuleItem["type"],
    isCompleted?: boolean,
  ) => {
    if (isCompleted) {
      return (
        <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50 flex-shrink-0" />
      );
    }
    switch (type) {
      case "pre-test":
        return <FileText className="w-5 h-5 text-gray-500 flex-shrink-0" />;
      case "video":
        return <PlayCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />;
      case "summary":
        return <BookOpen className="w-5 h-5 text-gray-500 flex-shrink-0" />;
      case "quiz":
        return <FileText className="w-5 h-5 text-gray-500 flex-shrink-0" />;
    }
  };

  // Komponen Reusable untuk Daftar Modul agar tidak duplikasi kode antara desktop & mobile
  const ModuleListGroup = () => (
    <div className="space-y-3 overflow-hidden">
      {modulesData.map((section) => {
        const isOpen = activeModuleId === section.id;
        return (
          <div
            key={section.id}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => setActiveModuleId(isOpen ? "" : section.id)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <span className="font-bold text-sm sm:text-base text-gray-900">
                {section.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && section.items && section.items.length > 0 && (
              <div className="border-t border-gray-100 bg-white p-3 space-y-2">
                {section.items.map((item) => {
                  const isActive = activeItemId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveItemId(item.id)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                        isActive
                          ? "bg-green-50 border border-green-500"
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      {renderModuleIcon(item.type, item.isCompleted)}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-xs sm:text-sm font-semibold leading-tight mb-1 ${isActive ? "text-gray-900" : "text-gray-700"}`}
                        >
                          {item.title}
                        </p>
                        <span className="text-xs text-gray-400 block">
                          {item.durationOrQuestions}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <LayoutCourse>
      <div className="flex-1 flex grow bg-gray-600">
        <main className="flex-1 flex mx-auto w-90  bg-amber-200 px-3 py-4">
          <div className="h-full"></div>
        </main>
        {/* <aside className="w-90 border-l border-gray-200 flex-col bg-blue-500 px-3 py-4">
           <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              Daftar Modul
            </h3>
          </div> 
          <div className="flex flex-1 flex-col bg-red-300 h-full overflow-y-auto p-4">
            <div className="space-y-4 h-full overflow-y-scroll overflow-hidden">

              <ModuleListGroup />
            </div>
            <div className="p-3.5 bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center gap-2 font-bold text-sm text-white">
              <Star className="w-4 h-4 fill-current text-white" />
              <span>Beri Review & Rating</span>
            </div>
          </div> 
        </aside> */}
      </div>
    </LayoutCourse>
  );
}
