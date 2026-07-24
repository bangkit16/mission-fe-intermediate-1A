import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface Review {
  id: string;
  name: string;
  batch: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface CourseReviews {
  courseId: string;
  reviews: Review[];
}

/* ── API functions ─────────────────────────── */

export const getAllReviews = async (): Promise<CourseReviews[]> => {
  const response = await api.get("/reviews.json");
  return response.data as CourseReviews[];
};

export const getReviewsByCourseId = async (courseId: string): Promise<CourseReviews> => {
  const response = await api.get(`/reviews/${courseId}.json`);
  return response.data as CourseReviews;
};

export const addReview = async (courseId: string, payload: Omit<Review, "id">): Promise<Review> => {
  const response = await api.post(`/reviews/${courseId}.json`, payload);
  return response.data as Review;
};

export const updateReview = async (courseId: string, reviewId: string, payload: Partial<Omit<Review, "id">>): Promise<Review> => {
  const response = await api.put(`/reviews/${courseId}/${reviewId}.json`, payload);
  return response.data as Review;
};

export const deleteReview = async (courseId: string, reviewId: string): Promise<void> => {
  await api.delete(`/reviews/${courseId}/${reviewId}.json`);
};
