import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { User } from '../entity/User';

export const routerUser = Router();
const userController = new UserController();

// Pega todos os usuários
routerUser.get('/', async (req, res) => {
    const users = await userController.getAllUsers();
    res.json(users);
})

// Cria usuários
routerUser.post('/', async (req, res) => {
    const dados = req.body;
    let cpf = '';
    let privado = 0; 
    let incomplete = 0;
    let dateLastOrder = new Date();
    let ticketLastOrder = 0;
    let averageTicket = 0;
    let storeCurrent = '';
    let storeLastOrder = '';

    const user = new User(cpf, privado, incomplete, dateLastOrder, averageTicket, ticketLastOrder, storeCurrent, storeLastOrder);
    const userSave = await userController.save(user);
    res.json(userSave);
});
