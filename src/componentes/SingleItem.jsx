import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const SingleItem = () => {
  return (

    <div className="single-item">
                         <div className='single-item__div-image-button'>
                           <div className="single-item__div-image">
                     
                             <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                           </div>
                     
                             <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                     
                           </div>
                         <div className='single-item__text'>
                           <p className='single-item__text-title'>Avine Vinny</p>
                           <p className='single-item__type'>Artista</p>
                         </div>
                     
                     </div>
     
                 
  )
}

export default SingleItem