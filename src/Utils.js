import fs from 'fs';
import { promisify } from 'util';
const readFileAsync = promisify(fs.readFile);

export async function returnFile(filename) {
    try {
        const textData = await readFileAsync(filename, 'utf-8');
        return textData;
    } catch (err) {
        throw err;
    }
}