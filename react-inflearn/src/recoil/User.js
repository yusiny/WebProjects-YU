import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    isLogin: false,
    username: "",
  },
});
