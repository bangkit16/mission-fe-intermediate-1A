// LearningModulePage.tsx
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  PlayCircle,
  FileText,
  CheckSquare,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import ReviewModal from "../components/course/ReviewModal";
import CertificateProgressPopover from "../components/course/CertificateProgressPopover";
import VideoScreen from "../components/course/screens/VideoRangkumanScreen";
import TryAgain from "../components/course/screens/TryAgain";
import PreTestScreen from "../components/course/screens/PreTestScreen";
import RulesScreen from "../components/course/screens/RulesScreen";
import CongratsScreen from "../components/course/screens/CongratsScreen";
import VideoRangkumanScreen from "../components/course/screens/VideoRangkumanScreen";

// Tipe data untuk item di dalam modul
interface ContentItem {
  id: string;
  type: "pre-test" | "video" | "rangkuman" | "quiz";
  title: string;
  subtitle: string;
  isActive?: boolean;
  isCompleted?: boolean;
  isDisabled?: boolean;
}

interface ModuleData {
  id: string;
  title: string;
  items: ContentItem[];
}

const modulesData: ModuleData[] = [
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

const LearningModulePage = () => {
  const isMobile = useIsMobile();

  // State untuk mengontrol modul mana saja yang terbuka
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "mod-1": true, // Modul pertama default terbuka`
  });

  const [openModalReview, setOpenModalReview] = useState<boolean>(false);

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Mock data silabus terintegrasi

  // Helper untuk merender ikon dengan Lucide sesuai tipe & status item
  const renderItemIcon = (item: ContentItem) => {
    if (item.isCompleted) {
      return (
        <div className="w-5 h-5 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
          ✓
        </div>
      );
    }

    const iconClass = `w-5 h-5 shrink-0 ${
      item.isActive
        ? "text-gray-800"
        : item.isDisabled
          ? "text-gray-400"
          : "text-gray-500"
    }`;

    switch (item.type) {
      case "pre-test":
      case "quiz":
        return <CheckSquare className={iconClass} />;
      case "video":
        return <PlayCircle className={iconClass} />;
      case "rangkuman":
        return <FileText className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={
        isMobile
          ? "min-h-screen bg-white flex flex-col text-[#1f2937]"
          : "h-screen overflow-hidden bg-white flex flex-col text-[#1f2937]"
      }
    >
      <ReviewModal
        openModal={openModalReview}
        onClose={() => setOpenModalReview(false)}
      />
      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 md:px-28 px-5">
        <div className=" mx-auto h-18 flex justify-between items-center">
          <div className=" flex items-center gap-3 min-w-0">
            <button className="text-gray-600 hover:text-gray-900 text-xl font-medium">
              <ArrowLeft className="w-6 h-6" />
            </button>

            <h1 className="font-semibold text-[15px] text-gray-800 truncate">
              Foundations of User Experience Design
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {!isMobile && (
                <div className="w-28 h-2 rounded-full bg-orange-100 overflow-hidden">
                  <div className="w-3/4 h-full bg-[#f59e0b] rounded-full" />
                </div>
              )}

              {/* <span className="font-semibold text-xs text-[#22c55e] flex items-center gap-1">
                10/12 <span className="text-[10px] text-gray-400">▼</span>
              </span> */}
              <CertificateProgressPopover />
            </div>

            <div className="hidden lg:block w-9 h-9 rounded-full overflow-hidden bg-purple-200">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="lg:hidden text-xl text-gray-600">☰</button>
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div
        className={
          isMobile ? "flex flex-col" : "flex-1 overflow-hidden lg:flex"
        }
      >
        {/* ================= LEFT ================= */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* <VideoScreen /> */}
          <VideoRangkumanScreen />
          {/* <TryAgain /> */}
          {/* <RulesScreen /> */}
          {/* <CongratsScreen /> */}
          {/* <PreTestScreen /> */}
          {/* MOBILE NAVIGATION */}
          {isMobile && (
            <section className="bg-[#22c55e] text-white flex justify-between text-sm font-semibold">
              <button className="p-4 pl-6 text-nowrap flex items-center gap-1 justify-start">
                <ChevronLeft className="w-4 h-4" /> Sebelumnya
              </button>

              <button className="p-4 pr-6 w-full flex items-center gap-1 justify-end">
                Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            </section>
          )}
        </main>

        {/* ================= SIDEBAR (ACCORDION DYNAMIC) ================= */}
        <aside
          className={`bg-white border-l border-gray-100 ${
            isMobile
              ? "w-full"
              : "max-w-120 w-full flex flex-col overflow-hidden"
          }`}
        >
          <div className="p-5 border-b border-gray-100 shrink-0">
            <h2 className="font-bold text-[15px] text-gray-900">
              Daftar Modul
            </h2>
          </div>

          <div
            className={`p-5 space-y-4 ${
              isMobile ? "" : "flex-1 overflow-y-auto"
            }`}
          >
            {modulesData.map((module) => {
              const isOpen = !!openModules[module.id];

              return (
                <div
                  key={module.id}
                  className="border-b border-gray-50 last:border-none pb-2"
                >
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggleModule(module.id)}
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
                          <div
                            key={item.id}
                            className={`border rounded-xl p-4 flex gap-3 items-center transition-colors ${
                              item.isActive
                                ? "bg-[#f0fdf4] border-[#22c55e] cursor-pointer"
                                : item.isDisabled
                                  ? "bg-white border-gray-100 opacity-60 cursor-not-allowed"
                                  : "bg-white border-gray-100 hover:border-gray-200 cursor-pointer"
                            }`}
                          >
                            {/* Render Ikon */}
                            {renderItemIcon(item)}

                            <div className="min-w-0">
                              <h4
                                className={`font-medium text-xs truncate ${
                                  item.isActive
                                    ? "text-gray-900"
                                    : item.isDisabled
                                      ? "text-gray-500"
                                      : "text-gray-800"
                                }`}
                              >
                                {item.title}
                              </h4>
                              <p
                                className={`text-[11px] mt-0.5 ${
                                  item.isActive
                                    ? "text-gray-500"
                                    : "text-gray-400"
                                }`}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
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
            })}
          </div>

          {/* Review Button */}
          <button
            className="w-full bg-[#fbbf24] hover:bg-yellow-500 transition-colors py-4 px-6 font-bold text-white text-sm shrink-0 flex items-center justify-center gap-2"
            onClick={() => setOpenModalReview(true)}
          >
            ☆ Beri Review & Rating
          </button>
        </aside>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      {!isMobile && (
        <footer className="h-14 shrink-0 bg-[#22c55e] text-white flex items-center justify-between px-8 text-xs font-medium tracking-wide">
          <button className="flex items-center gap-2 hover:opacity-90">
            ‹ Foundations of User Experience Design
          </button>

          <button className="flex items-center gap-2 hover:opacity-90">
            Foundations of User Experience Design ›
          </button>
        </footer>
      )}
    </div>
  );
};

export default LearningModulePage;
