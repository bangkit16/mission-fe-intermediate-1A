import { api } from "../../lib/axios";

/* ── Types ─────────────────────────────────── */

export type OrderStatus = "Berhasil" | "Gagal" | "Belum Bayar";

export interface Order {
  id: string;
  invoice: string;
  date: string;
  status: OrderStatus;
  title: string;
  image: string;
  price: number;
  total: number;
  userId: string;
}

export interface CreateOrderPayload {
  invoice: string;
  date: string;
  status: OrderStatus;
  title: string;
  image: string;
  price: number;
  total: number;
  userId: string;
}

export type UpdateOrderPayload = Partial<CreateOrderPayload>;

/* ── API functions ─────────────────────────── */

export const getAllOrders = async (): Promise<Order[]> => {
  const response = await api.get("/orders.json");
  return response.data as Order[];
};

export const getOrderById = async (id: string): Promise<Order> => {
  const response = await api.get(`/orders/${id}.json`);
  return response.data as Order;
};

export const createOrder = async (payload: CreateOrderPayload): Promise<Order> => {
  const response = await api.post("/orders.json", payload);
  return response.data as Order;
};

export const updateOrder = async (id: string, payload: UpdateOrderPayload): Promise<Order> => {
  const response = await api.put(`/orders/${id}.json`, payload);
  return response.data as Order;
};

export const deleteOrder = async (id: string): Promise<void> => {
  await api.delete(`/orders/${id}.json`);
};
