import axios from "axios";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginFormSchema } from "@/schemas";

export default {
  pages: {
    signIn: "/dang-nhap",
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = await LoginFormSchema.parseAsync(
          credentials
        );

        const res = await axios.post(
          `${process.env.BACKEND_HOST_URL}/auth/jwt/create/`,
          {
            email,
            password,
          }
        );

        user = res.data;

        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
