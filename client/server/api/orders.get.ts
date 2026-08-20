import type { Order } from "~/types/order";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Simulate fetching orders from a database or external API
  return $fetch<Order[] | null>(`${config.backendUrl}/orders`);
});
