import { existEmail } from "@/actions/exist-email";
import { existUsername } from "@/actions/exist-username";
import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    first_name: z
      .string()
      .min(1, {
        message: "Không được để trống",
      })
      .max(10, {
        message: "Họ tối đa 10 ký tự",
      }),
    last_name: z
      .string()
      .min(1, {
        message: "Không được để trống",
      })
      .max(100, {
        message: "Tên tối đa 100 ký tự",
      }),
    username: z
      .string()
      .min(1, {
        message: "Không được để trống",
      })
      .max(30, {
        message: "Username tối đa 30 ký tự",
      })
      .regex(/^[a-zA-Z0-9\+]*$/, "Username không được chứa ký tự đặc biệt")
      .refine(async (e) => {
        const data = await existUsername(e);
        return !data;
      }, "Username đã tồn tại"),
    email: z
      .string()
      .email()
      .min(1, {
        message: "Email không được để trống",
      })
      .refine(async (e) => {
        const data = await existEmail(e);
        return !data;
      }, "Email đã tồn tại"),
    password: z
      .string()
      .min(8, {
        message: "Mật khẩu tối thiểu 8 ký tự",
      })
      .max(24, {
        message: "Mật khẩu tối đa 24 ký tự",
      }),
    re_password: z
      .string()
      .min(8, {
        message: "Mật khẩu tối thiểu 8 ký tự",
      })
      .max(24, {
        message: "Mật khẩu tối đa 24 ký tự",
      }),
  })
  .superRefine(({ re_password, password }, ctx) => {
    if (re_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Mật khẩu xác nhận không khớp",
        path: ["re_password"],
      });
    }
  });

export const LoginFormSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email không được để trống",
  }),
  password: z.string().min(8, {
    message: "Mật khẩu tối thiểu 8 ký tự",
  }),
});
