import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaUpdate = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .partial();

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate };
