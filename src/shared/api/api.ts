import axios from "axios";

export const api = axios.create({
  // TODO | 06.07.2026: Забыл использовать переменную.
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
