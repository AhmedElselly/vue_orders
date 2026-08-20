import type { Order } from "~/types/order";
import { orders } from "~/data/orders";

export default defineEventHandler(async (event) => {
  // Simulate fetching orders from a database or external API
  return orders;
});
