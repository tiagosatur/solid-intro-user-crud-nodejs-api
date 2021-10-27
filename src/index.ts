import express from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerConfig from "./swagger.json";
import { handleErrorMidleware } from "./utils/CustomException";

const app = express();

app.use(express.json());

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use("/users", usersRoutes);

app.use((err, req, res, next) => {
  handleErrorMidleware(err, res);
  next(err);
});

export { app };
