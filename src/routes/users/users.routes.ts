import { Router } from "express";
import { ensureDataIsValid } from "../../middlewares/ensureDataIsValid.middleware";
import {
  userSchemaRequest,
  userSchemaUpdate,
} from "../../schemas/users.schema";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../../controllers/users/users.controllers";
import { ensureAuthMiddleware } from "../../middlewares/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController);

userRoutes.patch(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(userSchemaUpdate),
  updateUserController
);

userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

userRoutes.get("", ensureAuthMiddleware, listUserController);

export { userRoutes };
