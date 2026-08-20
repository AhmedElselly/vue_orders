<script setup lang="ts">
definePageMeta({
  middleware: ["auth", "role"],
  requiredRole: "ADMIN",
});
</script>

<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Only administrators should see this.</p>
  </div>
</template>
