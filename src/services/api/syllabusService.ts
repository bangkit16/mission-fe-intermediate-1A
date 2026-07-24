import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface Lesson {
  id: string;
  title: string;
  type: string;
  duration: string;
  isActive: boolean;
  isCompleted: boolean;
  isDisabled: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Syllabus {
  courseId: string;
  modules: Module[];
}

/* ── API functions ─────────────────────────── */

export const getAllSyllabus = async (): Promise<Syllabus[]> => {
  const response = await api.get("/syllabus.json");
  return response.data as Syllabus[];
};

export const getSyllabusByCourseId = async (courseId: string): Promise<Syllabus> => {
  const response = await api.get(`/syllabus/${courseId}.json`);
  return response.data as Syllabus;
};

export const upsertSyllabus = async (payload: Syllabus): Promise<Syllabus> => {
  const response = await api.put(`/syllabus/${payload.courseId}.json`, payload);
  return response.data as Syllabus;
};

export const deleteSyllabus = async (courseId: string): Promise<void> => {
  await api.delete(`/syllabus/${courseId}.json`);
};
