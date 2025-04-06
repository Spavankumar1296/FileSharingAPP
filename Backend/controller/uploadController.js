import fileModel from "../model/filemodel.js";
import path from "path";

export const UploadController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const fileObject = {
            path: req.file.path,
            name: req.file.originalname
        };

        const file = await fileModel.create(fileObject);
        console.log(file);

        return res.status(200).json({ path: `http://localhost:5000/file/${file._id}` });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const DownloadController = async (req, res) => {
    try {
        const file = await fileModel.findById(req.params.id);
        if (!file) {
            return res.status(404).json({ message: "File not Found" });
        }

        return res.download(path.resolve(file.path), file.name);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
