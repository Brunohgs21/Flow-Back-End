/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Rotas relacionadas ao login
 */

import { Router } from "express";
import { createTokenController } from "../controllers/login/login.controller";

const loginRoutes = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Cria um token de autenticação.
 *     tags: [Login]
 *     requestBody:
 *       description: Objeto contendo as credenciais do usuário.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: "usuario123"
 *               password: "senha123"
 *     responses:
 *       200:
 *         description: Sucesso. Retorna um token de autenticação.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *               example:
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzZXIgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.Yg-Jb_Bu1j7GtNb8G8Zqy5yT2QKwlo8W60"
 */
loginRoutes.post("/", createTokenController);

export { loginRoutes };
