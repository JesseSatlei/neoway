import { createConnection } from 'typeorm';

export const connectServerBD = async () => {
    // Abre a conexão
    const connect = await createConnection();
    console.log(`Connect BD create`);

    // Fecha a conexão
    process.on('SIGINT', () => {
        connect.close().then(() => console.log('Connect BD closed'))
    });
}