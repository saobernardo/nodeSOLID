import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import {User} from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase{
    //declarando um atributo apenas adicionando private no parâmetro do contrutor
    constructor(private usersRepository: IUsersRepository, private mailProvider: IMailProvider){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error('Usuario ya existe');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to:{
                name: data.name,
                email: data.email
            },
            from:{
                name: 'Equipo de el Applicación',
                email: 'contato@eschool.com.br'
            },
            subject: 'Sea bien-venido a la plataforma',
            body: '<p>Usted ya puede acesar nuestro sistema</p>'
        });
    }
}