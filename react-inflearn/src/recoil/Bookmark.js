import { atom } from "recoil";

export const bookmarkState = atom({
  key: "bookmarkState",
  default: {
    count: 0,
    lectures: [],
  },
});
