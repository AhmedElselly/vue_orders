export type Role = "ADMIN" | "MANAGER" | "CUSTOMER";

export type OrderStatus = "PENDING" | "COMPLETED" | "CANCELLED";

export interface User {
  name: string;
  role: Role;
}

export interface Order {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
}
