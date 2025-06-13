import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const SingleItem = ({id,name, image, artist}) => {
  return (

    <a href='/' className="single-item">
                         <div className='single-item__div-image-button'>
                           <div className="single-item__div-image">

                             <img className='single-item__image'  src={image} alt={`imagem do cantor ${name}`} />
                           </div>
                     
                             <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                     
                           </div>
                         <div className='single-item__text'>
                          <div className='single-item__2line'>
                           <p className='single-item__text-title'>{name}</p>
                           </div>
                           <p className='single-item__type'>{artist === undefined ? "Artista" : artist}</p>
                         </div>
                   
    </a>
     
                 
  )
}

export default SingleItem

  {/*"https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" Avine Vinny*/}