// CoursePage.tsx
import { useState, useCallback, useMemo } from "react";
import useIsMobile from "../hooks/useIsMobile";
import ReviewModal from "../components/course/ReviewModal";
import VideoScreen from "../components/course/screens/VideoScreen";
import PreTestScreen from "../components/course/screens/PreTestScreen";
import VideoRangkumanScreen from "../components/course/screens/VideoRangkumanScreen";

import type { ContentItem } from "../../features/course/types";
import { modulesData } from "../../features/course/data";
import { flattenItems, getNextItem, getPrevItem } from "../../features/course/utils";
import { CourseHeader } from "../../features/course/components/CourseHeader";
import { CourseNavigation } from "../../features/course/components/CourseNavigation";
import { ModuleAccordion } from "../../features/course/components/ModuleAccordion";

const LearningModulePage = () => {
  const isMobile = useIsMobile();

  // State untuk mengontrol modul mana saja yang terbuka
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "mod-1": true,
  });

  const [openModalReview, setOpenModalReview] = useState<boolean>(false);

  // ── Active content (yang tampil di area utama) ──
  const allItems = useMemo(() => flattenItems(modulesData), []);
  const firstItem = allItems[0];
  const [activeContentId, setActiveContentId] = useState<string | null>(
    firstItem?.id ?? null,
  );

  // Item aktif sekarang
  const activeItem = useMemo(
    () => allItems.find((i) => i.id === activeContentId) ?? null,
    [activeContentId, allItems],
  );

  const goNext = useCallback(() => {
    if (!activeContentId) return;
    const next = getNextItem(activeContentId, allItems);
    if (next) setActiveContentId(next.id);
  }, [activeContentId, allItems]);

  const goPrev = useCallback(() => {
    if (!activeContentId) return;
    const prev = getPrevItem(activeContentId, allItems);
    if (prev) setActiveContentId(prev.id);
  }, [activeContentId, allItems]);

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleItemClick = (item: ContentItem) => {
    setActiveContentId(item.id);
  };

  // ── Render screen berdasarkan tipe item aktif ──
  const renderContent = () => {
    if (!activeItem) {
      return (
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          Pilih materi dari daftar modul
        </div>
      );
    }

    switch (activeItem.type) {
      case "video":
        return <VideoScreen />;
      case "rangkuman":
        return <VideoRangkumanScreen />;
      case "pre-test":
      case "quiz":
        return <PreTestScreen onComplete={goNext} />;
      default:
        return null;
    }
  };

  const hasPrev = activeContentId !== null && getPrevItem(activeContentId, allItems) !== null;
  const hasNext = activeContentId !== null && getNextItem(activeContentId, allItems) !== null;

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

      <CourseHeader
        title="Foundations of User Experience Design"
        isMobile={isMobile}
      />

      {/* ================= CONTENT ================= */}
      <div
        className={
          isMobile ? "flex flex-col" : "flex-1 overflow-hidden lg:flex"
        }
      >
        {/* ================= LEFT (MAIN CONTENT) ================= */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {renderContent()}

          {/* MOBILE NAVIGATION */}
          {isMobile && (
            <CourseNavigation
              activeItem={activeItem}
              hasPrev={hasPrev}
              hasNext={hasNext}
              onPrev={goPrev}
              onNext={goNext}
              isMobile={true}
            />
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
            {modulesData.map((module) => (
              <ModuleAccordion
                key={module.id}
                module={module}
                isOpen={!!openModules[module.id]}
                activeContentId={activeContentId}
                onToggle={toggleModule}
                onItemClick={handleItemClick}
              />
            ))}
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
        <CourseNavigation
          activeItem={activeItem}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onPrev={goPrev}
          onNext={goNext}
          isMobile={false}
        />
      )}
    </div>
  );
};

export default LearningModulePage;
