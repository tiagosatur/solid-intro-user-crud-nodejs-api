import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    const category = this.createUserUseCase.execute({ name, email });
    return response.status(201).json(category);
  }
}

export { CreateUserController };
