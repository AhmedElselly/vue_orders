<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
const { isAuth, logout } = useAuth();
const router = useRouter();

console.log({ isAuth: isAuth.value });

const handleLogout = async () => {
  try {
    logout();
    console.log("User logged out");
    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
</script>

<template>
  <div>
    <header>
      <h1>My ERP</h1>
    </header>

    <div>
      <aside>
        <nav>
          <NuxtLink to="/">Home</NuxtLink>
          <br />
          <NuxtLink to="/orders">Orders</NuxtLink>
          <br />
          <NuxtLink to="/products">Products</NuxtLink>
          <br />
          <NuxtLink to="/customers">Customers</NuxtLink>
          <br />
          <NuxtLink to="/admin">Admin</NuxtLink>
          <br />
          <button v-if="isAuth" @click="handleLogout">Logout</button>
        </nav>
      </aside>

      <main>
        <!-- This is where the content of the child pages will be
        rendered -->
        <slot />
      </main>
    </div>
  </div>
</template>
