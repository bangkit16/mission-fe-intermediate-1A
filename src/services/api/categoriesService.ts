import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface Category {
  id: string;
  label: string;
  slug: string;
  active?: boolean;
}

/* ── API functions ─────────────────────────── */

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await api.get("/categories.json");
  return response.data as Category[];
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await api.get(`/categories/${id}.json`);
  return response.data as Category;
};

export const createCategory = async (payload: Omit<Category, "id">): Promise<Category> => {
  const response = await api.post("/categories.json", payload);
  return response.data as Category;
};

export const updateCategory = async (id: string, payload: Partial<Omit<Category, "id">>): Promise<Category> => {
  const response = await api.put(`/categories/${id}.json`, payload);
  return response.data as Category;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await api.delete(`/categories/${id}.json`);
};
