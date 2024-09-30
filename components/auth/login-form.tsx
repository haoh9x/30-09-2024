"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginFormSchema } from "@/schemas";
import { startTransition } from "react";
import { login } from "@/actions/login";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success("Đăng nhập thành công");
        }
      });
    });
  };

  return (
    <div>
      <CardWrapper
        headerTitle="Đăng nhập"
        headerDescription="Chào mừng trở lại"
        backButtonLabel="Bạn chưa có tài khoản? Đăng ký"
        backButtonHref="/dang-ky"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="nguyenvana@example.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Đăng nhập
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};
