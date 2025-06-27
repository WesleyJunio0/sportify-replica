
import express from "express";
import cors from "cors";
import {db} from "./connect.js";


const app = express();
const PORT = 3000;

app.use(cors());


app.get("/", (request, response) => (
    response.send("olá,mundo Não preciso mais ficar reiniciando toda hora o servidor")
));


app.get("/Artists", async(request, response) => (
    response.send( await db.collection('Artists').find({}).toArray())
));

app.get("/songs", async(request, response) => (
    response.send( await db.collection('songs').find({}).toArray())
));

app.listen(PORT, () => (
    console.log(`servidor esta escutando na porta ${PORT}`)));