import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { loginRoutes } from "./routes/login/login.routes";
import { userRoutes } from "./routes/users/users.routes";
import { contactsRoutes } from "./routes/contacts/contacts.routes";

const app = express();

app.use(express.json());
app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleAppError);

export default app;
