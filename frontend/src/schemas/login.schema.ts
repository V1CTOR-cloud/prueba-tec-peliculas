import { z } from "zod";

export const LoginSchema = z.object({
  identifier: z.string().min(1, "Este campo es obligatorio"),
  password: z.string(),
});

export type LoginInput = z.infer<typeof LoginSchema>;