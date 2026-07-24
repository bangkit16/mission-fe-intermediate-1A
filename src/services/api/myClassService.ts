import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export type MyClassStatus = "Selesai" | "Sedang Berjalan";

export interface MyClassInstructor {
  name: string;
  role: string;
  avatar: string;
}

export interface MyClass {
  id: string;
  completedModules: number;
  totalModules: number;
  status: MyClassStatus;
  title: string;
  description: string;
  image: string;
  instructor: MyClassInstructor;
  duration: string;
  progress: number;
  userId: string;
}

/* ── API functions ─────────────────────────── */

export const getAllMyClasses = async (): Promise<MyClass[]> => {
  const response = await api.get("/my-classes.json");
  return response.data as MyClass[];
};

export const getMyClassById = async (id: string): Promise<MyClass> => {
  const response = await api.get(`/my-classes/${id}.json`);
  return response.data as MyClass;
};
