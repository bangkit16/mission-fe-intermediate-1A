import { api } from "../../lib/axios";

/* ── Type ──────────────────────────────────── */

export interface Order {
  id: string;
  invoice: string;
  date: string;
  status: "Berhasil" | "Gagal" | "Belum Bayar";
  title: string;
  image: string;
  price: number;
  total: number;
  userId: string;
}

/* ── API functions ─────────────────────────── */

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await api.get("/orders.json");
  return response.data as Order[];
};
