import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SongList from '../componentes/SongList';

const Artist = () => {
  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(https://dicionariompb.com.br/wp-content/uploads/2021/04/Jorge-Mateus.jpg)"
        }}
      >
        <h2 className='artist__title'>Avine Vinny</h2>


      </div>

      <div className="artist__body">
        <h2>Populares</h2>
      <SongList />
      </div>
      <Link to="/song/1">
        <FontAwesomeIcon className="single-item--artist  single-item__icon " icon={faCirclePlay} />
      </Link>
    </div>
  );
}

export default Artist