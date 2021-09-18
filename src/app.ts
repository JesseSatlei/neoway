import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerBD } from './config/db';
import { routerUser } from './routes/user';

// Cria a aplicação

export const app = express();

// Libera os acessos
app.use(cors());

// Permite enviar e receber JSON
app.use(express.json());

// Configura os logs
app.use(logger('dev'));

// Conecta no banco
connectServerBD();

// Configura rotas
app.use('/user', routerUser);
app.use('/', (req, res) => res.send('Api running'));