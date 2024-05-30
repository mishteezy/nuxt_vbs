export function useLogin() {
  const store = useLoginStore();

  const usernameRef = ref("");
  const passwordRef = ref("");

  const isFormValid = computed(
    () => usernameRef.value.length >= 2 && passwordRef.value.length >= 2
  );

  const login = async () => {
    if (!isFormValid) return;
    store.set({
      username: usernameRef.value,
      password: passwordRef.value,
    });
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameRef.value,
        password: passwordRef.value,
      }),
    });
  };

  return {
    usernameRef,
    passwordRef,
    login,
    isFormValid,
  };
}
