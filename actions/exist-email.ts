"use server";

import { axiosInstance } from "@/lib/axios";

export const existEmail = async (email: string) => {
  try {
    const response = await axiosInstance.get(`/api/exist/email/${email}/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
