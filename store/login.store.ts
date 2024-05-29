interface LoginStore {
  username: string;
  password: string;
}

const defaultValue: LoginStore = {
  username: "",
  password: "",
};

export const useLoginStore = defineStore("login", {
  state: () => defaultValue,
  actions: {
    set(payload: LoginStore) {
      this.$patch(payload);
    },
  },
});
