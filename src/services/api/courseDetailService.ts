import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface CourseDetailInstructor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  description: string;
}

export interface CourseDetailFeatures {
  hasFinalExam: boolean;
  totalVideos: number;
  totalDocuments: number;
  hasCertificate: boolean;
  hasPretest: boolean;
}

export interface CourseDetail {
  slug: string;
  title: string;
  bgImage: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  discount: number;
  promoEndsIn: string;
  language: string;
  checkoutLink: string;
  features: CourseDetailFeatures;
  instructors: CourseDetailInstructor[];
}

/* ── API functions ─────────────────────────── */

export const getAllCourseDetails = async (): Promise<CourseDetail[]> => {
  const response = await api.get("/course-detail.json");
  return response.data as CourseDetail[];
};

export const getCourseDetailBySlug = async (slug: string): Promise<CourseDetail> => {
  const response = await api.get(`/course-detail/${slug}.json`);
  return response.data as CourseDetail;
};

export const createCourseDetail = async (payload: Omit<CourseDetail, "slug">): Promise<CourseDetail> => {
  const response = await api.post("/course-detail.json", payload);
  return response.data as CourseDetail;
};

export const updateCourseDetail = async (slug: string, payload: Partial<CourseDetail>): Promise<CourseDetail> => {
  const response = await api.put(`/course-detail/${slug}.json`, payload);
  return response.data as CourseDetail;
};

export const deleteCourseDetail = async (slug: string): Promise<void> => {
  await api.delete(`/course-detail/${slug}.json`);
};
