import "reflect-metadata";
import "express-async-errors";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { loginRoutes } from "./routes/login.routes";
import { userRoutes } from "./routes/users.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app = express();
app.use(express.json());
// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Contact Flow API",
      version: "1.0.0",
      description: "API Documentation for Contact Flow",
    },
    basePath: "http://localhost:3000/api-docs",
  },
  apis: ["src/routes/*.ts"], // Caminho para os arquivos com as rotas documentadas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Rota para acessar a documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleAppError);

export default app;
