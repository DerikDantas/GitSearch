import axios from "axios";
import { baseURL } from "./baseURL";

export const apiUsers = axios.create({
  baseURL: `${baseURL}users`,
  headers: {
    "Content-Type": "application/json",
  },
});
