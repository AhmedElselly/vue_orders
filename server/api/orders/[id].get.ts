import { orders } from "~/data/orders";

export default defineEventHandler(async (event) => {
  //   const { id } = event.context.params;

  const id = getRouterParam(event, "id");

  console.log({ id });

  const order = orders.find((o) => o.id === id);

  console.log({ order });

  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: "Order not found",
    });
  }

  return order;
});
