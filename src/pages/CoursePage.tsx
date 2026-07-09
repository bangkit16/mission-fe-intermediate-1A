import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  FileText,
  PlayCircle,
  BookOpen,
  HelpCircle,
  Star,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

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
        type: "pre-test",
        title: "Pre-Test: Introduction to HR",
        durationOrQuestions: "10 Pertanyaan",
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
        type: "video",
        title: "Video: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-7",
        type: "summary",
        title: "Rangkuman: Introduction to HR",
        durationOrQuestions: "12 Menit",
        isCompleted: true,
      },
      {
        id: "item-8",
        type: "quiz",
        title: "Quiz: Introduction to HR",
        durationOrQuestions: "10 Pertanyaan",
      },
    ],
  },
  {
    id: "m2",
    title: "Introduction to HR",
    items: [],
  },
  {
    id: "m3",
    title: "Introduction to HR",
    items: [],
  },
];

export default function CoursePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModuleId, setActiveModuleId] = useState<string>("m1");
  const [activeItemId, setActiveItemId] = useState<string>("item-1");

  // Helper render icon berdasarkan tipe modul
  const renderModuleIcon = (
    type: ModuleItem["type"],
    isCompleted?: boolean,
  ) => {
    if (isCompleted) {
      return (
        <CheckCircle2 className="w-5 h-5 text-green-550 fill-green-50 flex-shrink-0" />
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
        return <HelpCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      {/* --- HEADER / NAVBAR --- */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-3 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-sm lg:text-base font-medium text-gray-700 truncate max-w-[180px] sm:max-w-xs md:max-w-md">
            Foundations of User Experience Design
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-20 sm:w-24 bg-amber-100 h-2 rounded-full overflow-hidden">
              <div className="bg-amber-400 h-full w-[83%]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-green-600 flex items-center gap-1">
              10/12 <ChevronDown className="w-3 h-3" />
            </span>
          </div>

          {/* User Profile */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />

          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-1 text-gray-600 hover:bg-gray-100 rounded"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* --- MAIN LAYOUT CONTAINER --- */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* --- LEFT SIDE: CONTENT VIEW --- */}
        <main className="flex-1 flex flex-col min-w-0 pb-16 lg:pb-0">
          {/* Banner Hero / Ilustrasi */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 bg-[#e3f2fd] overflow-hidden flex items-center justify-center">
            {/* Background vector placeholder mimicking the beach illustration */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 opacity-90" />

            {/* Simplified shapes to mimic the artwork frame */}
            <div className="absolute bottom-0 w-full h-1/3 bg-[#00897b]" />
            <div className="absolute right-10 top-10 w-24 h-24 rounded-full bg-amber-300 opacity-80 mix-blend-multiply filter blur-sm" />

            {/* Text RULES */}
            <h2 className="relative z-10 text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] select-none">
              RULES
            </h2>
          </div>

          {/* Detail Deskripsi Konten */}
          <div className="p-4 sm:p-6 md:p-8 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Aturan</h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman
              awalmu terkait materi yang akan kamu pelajari
            </p>

            <div className="space-y-1 text-xs sm:text-sm text-gray-500 mb-6">
              <p>
                Syarat Nilai Kelulusan:{" "}
                <span className="font-medium text-gray-700">-</span>
              </p>
              <p>
                Durasi Ujian:{" "}
                <span className="font-medium text-gray-700">5 Menit</span>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 italic mb-8">
              Jangan khawatir, total skor tidak akan mempengaruhi kelulusan dan
              penilaian akhirmu dalam rangkaian kelas ini
            </p>

            {/* CTA Button Desktop & Mobile (di mobile bertindak sebagai tombol inline utama) */}
            <div>
              <button className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors text-sm">
                Mulai Pre-Test
              </button>
            </div>
          </div>
        </main>

        {/* --- RIGHT SIDE: MODUL SIDEBAR (Desktop Side, Mobile Drawer/Section) --- */}
        <aside
          className={`
          fixed inset-y-[57px] right-0 z-30 w-full sm:w-80 bg-white border-l border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out
          lg:static lg:w-[360px] lg:transform-none lg:z-0
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="p-4 border-b border-gray-200 bg-gray-50/50">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              Daftar Modul
            </h3>
          </div>

          {/* List Accordion Modul */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {modulesData.map((section) => {
              const isOpen = activeModuleId === section.id;
              return (
                <div
                  key={section.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setActiveModuleId(isOpen ? "" : section.id)}
                    className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-bold text-sm text-gray-800">
                      {section.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {isOpen && section.items && section.items.length > 0 && (
                    <div className="border-t border-gray-100 bg-white p-2 space-y-1">
                      {section.items.map((item) => {
                        const isActive = activeItemId === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveItemId(item.id)}
                            className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all ${
                              isActive
                                ? "bg-green-50/60 border border-green-200"
                                : "hover:bg-gray-50 border border-transparent"
                            }`}
                          >
                            {renderModuleIcon(item.type, item.isCompleted)}

                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-xs font-semibold leading-tight mb-1 ${isActive ? "text-gray-900" : "text-gray-700"}`}
                              >
                                {item.title}
                              </p>
                              <span className="text-[11px] text-gray-400 block">
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

          {/* Review & Rating Sticky Footer inside Sidebar */}
          <div className="p-3 bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center gap-2 font-bold text-sm text-white shadow-md">
            <Star className="w-4 h-4 fill-current text-white" />
            <span>Beri Review & Rating</span>
          </div>
        </aside>
      </div>

      {/* --- BOTTOM STICKY NAVIGATION (Mobile & Desktop Style) --- */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#22c55e] text-white px-4 py-3 flex items-center justify-between lg:static lg:px-6 z-40 select-none">
        <button className="flex items-center gap-1 font-semibold text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4" />
          <span>Foundations of User Experience Design</span>
        </button>

        {/* Di screen besar, kita tampilkan judul di kanan dengan panah berikutnya */}
        <button className="flex items-center gap-1 font-semibold text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity">
          <span className="hidden sm:inline">
            Foundations of User Experience Design
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
