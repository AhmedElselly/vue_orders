<script setup lang="ts">
import { useOrders } from "~/composables/userOrders";
import type { Role, User } from "~/types/user";

const { orders, cancelled, pending, error } = useOrders();

const search = ref("");

const user = reactive<User>({
  name: "John Doe",
  role: "MANAGER",
});

const decreaseCancelled = () => {
  if (cancelled.value > 0) {
    cancelled.value--;
  }
};

watch(orders, (newValue, oldValue) => {
  console.log(`Orders changed from ${oldValue} to ${newValue}`);
});

watch(
  () => user.role,
  (newRole, oldRole) => {
    console.log(`Role changed from ${oldRole} to ${newRole}`);
  },
);

watch(search, (newValue, oldValue) => {
  console.log(`Search changed from ${oldValue} to ${newValue}`);
});

const incrementCancelledOrders = () => {
  cancelled.value++;
};

const updateUserRole = (newRole: Role) => {
  user.role = newRole;
};

const updateUserName = (newName: string) => {
  user.name = newName;
};
</script>

<template>
  <h1>Orders page</h1>

  <div v-if="pending">
    <p>Loading...</p>
  </div>
  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
    <div v-for="order in orders" :key="order.id">
      <p>Order Customer: {{ order.customer }}</p>
      <p>Order Total: {{ order.total }}</p>
      <p>Order Status: {{ order.status }}</p>
      <hr />
    </div>
  </div>

  <!-- <div style="margin-top: 20px">
    <button @click="updateUserRole('ADMIN')">UPDATE TO ADMIN</button>
  </div>
  <div style="margin-top: 20px">
    <button @click="incrementCancelledOrders">Increase Cancelled</button>
  </div>
  <div style="margin-top: 20px">
    <button @click="decreaseCancelled">Decrease Cancelled</button>
  </div>
  <div style="margin-top: 20px">
    <button @click="updateUserName('Ahmed')">Update name</button>
  </div> -->
</template>
