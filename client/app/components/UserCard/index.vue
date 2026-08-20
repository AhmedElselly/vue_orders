<script setup lang="ts">
import type { Role, User } from "~/types/user";

const { name, role } = defineProps<User>();

const emit = defineEmits<{
  (event: "updateRole", role: Role): void;
}>();

function updateRole(newRole: Role) {
  emit("updateRole", newRole);
}
</script>

<template>
  <div>
    <h2>User Card</h2>
    <p>Name: {{ name }}</p>
    <p>Role: {{ role }}</p>
  </div>

  <div>
    <button @click="updateRole('ADMIN')">Set Role to ADMIN</button>
    <button @click="updateRole('MANAGER')">Set Role to MANAGER</button>
  </div>
</template>
