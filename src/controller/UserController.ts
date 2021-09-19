import { getManager, getConnection } from "typeorm";
import { User } from "../entity/User";

export class UserController {
    async save(user: User) {
        // Não permite criar um usuário com um CPF já utilizado
        let userOld = {};
        if (user.cpf) {
            userOld = await getManager().createQueryBuilder(User, "user").where("user.cpf = :cpf", { cpf: user.cpf }).getOne();
        }

        if (!userOld) {
            const userSave = await getManager().save(user);
            return userSave;
        } else {
            return 'User is create';
        }
    }

    async getAllUsers() {
        const users = await getManager().find(User);
        return users;
    }
}