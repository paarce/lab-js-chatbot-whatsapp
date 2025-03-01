import makeWASocket, { useMultiFileAuthState, WASocket } from '@whiskeysockets/baileys';

export async function connectToWhatsApp(): Promise<WASocket> {
    const { state, saveCreds } = await useMultiFileAuthState('./baileys_auth_info');
    const sock = makeWASocket({ auth: state, printQRInTerminal: true });

    sock.ev.on('creds.update', saveCreds);

    await new Promise<void>((resolve) => {
        sock.ev.on('connection.update', (update) => {
            const { connection } = update;
            if (connection === 'open') {
                console.log('Conexión establecida con WhatsApp.');
                resolve();
            } else if (connection === 'close') {
                console.error('La conexión se cerró.');
            }
        });
    });

    return sock;
}