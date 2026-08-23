import { ListOrders } from "../../../application/list-orders";
import { ordersContainer } from "../../../container";
import { PostgresOrderRepository } from "../../../infrastructure/repositries/postgres-order.repository";

export default defineEventHandler(async () => {
  return ordersContainer.listOrders.execute();
  //   const repository = new PostgresOrderRepository();
  //   const listOrders = new ListOrders(repository);

  //   return listOrders.execute();
});
