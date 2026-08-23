import { Order } from "../domain/order";
import type { OrderRepository } from "../infrastructure/repositries/order.respository";

export type UpdateOrderInput = Partial<
  Pick<Order, "customer" | "total" | "status">
>;

export class UpdateOrder {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string, input: UpdateOrderInput): Promise<Order> {
    const existing = await this.orderRepository.findById(id);

    if (!existing) {
      throw new Error("Order does not exist!");
    }

    const updatedOrder: Order = {
      ...existing,
      ...input,
    };

    return this.orderRepository.update(updatedOrder);
  }
}
