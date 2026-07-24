import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  gender: string;
  countryCode: string;
  phoneNumber: string;
  profileImage: string;
  createdAt: string;
}

export interface CreateUserPayload {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  countryCode: string;
  phoneNumber: string;
  profileImage?: string;
}

export type UpdateUserPayload = Partial<CreateUserPayload>;

/* ── API functions ─────────────────────────── */

export const getAllUsers = async (): Promise<User[]> => {
  const response = await api.get("/users.json");
  return response.data as User[];
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/users/${id}.json`);
  return response.data as User;
};

export const updateUser = async (id: string, payload: UpdateUserPayload): Promise<User> => {
  const response = await api.put(`/users/${id}.json`, payload);
  return response.data as User;
};

export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/users/${id}.json`);
};
