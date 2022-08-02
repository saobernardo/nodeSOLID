import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mysqlUsersRepository = new MysqlUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(mysqlUsersRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserUseCase, createUserController};