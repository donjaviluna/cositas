import { atom } from "recoil";

const storedToken = localStorage.getItem("token");
const storedUser = JSON.parse(localStorage.getItem("user"));

export const authState = atom({
  key: "auth",
  default: {
    token: storedToken || "",
    user: storedUser || null,
  },
});

