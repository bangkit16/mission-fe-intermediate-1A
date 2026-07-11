// LearningModulePage.tsx
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const LearningModulePage = () => {
  const isMobile = useIsMobile();

  const modules = Array.from({ length: 5 });

  return (
    <div
      className={
        isMobile
          ? "min-h-screen bg-white flex flex-col font-sans text-[#1f2937]"
          : "h-screen overflow-hidden bg-white flex flex-col font-sans text-[#1f2937]"
      }
    >
      {/* ================= HEADER ================= */}
      <header className="h-16 shrink-0 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3 min-w-0">
          <button className="text-gray-600 hover:text-gray-900 text-xl font-medium">
            ←
          </button>

          <h1 className="font-medium text-[15px] text-gray-800 truncate">
            Foundations of User Experience Design
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-28 h-2 rounded-full bg-orange-100 overflow-hidden">
              <div className="w-3/4 h-full bg-[#f59e0b] rounded-full" />
            </div>

            <span className="font-semibold text-xs text-[#22c55e] flex items-center gap-1">
              10/12 <span className="text-[10px] text-gray-400">▼</span>
            </span>
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
      </header>

      {/* ================= CONTENT ================= */}
      <div
        className={
          isMobile ? "flex flex-col" : "flex-1 overflow-hidden lg:flex"
        }
      >
        {/* ================= LEFT ================= */}
        <main
          className={
            isMobile ? "flex flex-col" : "flex-1 flex flex-col overflow-hidden"
          }
        >
          {/* VIDEO */}
          <section
            className={`bg-[#1a1a1a] flex items-center justify-center shrink-0 relative ${
              isMobile ? "h-[30vh]" : "h-[58vh]"
            }`}
          >
            <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center text-xl shadow-lg cursor-pointer pl-1 text-gray-800 hover:scale-105 transition-transform">
              ▶
            </div>
          </section>

          {/* DESCRIPTION */}
          <section
            className={`bg-white p-8 lg:p-10 ${
              isMobile ? "" : "flex-1 overflow-y-auto"
            }`}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Download Rangkuman Modul
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              Silakan download rangkuman modul dari materi yang telah kamu
              pelajari
            </p>

            <button className="inline-flex items-center gap-2 border border-[#22c55e] rounded-xl bg-white px-5 py-2.5 text-[#22c55e] text-sm font-semibold hover:bg-green-50 transition-colors">
              <span className="text-xs bg-[#22c55e] text-white rounded px-1 py-0.2">
                ↓
              </span>{" "}
              Download Rangkuman
            </button>

            {/* Space Filler to show scrollability if text gets long */}
            <div className="mt-8 space-y-4 opacity-0 pointer-events-none">
              {Array.from({ length: 5 }).map((_, i) => (
                <p key={i} className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet.
                </p>
              ))}
            </div>
          </section>

          {/* MOBILE NAVIGATION */}
          {isMobile && (
            <section className="bg-[#22c55e] text-white grid grid-cols-2 text-sm font-medium border-t border-green-600">
              <button className="p-4 border-r border-green-400 text-left pl-6">
                ‹ Foundations of User Experience Design
              </button>

              <button className="p-4 text-right pr-6">
                Foundations of User Experience Design ›
              </button>
            </section>
          )}
        </main>

        {/* ================= SIDEBAR ================= */}
        <aside
          className={`bg-white border-l border-gray-100 ${
            isMobile ? "w-full" : "w-[380px] flex flex-col overflow-hidden"
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
            {/* Accordion Header */}
            <div>
              <div className="flex items-center justify-between py-2 mb-3 cursor-pointer">
                <h3 className="font-bold text-[14px] text-gray-900">
                  Introduction to HR
                </h3>
                <span className="text-gray-400 text-xs">▲</span>
              </div>

              {/* Accordion Content */}
              <div className="space-y-3">
                {modules.map((_, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3 items-center hover:border-gray-200 transition-colors cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-medium text-xs text-gray-800 truncate">
                        Video: Introduction to HR
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        12 Menit
                      </p>
                    </div>
                  </div>
                ))}

                {/* Active / Current Item */}
                <div className="bg-[#f0fdf4] border border-[#22c55e] rounded-xl p-4 flex gap-3 items-center cursor-pointer">
                  <div className="w-5 h-5 rounded bg-transparent border border-gray-700 text-gray-800 flex items-center justify-center text-[10px] font-bold shrink-0">
                    🗇
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-medium text-xs text-gray-900 truncate">
                      Rangkuman: Introduction to HR
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">12 Menit</p>
                  </div>
                </div>

                {/* Disabled / Quiz Item */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3 items-center opacity-60 cursor-not-allowed">
                  <div className="w-5 h-5 rounded text-gray-400 flex items-center justify-center text-[12px] shrink-0">
                    📋
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-medium text-xs text-gray-500 truncate">
                      Quiz: Introduction to HR
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      10 Pertanyaan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closed Accordion Items */}
            <div className="flex items-center justify-between py-3 border-t border-gray-50 font-bold text-[14px] text-gray-900 cursor-pointer">
              <span>Introduction to HR</span>
              <span className="text-gray-400 text-xs">▼</span>
            </div>
          </div>

          {/* Review Button */}
          <button className="w-full bg-[#fbbf24] hover:bg-yellow-500 transition-colors py-4 px-6 font-semibold text-white text-sm shrink-0 flex items-center justify-center gap-2">
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
