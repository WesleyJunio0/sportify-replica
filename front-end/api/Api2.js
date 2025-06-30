import axios from "axios";

const url = "http://localhost:3000";

const reponseArtist = await axios.get(`${url}/Artists`)
const reponsesong = await axios.get(`${url}/songs`)

export const Artists = reponseArtist.data;
export const songs = reponsesong.data;
//console.log(reponseArtist.data)

