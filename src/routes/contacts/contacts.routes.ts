import { Router } from "express";
import { ensureDataIsValid } from "../../middlewares/ensureDataIsValid.middleware";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../../schemas/contacts.schema";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  updateContactController,
} from "../../controllers/contacts/contacts.controllers";
import ensureIsOwnerMiddleware from "../../middlewares/ensureIsOwner.middleware";
import ensureContactExistsMiddleware from "../../middlewares/ensureContactExistsMiddleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);

contactsRoutes.get("", ensureAuthMiddleware, listAllContactsController);

contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);

contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  ensureIsOwnerMiddleware,
  deleteContactController
);

export { contactsRoutes };
