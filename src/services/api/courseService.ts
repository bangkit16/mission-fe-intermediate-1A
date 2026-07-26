import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface Instructor {
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface CourseInstructor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  description?: string;
}

export interface CourseFeatures {
  hasFinalExam: boolean;
  totalVideos: number;
  totalDocuments: number;
  hasCertificate: boolean;
  hasPretest: boolean;
}

export interface CourseReview {
  id: string;
  name: string;
  batch: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface SyllabusLesson {
  id: string;
  title: string;
  type: string;
  duration: string;
  isActive: boolean;
  isCompleted: boolean;
  isDisabled: boolean;
}

export interface SyllabusModule {
  id: string;
  title: string;
  lessons: SyllabusLesson[];
}

export interface Course {
  id: string;
  image: string;
  title: string;
  description: string;
  instructor: Instructor;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  duration: string;
  totalModules: number;
  totalVideos: number;
  totalDocuments: number;
  hasCertificate: boolean;
  hasPretest: boolean;
  hasFinalExam: boolean;
  language: string;
  slug: string;
  featured: boolean;
  /** from course-detail merge */
  bgImage?: string;
  promoEndsIn?: string;
  checkoutLink?: string;
  features?: CourseFeatures;
  instructors?: CourseInstructor[];
  /** from reviews & syllabus merge */
  reviews: CourseReview[];
  syllabus: SyllabusModule[];
}

export interface CreateCoursePayload {
  title: string;
  description: string;
  image?: string;
  instructor: Instructor;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  duration: string;
  totalModules: number;
  totalVideos: number;
  totalDocuments: number;
  hasCertificate: boolean;
  hasPretest: boolean;
  hasFinalExam: boolean;
  language: string;
  slug: string;
  featured?: boolean;
}

export type UpdateCoursePayload = Partial<CreateCoursePayload>;

/* ── API functions ─────────────────────────── */

export const getAllCourses = async (): Promise<Course[]> => {
  const response = await api.get("/courses.json");
  return response.data as Course[];
};

export const getCourseById = async (id: string): Promise<Course> => {
  const response = await api.get(`/courses/${id}.json`);
  return response.data as Course;
};

export const createCourse = async (payload: CreateCoursePayload): Promise<Course> => {
  const response = await api.post("/courses.json", payload);
  return response.data as Course;
};

export const updateCourse = async (id: string, payload: UpdateCoursePayload): Promise<Course> => {
  const response = await api.put(`/courses/${id}.json`, payload);
  return response.data as Course;
};

export const deleteCourse = async (id: string): Promise<void> => {
  await api.delete(`/courses/${id}.json`);
};
