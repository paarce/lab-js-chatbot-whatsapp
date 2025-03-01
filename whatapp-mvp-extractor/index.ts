import { connectToWhatsApp } from './src/whatsapp';
import { getGroupList } from './src/groupService';
import { writeToFile } from './src/utils';

const GROUPS_FILE = 'groups.json';

(async () => {
    try {
        console.log('Iniciando conexión a WhatsApp...');
        const sock = await connectToWhatsApp();
        
        console.log('Obteniendo lista de grupos...');
        const groups = await getGroupList(sock);
        
        console.log(`Se encontraron ${groups.length} grupos.`);
        writeToFile(GROUPS_FILE, groups);
    } catch (error) {
        console.error('Error en la ejecución del script:', error);
    }
})();
