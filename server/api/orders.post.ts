import { orders, addOrder } from "~/data/orders";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Received order data:", body);

  const order = {
    id: Date.now().toString(),
    total: body.total,
    status: body.status,
    customer: body.customer,
  };

  //   orders.push(order); // Add the new order to the in-memory orders array
  addOrder(order); // Add the new order to the beginning of the in-memory orders array

  return {
    success: true,
    message: "Order received successfully",
    order,
  };
});
