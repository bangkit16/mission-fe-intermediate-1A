import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
}

export interface PaymentMethodCategory {
  id: string;
  name: string;
  methods: PaymentMethod[];
}

export interface PaymentMethodsGroup {
  id: string;
  categories: PaymentMethodCategory[];
}

/* ── API functions ─────────────────────────── */

export const getAllPaymentMethods = async (): Promise<PaymentMethodsGroup[]> => {
  const response = await api.get("/payment-methods.json");
  return response.data as PaymentMethodsGroup[];
};

export const getPaymentMethodsById = async (id: string): Promise<PaymentMethodsGroup> => {
  const response = await api.get(`/payment-methods/${id}.json`);
  return response.data as PaymentMethodsGroup;
};
