import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure folder exists
const folderPath = "fileFolder";
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

export default multer({ storage: storage });
