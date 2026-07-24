import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface Instructor {
  name: string;
  role: string;
  company: string;
  avatar: string;
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
