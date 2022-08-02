import {v4} from 'uuid';

export class User{
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    //Pega todas as propriedades da classe User, menos o id
    constructor(props: Omit<User, 'id'>, id?: string){
        //Passar cada propriedade do props para cada atributo da classe (this)
        Object.assign(this, props);

        if(!id){
            this.id = v4()
        }
    }
}