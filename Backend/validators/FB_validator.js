import { z } from "zod/v3";
import {regex} from 'regex';

const  fbUser = z.object({
    email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .min(10, { message: "Email must be at least 10 characters long!" })
    .max(30, { message: "Email must be at most 30 characters long!" }),

    message: z
    .string({ required_error: "Email is required!" })
    .min(5, { message: "Message must be at least 5 characters long!" })
    .max(50, { message: "Email must be at most 50 characters long!" }),
});

export {fbUser};
