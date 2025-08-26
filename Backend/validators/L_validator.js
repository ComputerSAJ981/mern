import { z } from "zod/v3";
import {regex} from 'regex';

const  lUser = z.object({
    email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .min(10, { message: "Email must be at least 10 characters long!" })
    .max(30, { message: "Email must be at most 30 characters long!" }),

    password: z
    .string({ required_error: "Password is required!" })
    .trim()
    .min(3, { message: "Must be at least 4 characters long!" })
    .max(30, { message: "Must be at most 20 characters long!" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter!" })
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter!" })
    .regex(/[0-9]/, { message: "Must contain at least one number!" })
    .regex(/[\W_]/, { message: "Must contain at least one special character!" }),
});

export {lUser};