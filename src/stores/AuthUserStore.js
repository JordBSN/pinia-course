import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("authUserStore", {
  state: () => {
    return {
      username : "Jordan Bastin",
    }
  }
});