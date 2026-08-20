import { orders, addOrder } from "~/data/orders";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Received order data:", body);

  const config = useRuntimeConfig();

  const response = await $fetch(`${config.backendUrl}/orders`, {
    method: "POST",
    body,
  });

  console.log("Response from backend:", response);

  return {
    success: true,
    message: "Order received successfully",
    order: response,
  };
});
