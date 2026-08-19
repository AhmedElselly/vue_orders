import type { Order } from "~/types/order";

export default defineEventHandler(async (event) => {
  // Simulate fetching orders from a database or external API
  const orders: Order[] | null = [
    {
      id: "1",
      customer: "John Doe",
      total: 100,
      status: "PENDING",
    },
    {
      id: "2",
      customer: "Jane Smith",
      total: 200,
      status: "COMPLETED",
    },
  ];
  return orders ? orders : null;
});
