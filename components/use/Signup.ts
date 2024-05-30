export function useSignup() {
  const store = useSignupStore();

  const userRef = ref(store.username);
  const emailRef = ref(store.email);
  const passwordRef = ref(store.password);
  const confirmPasswordRef = ref(store.confirmPassword);

  const router = useRouter();

  const isFormValid = () =>
    userRef.value.length >= 2 &&
    emailRef.value.length >= 2 &&
    passwordRef.value.length >= 2 &&
    confirmPasswordRef.value.length >= 2;

  const signup = async () => {
    if (!isFormValid()) return;
    store.set({
      username: userRef.value,
      email: emailRef.value,
      password: passwordRef.value,
      confirmPassword: confirmPasswordRef.value,
    });
    router.push("/otp");
  };

  return {
    userRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    signup,
    isFormValid,
  };
}
