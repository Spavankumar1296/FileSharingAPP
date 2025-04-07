import express from "express";
import Connection from "./Database/db.js";
import router from "./Router/api.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/fileFolder", express.static(path.join(path.resolve(), "fileFolder")));

app.use("/", router);

Connection();

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
