import type { Order } from "~/types/order";

export function useOrders() {
  const {
    data: orders,
    error,
    pending,
    refresh: refreshOrders,
  } = useAsyncData<Order[] | null>("/api/orders", () => {
    return $fetch("/api/orders");
  });
  // const {
  //   data: orders,
  //   error,
  //   pending,
  //   refresh: refreshOrders,
  // } = useFetch<Order[] | null>("/api/orders", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  const cancelled = ref(2);

  return {
    orders,
    pending,
    error,
    cancelled,
    refreshOrders,
  };
}
