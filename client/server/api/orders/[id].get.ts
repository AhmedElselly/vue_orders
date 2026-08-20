import { orders } from "~/data/orders";
import { Order } from "~/types/order";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const id = getRouterParam(event, "id");

  console.log({ id });

  // const order = orders.find((o) => o.id === id);
  const order = await $fetch<Order | null>(`${config.backendUrl}/orders/${id}`);

  console.log({ order });

  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: "Order not found",
    });
  }

  return order;
});
