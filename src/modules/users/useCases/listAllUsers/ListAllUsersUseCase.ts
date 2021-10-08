import { validate as validateId } from "uuid";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isIdValid = validateId(user_id);

    if (!isIdValid) throw new Error("User not found");

    const user = this.usersRepository.findById(user_id);

    if (!user) throw new Error("User not found");

    if (!user.admin) throw new Error("Admin permission needed");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
