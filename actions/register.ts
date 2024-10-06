"use server";

import { z } from "zod";

import { RegisterFormSchema } from "@/schemas";
import { axiosInstance } from "@/lib/axios";

export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
  try {
    const res = await axiosInstance.post("/auth/users/", values);
    if (res.status === 201) {
      return {
        success: "Đăng ký tài khoản thành công",
      };
    } else {
      return;
    }
  } catch (error) {}
};
