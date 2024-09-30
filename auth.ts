import NextAuth from "next-auth";

import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access = user.access;
        token.refresh = user.refresh;
        token.username = user.username;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.created_at = user.created_at;
        token.updated_at = user.updated_at;
        token.is_staff = user.is_staff;
        token.is_superuser = user.is_superuser;
        return token;
      } else if (Date.now() < (token.epx as number) * 1000) {
        return token;
      } else {
        try {
          const response = await fetch(
            `${process.env.BACKEND_HOST_URL}/auth/jwt/refresh/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refresh: token.refresh }),
            }
          );
          const tokensOrError = await response.json();
          token.access = tokensOrError.access;

          return token;
        } catch (error) {
          console.error("Error refreshing access_token", error);
          token.error = "RefreshTokenError";
          return token;
        }
      }
    },
    async session({ session, token }) {
      if (token) {
        (session.user as any) = token;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
