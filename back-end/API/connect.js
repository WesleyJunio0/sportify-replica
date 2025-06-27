import {MongoClient} from "mongodb"

const url = "mongodb+srv://wm6955041:27281722Wy@bancodedadosnod.ezvrlrb.mongodb.net/?retryWrites=true&w=majority&appName=bancoDeDadosNod";

const Client = new MongoClient(url);

export const db = Client.db("sportifyR");
console.log(db);

