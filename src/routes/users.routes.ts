/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Rotas relacionadas aos usuários
 */

import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users/users.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const userRoutes = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário.
 *     tags: [Users]
 *     requestBody:
 *       description: Objeto contendo os dados do novo usuário.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os dados do usuário criado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 */
userRoutes.post(
  "/",
  ensureDataIsValid(userSchemaRequest),
  createUserController
);

/**
 * @swagger
 * /users:
 *   patch:
 *     summary: Atualiza um usuário existente.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Objeto contendo os dados do usuário a ser atualizado.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os dados do usuário atualizado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 */
userRoutes.patch(
  "/",
  ensureAuthMiddleware,
  ensureDataIsValid(userSchemaUpdate),
  updateUserController
);

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Deleta um usuário existente.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna uma mensagem indicando que o usuário foi deletado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Usuário deletado com sucesso."
 */
userRoutes.delete("/", ensureAuthMiddleware, deleteUserController);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista usuário logado.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna uma lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                 example:
 *                   - id: 1
 *                     name: "John Doe"
 *                     email: "johndoe@example.com"
 *                   - id: 2
 *                     name: "Jane Smith"
 *                     email: "janesmith@example.com"
 */
userRoutes.get("/", ensureAuthMiddleware, listUserController);

export { userRoutes };
