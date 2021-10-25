import { Response } from "express";

export interface IStatusCodes {
  ok: 200;
  badRequest: 400;
  notFound: 404;
  internalServer: 500;
}

class CustomException extends Error {
  statusCode;
  message;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  // https://dev.to/nedsoft/central-error-handling-in-express-3aej
}

const handleErrorMidleware = (error, response: Response): Response => {
  const { statusCode, message } = error;

  return response.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export { CustomException, handleErrorMidleware };
