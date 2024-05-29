interface SignupStore {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValue: SignupStore = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const useSignupStore = defineStore("signup", {
  state: () => defaultValue,
  actions: {
    set(payload: SignupStore) {
      this.$patch(payload);
    },
    resetPassword() {
      this.password = "";
      this.confirmPassword = "";
    },
  },
});
