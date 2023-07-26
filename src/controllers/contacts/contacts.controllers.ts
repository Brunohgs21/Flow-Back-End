import { Response, Request } from "express";
import createContactService from "../../services/contacts/createContact.service";
import listAllContactsService from "../../services/contacts/listAllContacts.service";
import updateContactService from "../../services/contacts/updateContact.service";
import deleteContactService from "../../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, res.locals.userId);

  return res.status(201).json(newContact);
};

const listAllContactsController = async (req: Request, res: Response) => {
  const contacts = await listAllContactsService(res.locals.userId);

  return res.status(200).json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;

  const updatedContact = await updateContactService(contactId, req.body);

  return res.json(updatedContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;

  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listAllContactsController,
  updateContactController,
  deleteContactController,
};
