import { CreateOrder } from "./application/create-order";
import { DeleteOrder } from "./application/delete-order";
import { GetOrder } from "./application/get-order";
import { ListOrders } from "./application/list-orders";
import { UpdateOrder } from "./application/update-order";
import { PostgresOrderRepository } from "./infrastructure/repositries/postgres-order.repository";

const orderRepository = new PostgresOrderRepository();

export const ordersContainer = {
  listOrders: new ListOrders(orderRepository),
  createOrder: new CreateOrder(orderRepository),
  getOrder: new GetOrder(orderRepository),
  updateOrder: new UpdateOrder(orderRepository),
  deleteOrder: new DeleteOrder(orderRepository),
};
