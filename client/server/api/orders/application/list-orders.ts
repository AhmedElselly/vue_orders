import { OrderRepository } from "../infrastructure/repositries/order.respository";

export class ListOrders {
  constructor(private readonly orderRepository: OrderRepository) {}

  execute() {
    return this.orderRepository.findAll();
  }
}
