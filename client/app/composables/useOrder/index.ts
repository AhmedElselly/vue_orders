import type { Order } from "~/types/order";

export function useOrder(id: string) {
  const { data: order, error, pending } = useFetch<Order>(`/api/orders/${id}`);

  return {
    order,
    error,
    pending,
  };
}
