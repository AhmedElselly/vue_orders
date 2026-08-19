<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
const { user, login } = useAuth();

const router = useRouter();

const handleLogin = async () => {
  try {
    login();
    console.log("User logged in");
    router.push("/orders");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<template>
  <h1>Login Page</h1>
  <button @click="handleLogin">Login</button>
</template>
