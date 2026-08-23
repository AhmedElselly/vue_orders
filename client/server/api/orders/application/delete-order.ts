import { OrderRepository } from "../infrastructure/repositries/order.respository";

export class DeleteOrder {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string) {
    const exists = await this.orderRepository.findById(id);

    if (!exists) {
      throw new Error("Order does not exist!");
    }

    return this.orderRepository.delete(id);
  }
}
