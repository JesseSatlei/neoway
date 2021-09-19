import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { User } from '../entity/User';
import { Readable } from 'stream';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import { clearCpfCnpj } from '../common/utils';

// Importado desse modo devido  a erro na transpilação do typescript
const multer = require('multer');
const readline = require('readline');

export const routerUser = Router();
const userController = new UserController();
const multerConfig = multer();
// Pega todos os usuários
routerUser.get('/', async (req, res) => {
    const users = await userController.getAllUsers();
    res.json(users);
})

// Cria usuários
routerUser.post('/', multerConfig.single('file'), async (req, res) => {
    const { file } = req;

    const buffer = file.buffer;
    
    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    // Prepara para o arquivo ser lido uma linha por vez para que o processamento não seja forçado demais
    const userLine = readline.createInterface({
        input: readableFile
    });

    let cpfUser = '';
    let privado = 0; 
    let incomplete = 0;
    let dateLastOrder = '';
    let ticketLastOrder = 0;
    let averageTicket = 0;
    let storeCurrent = '';
    let storeLastOrder = '';

    let usersCreate = [];
    let cont = 0;
    for await (let line of userLine) {
        const user = line.trim().split(" ").filter((i) => {
            return i;
        });

        // Prepara os dados para ser criado o usuario
        cpfUser = cpf.isValid(user[0]) ? clearCpfCnpj(user[0]).toString() : '';
        privado = user[1];
        incomplete = user[2];
        dateLastOrder = user[3] != 'NULL' ? new Date(user[3]).getTime().toString() : new Date().getTime().toString();
        ticketLastOrder = user[4] != 'NULL' ? parseFloat(user[4].replace(',', '.')) : 0;
        averageTicket = user[5] != 'NULL' ? parseFloat(user[5].replace(',','.')) : 0;
        storeCurrent = user[6] != 'NULL' && cnpj.isValid(user[6]) ? clearCpfCnpj(user[6]) : null;
        storeLastOrder = user[7] != 'NULL' && cnpj.isValid(user[7]) ? clearCpfCnpj(user[7]) : null;

        // pula a primeira linha
        if (cont > 1) {
            // Instancia um novo usuario e passa ele para a controller, ela se conectará com o banco de dados e irá criar o novo usuário
            const newUser = new User(cpfUser, privado, incomplete, dateLastOrder, ticketLastOrder, averageTicket, storeCurrent, storeLastOrder);
            const userSave = await userController.save(newUser);
            usersCreate.push(userSave);
        } 
        cont++;
    }


    res.json(usersCreate);
});
