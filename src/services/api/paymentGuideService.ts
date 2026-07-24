import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export interface PaymentGuideStep {
  id: string;
  title: string;
  steps: string[];
}

export interface PaymentGuide {
  methodId: string;
  guides: PaymentGuideStep[];
}

/* ── API functions ─────────────────────────── */

export const getAllPaymentGuides = async (): Promise<PaymentGuide[]> => {
  const response = await api.get("/payment-guide.json");
  return response.data as PaymentGuide[];
};

export const getPaymentGuideByMethodId = async (methodId: string): Promise<PaymentGuide> => {
  const response = await api.get(`/payment-guide/${methodId}.json`);
  return response.data as PaymentGuide;
};
