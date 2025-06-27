import React from 'react'
import Player from '../componentes/Player'
import { Link , useParams} from 'react-router-dom';
import { Artists } from "../database_banco_de_dados/Artists"
import { songs } from '../database_banco_de_dados/songs'; 

const Song = () => {
  const { id } = useParams();

 

const {image, name, duration, artist, audio, index} = songs.filter(
    (currentsongtObj) => currentsongtObj._id === id
  )[0];

  const artistObj = Artists.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsObj = songs.filter(
      (currentsongObj) => currentsongObj.artist === artist
    );

   const randomIndex = Math.floor(Math.random() * (songsObj.length - 1));

   const randomIndex2 = Math.floor(Math.random() * (songsObj.length - 1));


  const randomIdfromArtist =  songsObj[randomIndex]._id;

  const randomId2fromArtist =  songsObj[randomIndex2]._id;


  

  return (
    <div className='song'>
      <div className="song__container">
        <div className='song__image-container'><img src={image} alt={`imagem da musica ${name}`} /></div>
      </div>
      <div className="song__bar">

        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>

          <img width={75}
          height={75} src={artistObj.image} alt={ `imagem do artista ${artist}`} />

        </Link>

        <Player duration={duration}  randomIdfromArtist= {randomIdfromArtist} randomId2fromArtist={randomId2fromArtist}/>

        <div>

          <p  className='song__name'>{name}</p>

          <p>{artist}</p>
        
        </div>
      </div>


    </div>
  )
}

export default Song