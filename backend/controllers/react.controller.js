import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const reactAdminPage = async (req,res)=>{
    try {
        // res.sendFile(path.resolve(__dirname,'..',"client","build","index.html"))
        res.sendFile(path.resolve(__dirname,'..',"../admin","build","index.html"))
    } catch (error) {
        console.error(error)
    }
}
// console.log(path.resolve(__dirname,'..',"../admin","build","index.html"))