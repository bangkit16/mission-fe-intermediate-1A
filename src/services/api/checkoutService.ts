import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface VirtualAccount {
  bankName: string;
  bankLogoUrl: string;
  vaDisplay: string;
  vaFull: string;
}

export type CheckoutStatus = "pending" | "paid" | "expired";

export interface Checkout {
  id: string;
  productName: string;
  productPrice: number;
  adminFee: number;
  total: number;
  paymentMethodId: string;
  paymentMethodName: string;
  virtualAccount: VirtualAccount;
  timerSeconds: number;
  status: CheckoutStatus;
  userId: string;
  courseId: string;
  createdAt: string;
  expiresAt: string;
}

/* ── API functions ─────────────────────────── */

export const getAllCheckouts = async (): Promise<Checkout[]> => {
  const response = await api.get("/checkout.json");
  return response.data as Checkout[];
};

export const getCheckoutById = async (id: string): Promise<Checkout> => {
  const response = await api.get(`/checkout/${id}.json`);
  return response.data as Checkout;
};

export const createCheckout = async (payload: Omit<Checkout, "id" | "createdAt" | "expiresAt">): Promise<Checkout> => {
  const response = await api.post("/checkout.json", payload);
  return response.data as Checkout;
};

export const updateCheckout = async (id: string, payload: Partial<Checkout>): Promise<Checkout> => {
  const response = await api.put(`/checkout/${id}.json`, payload);
  return response.data as Checkout;
};
