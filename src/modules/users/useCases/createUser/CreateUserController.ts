import { Response, Request, NextFunction } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

function forwardError(callback: any, next: NextFunction): Response {
  try {
    return callback();
  } catch (error) {
    next(error);
  }
}

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  handle(request: Request, response: Response, next: NextFunction): Response {
    const doIt = () => {
      const { name, email } = request.body;
      const category = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(category);
    };
    return forwardError(doIt, next);
  }
}

export { CreateUserController };
