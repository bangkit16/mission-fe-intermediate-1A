import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  noQuestion: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
}

export interface ModuleItem {
  idMateri: string;
  type: "pre-test" | "video" | "rangkuman" | "quiz";
  title: string;
  subtitle: string;
  isCompleted: boolean;
  isActive: boolean;
  isDisabled: boolean;
  durationMinutes?: number;
  passingScore?: number;
  totalQuestions?: number;
  questions?: Question[];
}

export interface CourseContentModule {
  idModul: string;
  title: string;
  items?: ModuleItem[];
}

export interface CourseContent {
  courseId: string;
  courseTitle: string;
  modules: CourseContentModule[];
}

/* ── API functions ─────────────────────────── */

export const getCourseContentById = async (
  id: string,
): Promise<CourseContent> => {
  const response = await api.get(`/course-content/${id}.json`);
  return response.data as CourseContent;
};
