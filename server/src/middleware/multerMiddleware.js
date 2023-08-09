import multer from 'multer';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

export const current_PATH = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination:join(current_PATH, '../uploads'),
    filename:(req, file, cb)=>{
        const fileExtension = extname(file.originalname);
        const fileName = file.originalname.split(fileExtension)[0];
        cb(null, `${fileName}-${Date.now()}${fileExtension}`)
    }
})
export const upload = multer({storage})