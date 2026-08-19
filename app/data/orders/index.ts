import type { Order } from "~/types/order";

export let orders: Order[] = [
  {
    id: 1,
    customer: "Ahmed",
    total: 500,
    status: "PENDING",
  },
  {
    id: 2,
    customer: "John",
    total: 750,
    status: "COMPLETED",
  },
];

export const addOrder = (order: Order) => {
  orders = [order, ...orders]; // Add the new order to the beginning of the in-memory orders array
};
