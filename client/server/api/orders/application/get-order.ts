import type { OrderRepository } from "../infrastructure/repositries/order.respository";

export class GetOrder {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(id: string) {
    const order = this.orderRepository.findById(id);

    if (!order) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found!",
      });
    }

    return order;
  }
}
