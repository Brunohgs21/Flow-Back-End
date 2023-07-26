/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Rotas relacionadas aos contatos
 */

import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contacts/contacts.controllers";
import ensureIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";
import ensureContactExistsMiddleware from "../middlewares/ensureContactExistsMiddleware";

const contactsRoutes = Router();

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Cria um novo contato.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Objeto contendo os dados do novo contato.
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
 *               phone:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os dados do contato criado.
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
 *                 phone:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 */
contactsRoutes.post(
  "/",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Lista todos os contatos.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna uma lista de contatos.
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
 *                   phone:
 *                     type: string
 *                 example:
 *                   - id: 1
 *                     name: "John Doe"
 *                     email: "johndoe@example.com"
 *                     phone: "555-1234"
 *                   - id: 2
 *                     name: "Jane Smith"
 *                     email: "janesmith@example.com"
 *                     phone: "555-5678"
 */
contactsRoutes.get("", ensureAuthMiddleware, listAllContactsController);

/**
 * @swagger
 * /contacts/{id}:
 *   patch:
 *     summary: Atualiza um contato existente.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contato a ser atualizado.
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       description: Objeto contendo os dados do contato a ser atualizado.
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
 *               phone:
 *                 type: string
 *             example:
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os dados do contato atualizado.
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
 *                 phone:
 *                   type: string
 *             example:
 *               id: 1
 *               name: "John Doe"
 *               email: "johndoe@example.com"
 *               phone: "555-1234"
 */
contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Deleta um contato existente.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contato a ser deletado.
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Sucesso. Retorna uma mensagem indicando que o contato foi deletado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Contato deletado com sucesso."
 */
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  ensureIsOwnerMiddleware,
  deleteContactController
);

export { contactsRoutes };
