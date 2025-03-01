import { WASocket } from '@whiskeysockets/baileys';

export async function getGroupList(sock: WASocket) {
    try {
        const groups = await sock.groupFetchAllParticipating();
        return Object.values(groups).map(group => ({
            id: group.id,
            name: group.subject
        }));
    } catch (error) {
        console.error('Error al obtener la lista de grupos:', error);
        return [];
    }
}
