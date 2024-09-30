"use server";

import { signOut } from "@/auth";

export const useLogout = async () => {
  await signOut();
};
