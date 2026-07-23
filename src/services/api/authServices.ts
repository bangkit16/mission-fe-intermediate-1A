import { api } from "../../lib/axios";

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await api.post("/suers", { email, password });
  return response.data;
};