import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(6, {
    message: "Password should be of minimum 6 characters.",
  }),
});

export const UserSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  role: z.string().min(1, {
    message: "Please assign a role",
  }),
  status: z.string().min(1, {
    message: "Please choose a status.",
  }),
});

export const PermissionSchema = z.object({
  key: z.string().min(1, {
    message: "Permission Name is Required",
  }),
  label: z.string().min(1, {
    message: "Permission Label is Required",
  }),
  description: z.string().min(1, {
    message: "Permission Description is Required",
  }),
});
