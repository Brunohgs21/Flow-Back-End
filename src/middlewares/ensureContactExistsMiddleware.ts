import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";

function isValidUUID(inputString: string) {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidPattern.test(inputString);
}
const ensureContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId = req.params.id;

  if (!isValidUUID(contactId)) {
    return res.status(400).json({
      message: "Invalid UUID",
    });
  }
  const contact = await AppDataSource.getRepository(Contact).findOne({
    where: {
      id: contactId,
    },
  });
  console.log("aquiiiii2");
  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }
  return next();
};

export default ensureContactExistsMiddleware;
