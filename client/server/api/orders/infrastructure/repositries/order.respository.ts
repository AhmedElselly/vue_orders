import type { Order } from "../../domain/order";

export interface OrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  create(order: Omit<Order, "id">): Promise<Order>;
  update(order: Order): Promise<Order>;
  delete(id: string): Promise<void>;
}
