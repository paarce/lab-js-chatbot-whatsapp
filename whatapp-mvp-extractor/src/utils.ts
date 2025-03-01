import * as fs from 'fs';

export function writeToFile(filename: string, data: any) {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
        console.log(`Datos guardados en ${filename}`);
    } catch (error) {
        console.error(`Error al escribir en el archivo ${filename}:`, error);
    }
}
