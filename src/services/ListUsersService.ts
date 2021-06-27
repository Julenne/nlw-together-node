import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// essa biblioteca é boa para excluir renomear atributos e etc.
import { classToPlain } from "class-transformer"; 

class ListUserService {
  async execute(){
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUserService }