import type { TFunction } from "i18next";
import { z } from "zod/v4";

export const createLoginSchema = (t: TFunction) =>
  z.object({
    email: z.email(t("validation.email.invalid")),
    password: z.string().min(8, t("validation.password.min")),
  });

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;

export const createRegisterSchema = (t: TFunction) =>
  z
    .object({
      name: z.string().min(2, t("validation.name.min")),
      email: z.email(t("validation.email.invalid")),
      password: z.string().min(8, t("validation.password.min")),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.confirm_password.mismatch"),
      path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>;

export const createProfileSchema = (t: TFunction) =>
  z.object({
    name: z.string().min(2, t("validation.name.min")),
    email: z.email(t("validation.email.invalid")),
    bio: z.string().max(160, t("validation.bio.max")).optional(),
  });

export type ProfileFormData = z.infer<ReturnType<typeof createProfileSchema>>;

export const createUsernameSchema = (t: TFunction) =>
  z.object({
    username: z
      .string()
      .min(3, t("validation.username.min"))
      .max(20, t("validation.username.max"))
      .regex(/^[a-zA-Z0-9_]+$/, t("validation.username.pattern")),
  });

export type UsernameFormData = z.infer<ReturnType<typeof createUsernameSchema>>;
