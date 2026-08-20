<script setup lang="ts">
const { data: orders, pending, error } = await useFetch("/api/orders");
</script>

<template>
  <h1>Orders</h1>

  <p v-if="pending">Loading...</p>

  <p v-else-if="error">Failed to load orders.</p>

  <div v-else>
    <div v-for="order in orders" :key="order.id">
      {{ order.customer }}
    </div>
  </div>
</template>
