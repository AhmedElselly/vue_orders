<script setup lang="ts">
const route = useRoute();
const orderId = route.params.id as string;
</script>

<template>
  <div>
    <h1>Order Details</h1>
    <p>Order ID: {{ orderId }}</p>
  </div>
</template>
