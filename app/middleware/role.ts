import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { user, isAuth } = useAuth();

  if (!user.value) {
    return navigateTo("/login");
  }

  if (to.meta.requiredRole !== user.value.role) {
    return navigateTo("/unauthorized");
  }
});
