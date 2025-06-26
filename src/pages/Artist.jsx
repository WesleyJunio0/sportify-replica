import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link , useParams} from 'react-router-dom';
import SongList from '../componentes/SongList';

import { Artists } from "../database (banco de dados)/Artists"
import { songs } from '../database (banco de dados)/songs'; 



const Artist = () => {

  const { id } = useParams();


  const artistaObj = Artists.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0];

  const songsObj = songs.filter(
    (currentsongObj) => currentsongObj.artist === artistaObj.name
  );

  const randomIndex = Math.floor(Math.random() * (songsObj.length - 1));

  const randomIdfromArtist =  songsObj[randomIndex].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${artistaObj.banner})`
        }}
      >
        <h2 className='artist__title'>{artistaObj.name}</h2>


      </div>

      <div className="artist__body">
        <h2>Populares</h2>


      <SongList songs={songsObj}/>

      </div>
      <Link to={`/song/${randomIdfromArtist}`}>
        <FontAwesomeIcon className="single-item--artist  single-item__icon " icon={faCirclePlay} />
      </Link>
    </div>
  );
}

export default Artist