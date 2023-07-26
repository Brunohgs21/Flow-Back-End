import { Response, Request } from "express";
import createContactService from "../../services/contacts/createContact.service";
import listAllContactsService from "../../services/contacts/listAllContacts.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, res.locals.userId);

  return res.status(201).json(newContact);
};

const listAllContactsController = async (req: Request, res: Response) => {
  const contacts = await listAllContactsService(res.locals.userId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
};

export { createContactController, listAllContactsController };
