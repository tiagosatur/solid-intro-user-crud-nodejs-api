import express from "express";

import { usersRoutes } from "./routes/users.routes";
import { handleErrorMidleware } from "./utils/CustomException";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((err, req, res, next) => {
  handleErrorMidleware(err, res);
  next(err);
});

export { app };
