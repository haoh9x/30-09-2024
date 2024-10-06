"use server";

import { axiosInstance } from "@/lib/axios";

export const activeUser = async (uid: string, token: string) => {
  try {
    const res = await axiosInstance.post("/auth/users/activation/", {
      uid: uid,
      token: token,
    });
    if (res.status === 204) {
      return {
        success: "Kích hoạt tài khoản thành công",
      };
    } else {
      return;
    }
  } catch (error) {}
};
