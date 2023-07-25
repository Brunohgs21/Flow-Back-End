import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
  createdAt: z.date(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactSchemaResponse = z.array(contactSchema);

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
};
