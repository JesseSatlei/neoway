import { app } from './app';

const port = 3000;

const server = app.listen(port, () => {
    console.log(`App listen in port ${port}`);
});

// Encerrar o processo o App é fechado para não ficar com uma conexão sem uso
process.on('SIGINT', () => {
    server.close();
    console.log('App closed');
})