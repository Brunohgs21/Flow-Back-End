import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../../schemas/contacts.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;

export { TContact, TContactRequest, TContactResponse };
