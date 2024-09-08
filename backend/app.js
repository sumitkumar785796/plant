import express from "express";
import cors from "cors";
import route from "./route/routes.js";
import authroutes from "./route/Auth.routes.js"
import adminroutes from "./route/Admin.auth.routes.js"
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
// console.log(path.resolve(__dirname,'..',"user","build","index.html"))

// Serve Static Files from 'uploads' Directory
app.use(express.static('public'));
// Serve static files to react
app.use(express.static(path.resolve(__dirname, "../user", "build")))
app.use(express.static(path.resolve(__dirname, "../admin", "build")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);
app.use("/api/user", authroutes)
app.use("/api/admin", adminroutes)

app.get('/admin', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', "admin", "build", "index.html"))
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', "user", "build", "index.html"))
    // res.status(401).send("Page is not found...")
});

export default app;