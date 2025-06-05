import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
  return (
    <div className="main">
        <div className="item__lista">
          <div className="item-list__header">
              <h2>Artista populares</h2>
              <a href="" className="main__link">Mostrar mais</a>
          </div>
          <div className="single-item">

              <div className="single-item__div-image">
                <div className='single-item__div-image-button'>
                <img className='single-item__div-image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                </div>
                </div>
              <p>Avine Vinny</p>
              <p>Artista</p>
              
          </div>
        </div>

    </div>
  )
}

export default Main;