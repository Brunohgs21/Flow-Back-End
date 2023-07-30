import { loginResponseSchema } from "../../schemas/login.schema";
import { z } from "zod";

type TLoginRequest = {
  email: string;
  password: string;
};

type TLoginResponse = z.infer<typeof loginResponseSchema>;

export { TLoginRequest, TLoginResponse };
