import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface Certificate {
  id: string;
  courseTitle: string;
  courseDescription: string;
  instructorName: string;
  instructorRole: string;
  instructorAvatar: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  userId: string;
  completedAt: string;
}

/* ── API functions ─────────────────────────── */

export const getAllCertificates = async (): Promise<Certificate[]> => {
  const response = await api.get("/certificates.json");
  return response.data as Certificate[];
};

export const getCertificateById = async (id: string): Promise<Certificate> => {
  const response = await api.get(`/certificates/${id}.json`);
  return response.data as Certificate;
};

export const getCertificatesByUserId = async (userId: string): Promise<Certificate[]> => {
  const response = await api.get(`/certificates.json?userId=${userId}`);
  return response.data as Certificate[];
};
