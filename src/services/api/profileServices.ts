import { api } from "../../lib/axios";
import type { User } from "./usersService";

/* ── API functions ─────────────────────────── */

export const getProfile = async (userId: string): Promise<User> => {
  const response = await api.get(`/users/${userId}.json`);
  return response.data as User;
};

export const updateProfile = async (userId: string, payload: Partial<Omit<User, "id" | "createdAt">>): Promise<User> => {
  const response = await api.put(`/users/${userId}.json`, payload);
  return response.data as User;
};
