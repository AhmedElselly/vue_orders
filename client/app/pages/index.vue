<script setup lang="ts">
import type { Role, User } from "~/types/user";

const user = reactive<User>({
  name: "John Doe",
  role: "MANAGER",
});

function updateUserRole(newRole: Role) {
  user.role = newRole;
}
</script>

<template>
  <h1>Home page</h1>

  <UserCard :name="user.name" :role="user.role" @update-role="updateUserRole" />
</template>
