import { CustomException } from "../../../../utils/CustomException";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new CustomException(404, "User not found");

    const updatedUser = this.usersRepository.turnAdmin(user);

    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
