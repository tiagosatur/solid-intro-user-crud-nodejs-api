import { Request, Response, NextFunction } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Response | void {
    try {
      const { user_id } = request.params;
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}

export { ShowUserProfileController };
