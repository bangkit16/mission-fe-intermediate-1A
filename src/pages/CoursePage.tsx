// CoursePage.tsx
import { useState, useEffect, useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useIsMobile from "../hooks/useIsMobile";
import ReviewModal from "../components/course/ReviewModal";
import VideoRangkumanScreen from "../components/course/screens/VideoRangkumanScreen";
import QuizScreen from "../components/course/screens/QuizScreen";
import VideoScreen from "../components/course/screens/VideoScreen";

import type { ContentItem } from "../features/course/types";
import type { ModuleItem } from "../services/api/courseContentService";
import { getCourseContentById } from "../services/api/courseContentService";
import {
  flattenItems,
  getNextItem,
  getPrevItem,
} from "../features/course/utils";
import { CourseHeader } from "../features/course/components/CourseHeader";
import { CourseNavigation } from "../features/course/components/CourseNavigation";
import { ModuleAccordion } from "../features/course/components/ModuleAccordion";

const LearningModulePage = () => {
  const isMobile = useIsMobile();
  const { idCourse } = useParams();

  const { data: content, isLoading, error } = useQuery({
    queryKey: ["courseContent", idCourse],
    queryFn: () => getCourseContentById(idCourse!),
    enabled: !!idCourse,
  });

  // ── State ──
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [openModalReview, setOpenModalReview] = useState<boolean>(false);

  useEffect(() => {
    if (content?.modules?.length && !Object.keys(openModules).length) {
      setOpenModules({ [content.modules[0].idModul]: true });
    }
  }, [content, openModules]);

  // ── Konversi service type -> local ContentItem ──
  const modulesData = useMemo(() => {
    if (!content?.modules) return [];
    return content.modules.map((m) => ({
      id: m.idModul,
      title: m.title,
      items: (m.items ?? []).map((item: ModuleItem): ContentItem => ({
        id: item.idMateri,
        type: item.type,
        title: item.title,
        subtitle: item.subtitle,
        isActive: item.isActive,
        isCompleted: item.isCompleted,
        isDisabled: item.isDisabled,
        questions: item.questions,
        durationMinutes: item.durationMinutes,
        passingScore: item.passingScore,
        totalQuestions: item.totalQuestions,
      })),
    }));
  }, [content]);

  // ── Active content ──
  const allItems = useMemo(() => flattenItems(modulesData), [modulesData]);
  const firstItem = allItems[0];
  const [activeContentId, setActiveContentId] = useState<string | null>(
    firstItem?.id ?? null,
  );

  useEffect(() => {
    setActiveContentId(firstItem?.id ?? null);
  }, [firstItem]);

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

  // ── Loading / Error ──
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400 text-sm">
        Memuat konten kursus...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-sm">
        Gagal memuat: {(error as Error).message}
      </div>
    );
  }

  if (!content) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400 text-sm">
        Konten kursus tidak ditemukan.
      </div>
    );
  }

  // ── Render screen ──
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
      case "final-test":
        return (
          <QuizScreen
            onComplete={goNext}
            questions={activeItem.questions ?? []}
            totalQuestions={activeItem.totalQuestions ?? activeItem.questions?.length ?? 0}
            durationMinutes={activeItem.durationMinutes}
            passingScore={activeItem.passingScore}
            title={activeItem.title}
          />
        );
      default:
        return null;
    }
  };

  const hasPrev =
    activeContentId !== null && getPrevItem(activeContentId, allItems) !== null;
  const hasNext =
    activeContentId !== null && getNextItem(activeContentId, allItems) !== null;

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
        title={content.courseTitle}
        isMobile={isMobile}
      />

      <div
        className={
          isMobile ? "flex flex-col" : "flex-1 overflow-hidden lg:flex"
        }
      >
        <main className="flex-1 flex flex-col overflow-hidden">
          {renderContent()}

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

          <button
            className="w-full bg-[#fbbf24] hover:bg-yellow-500 transition-colors py-4 px-6 font-bold text-white text-sm shrink-0 flex items-center justify-center gap-2"
            onClick={() => setOpenModalReview(true)}
          >
            ☆ Beri Review & Rating
          </button>
        </aside>
      </div>

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
