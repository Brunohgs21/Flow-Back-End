import { Router } from "express";
import { ensureDataIsValid } from "../../middlewares/ensureDataIsValid.middleware";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import { contactSchemaRequest } from "../../schemas/contacts.schema";
import {
  createContactController,
  listAllContactsController,
} from "../../controllers/contacts/contacts.controllers";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", ensureAuthMiddleware, listAllContactsController);
export { contactsRoutes };
