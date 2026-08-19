<script setup lang="ts">
import { useOrder } from "~/composables/useOrder";
const route = useRoute();
const orderId = route.params.id as string;

const { order, error, pending } = useOrder(orderId);
</script>

<template>
  <div>
    <p>Order ID: {{ orderId }}</p>
  </div>
  <div>
    <h1>Order Details</h1>
    <p>Order ID: {{ orderId }}</p>
  </div>

  <div v-if="pending">
    <p>Loading...</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
    <h2>Order Information</h2>
    <p>Customer: {{ order.customer }}</p>
    <p>Status: {{ order.status }}</p>
    <p>Total: ${{ order.total.toFixed(2) }}</p>
  </div>
</template>
