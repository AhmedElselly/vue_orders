import type { Order } from "~/types/order";

export function useOrders() {
  //   const orders = ref(0);

  const {
    data: orders,
    error,
    pending,
  } = useFetch<Order[] | null>("/api/orders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const cancelled = ref(2);

  return {
    orders,
    pending,
    error,
    cancelled,
  };
}
