export function useAuth() {
  const isAuth = useState<boolean>("auth", () => false);

  function login() {
    isAuth.value = true;
  }

  function logout() {
    isAuth.value = false;
  }

  return {
    isAuth,
    login,
    logout,
  };
}
