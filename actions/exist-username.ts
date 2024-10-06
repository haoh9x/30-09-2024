"use server";

import { axiosInstance } from "@/lib/axios";

export const existUsername = async (username: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/exist/username/${username}/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
