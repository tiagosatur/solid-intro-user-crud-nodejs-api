import { validate as validateId } from "uuid";

import { CustomException } from "../../../../utils/CustomException";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isIdValid = validateId(user_id);

    if (!isIdValid) throw new CustomException(404, "User not found");

    const user = this.usersRepository.findById(user_id);

    if (!user) throw new CustomException(400, "User not found");

    if (!user.admin) throw new CustomException(400, "Admin permission needed");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
