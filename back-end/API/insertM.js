import {Artists} from "../../src/database_banco_de_dados/Artists.js";
import {songs} from "../../src/database_banco_de_dados/songs.js";
import { db } from "./connect.js";

const newArtist = Artists.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;
    return newArtistObj;
});

const newsong = songs.map((currentsongObj) => {
    const newsongObj = { ...currentsongObj };
    delete newsongObj.id;
    return newsongObj;
});


const   responseSong = await db.collection("songs").insertMany(newsong)

const responseArtist = await db.collection("Artists").insertMany(newArtist);

 console.log(responseArtist);

 console.log(responseSong);
