import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface QuestionOption {
  id: string;
  text: string;
}

export interface PreTestQuestion {
  id: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
}

export interface PreTest {
  durationMinutes: number;
  passingScore: number;
  totalQuestions: number;
  questions: PreTestQuestion[];
}

export interface ModuleItem {
  id: string;
  type: "pre-test" | "video" | "rangkuman" | "quiz";
  title: string;
  subtitle: string;
  isCompleted: boolean;
  isActive: boolean;
  isDisabled: boolean;
}

export interface CourseContentModule {
  id: string;
  title: string;
  items: ModuleItem[];
}

export interface CourseContent {
  courseId: string;
  courseTitle: string;
  modules: CourseContentModule[];
  preTest: PreTest;
}

/* ── API functions ─────────────────────────── */

export const getAllCourseContents = async (): Promise<CourseContent[]> => {
  const response = await api.get("/course-content.json");
  return response.data as CourseContent[];
};

export const getCourseContentById = async (courseId: string): Promise<CourseContent> => {
  const response = await api.get(`/course-content/${courseId}.json`);
  return response.data as CourseContent;
};
