import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    access: string;
    refresh: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    created_at: string;
    updated_at: string;
    is_staff: boolean;
    is_superuser: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access: string;
    refresh: string;
    username: string;
    first_name: string;
    last_name: string;
    created_at: string;
    updated_at: string;
    is_staff: boolean;
    is_superuser: boolean;
  }
}
