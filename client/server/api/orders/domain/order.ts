import { OrderStatus } from "./order-status";

export interface Order {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
}
