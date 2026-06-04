import { z } from "zod";

export const SignupSchema = z.object({
    fullName: z.string().min(1, {message: "Este campo es obligatorio"}),
    email: z.string().email({message: "Dirección de correo no válida"}),
    passw: z.string().min(1, {message: "Este campo es obligatorio"}),
});

export type SignupInput = z.infer<typeof SignupSchema>