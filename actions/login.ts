"use server";

import { z } from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

import { LoginFormSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: z.infer<typeof LoginFormSchema>) => {
  const validatedFields = LoginFormSchema.safeParse(values);
  const email = validatedFields.data?.email;
  const password = validatedFields.data?.password;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Tài khoản hoặc mật khẩu không",
          };
        default:
          return {
            error: "Đăng nhập không thành công",
          };
      }
    }
    throw error;
  }
};
