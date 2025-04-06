import express from "express";
import { UploadController, DownloadController } from "../controller/uploadController.js";
import storage from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", storage.single("file"), UploadController);
router.get("/file/:id", DownloadController);

export default router;
