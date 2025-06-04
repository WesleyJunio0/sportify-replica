import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
  return (
    <div className="main">
        <div className="item__lista"></div>
        <div className="main__texto">
            <h2>Artista populares</h2>
            <a href="" className="main__link">Mostrar mais</a>
        </div>
        <div className='artista'>
            <img src="" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>artista</p>
            <FontAwesomeIcon icon={faCirclePlay} />
        </div>

    </div>
  )
}

export default Main;