import { auth } from "@/auth";
import axios from "axios";

const baseURL = `${process.env.BACKEND_HOST_URL}`;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
