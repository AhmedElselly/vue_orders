import type { Order } from "~/types/order";
import { OrderStatus } from "../domain/order-status";
import type { OrderRepository } from "../infrastructure/repositries/order.respository";

export interface CreateOrderInput {
  customer: string;
  total: number;
}

export class CreateOrder {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(input: CreateOrderInput): Promise<Order> {
    const order = await this.orderRepository.create({
      customer: input.customer,
      total: input.total,
      status: OrderStatus.PENDING,
    });

    return order;
  }
}
