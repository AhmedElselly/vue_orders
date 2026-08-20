import type { Role } from "~/types/user";

export function useAuth() {
  const isAuth = useState<boolean>("auth", () => false);
  const user = useState<User | null>("user", () => null);

  console.log({ user: user.value });

  function login() {
    isAuth.value = true;
    user.value = {
      id: "1",
      name: "Ahmed",
      role: "ADMIN" as Role,
    };
  }

  function logout() {
    isAuth.value = false;
    user.value = null;
  }

  return {
    isAuth,
    user,
    login,
    logout,
  };
}
