import { Response, Request } from "express";
import createUserService from "../../services/users/createUser.service";
import updateUserService from "../../services/users/updateUser.service";
import deleteUserService from "../../services/users/deleteUser.service";
import listUserService from "../../services/users/listUserService";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const user = await listUserService(res.locals.userId);

  return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const updatedUser = await updateUserService(userId, req.body);

  return res.json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(res.locals.userId);

  return res.status(204).send();
};

export {
  createUserController,
  updateUserController,
  deleteUserController,
  listUserController,
};
