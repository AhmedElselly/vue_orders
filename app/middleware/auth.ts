import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("AUTH MIDDLEWARE RUNNING");
  console.log("Going to:", to.path);
  console.log("isAuth:", useAuth().isAuth.value);
  const { isAuth } = useAuth();

  if (!isAuth.value) {
    console.log("Not authenticated → redirecting");

    return navigateTo("/login");
  }
});
