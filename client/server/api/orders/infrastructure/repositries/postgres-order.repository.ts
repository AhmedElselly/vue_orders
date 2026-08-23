import { Order } from "../../domain/order";
import { OrderRepository } from "./order.respository";

export class PostgresOrderRepository implements OrderRepository {
  async findAll(): Promise<Order[]> {}

  async findById(id: string): Promise<Order | null> {}

  async create(order: Omit<Order, "id">): Promise<Order> {}

  async update(order: Order): Promise<Order> {}

  async delete(id: string): Promise<void> {}
}
