
import express from "express";
import {Artists} from "../../src/database_banco_de_dados/Artists.js";
import {songs} from "../../src/database_banco_de_dados/songs.js";
import {db} from "./connect.js"

const app = express();
const PORT = 3000;

app.get("/", (request, response) => (
    response.send("olá,mundo Não preciso mais ficar reiniciando toda hora o servidor")
));


app.get("/artists", async(request, response) => (
    response.send( await db.collection('artists').find({}).toArray())
));

app.get("/songs", async(request, response) => (
    response.send( await db.collection('songs').find({}).toArray())
));

app.listen(PORT, () => (
    console.log(`servidor esta escutando na porta ${PORT}`)));