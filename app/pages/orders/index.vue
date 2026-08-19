<script setup lang="ts">
import { useOrders } from "~/composables/userOrders";
import type { Role, User } from "~/types/user";

definePageMeta({
  layout: "default",
});

const { orders, cancelled, pending, error, refreshOrders } = useOrders();

const search = ref("");

const user = reactive<User>({
  name: "John Doe",
  role: "MANAGER",
});

const newOrder = reactive({
  customer: "",
  total: 0,
  status: "PENDING" as OrderStatus,
});

const creating = ref(false);

const decreaseCancelled = () => {
  if (cancelled.value > 0) {
    cancelled.value--;
  }
};

async function createOrder() {
  creating.value = true;

  try {
    const response = await $fetch("/api/orders", {
      method: "POST",
      body: newOrder,
    });

    console.log("Order created successfully:", response);

    newOrder.customer = "";
    newOrder.total = 0;
    await refreshOrders(); // Refresh the orders list after creating a new order
  } catch (err) {
    console.error("Error creating order:", err);
  } finally {
    creating.value = false;
  }
}

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

  <!-- Order Creation Form -->

  <form @submit.prevent="createOrder" style="margin-bottom: 20px">
    <div>
      <label for="customer">Customer:</label>
      <input type="text" id="customer" v-model="newOrder.customer" required />
    </div>
    <div>
      <label for="total">Total:</label>
      <input
        type="number"
        id="total"
        v-model.number="newOrder.total"
        required
      />
    </div>
    <div>
      <label for="status">Status:</label>
      <select id="status" v-model="newOrder.status" required>
        <option value="PENDING">PENDING</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="CANCELLED">CANCELLED</option>
      </select>
    </div>
    <button type="submit" :disabled="creating">
      {{ creating ? "Creating..." : "Create Order" }}
    </button>
  </form>

  <div v-if="pending">
    <p>Loading...</p>
  </div>
  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-if="orders?.length === 0 && !pending && !error">
    <p>No orders found.</p>
  </div>

  <div v-else>
    <div v-for="order in orders" :key="order.id">
      <NuxtLink :to="`/orders/${order.id}`">
        <p>Order Customer: {{ order.customer }}</p>
        <p>Order Total: {{ order.total }}</p>
        <p>Order Status: {{ order.status }}</p>
        <hr />
      </NuxtLink>
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
