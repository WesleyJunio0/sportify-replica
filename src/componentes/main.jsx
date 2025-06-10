import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';


const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas populares" items={7} />

      <ItemList title="Músicas populares" items={10} />
      {/*colocar o valores entre "" significar texto se queremos passar um valor para props utilizamos {...} */}

       {/* <div className="item__lista">
          <div className="item-list__header item-list__headerr ">
              <h2>Musicas populares</h2>
              <a href="" className="main__link">Mostrar mais</a>
          </div>

          <div className='item-list__container'>
            <div className="single-item">
                <div className='single-item__div-image-button'>
                  <div className="single-item__div-image">
            
                    <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                  </div>
            
                    <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
            
                  </div>
                <div className='single-item__text'>
                  <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                  <p className='single-item__type'>Artista</p>
                </div>
            
            </div>
            <div className="single-item">
                <div className='single-item__div-image-button'>
                  <div className="single-item__div-image">
            
                    <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                  </div>
            
                    <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
            
                  </div>
                <div className='single-item__text'>
                  <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                  <p className='single-item__type'>Artista</p>
                </div>
            
            </div>
            <div className="single-item">
                <div className='single-item__div-image-button'>
                  <div className="single-item__div-image">
            
                    <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                  </div>
            
                    <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
            
                  </div>
                <div className='single-item__text'>
                 <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                  <p className='single-item__type'>Artista</p>
                </div>
            
            </div>
            <div className="single-item">
                <div className='single-item__div-image-button'>
                  <div className="single-item__div-image">
            
                    <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                  </div>
            
                    <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
            
                  </div>
                <div className='single-item__text'>
                  <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                  <p className='single-item__type'>Artista</p>
                </div>
            
            </div>
            <div className="single-item">
                <div className='single-item__div-image-button'>
                  <div className="single-item__div-image">
            
                    <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                  </div>
            
                    <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
            
                  </div>
                <div className='single-item__text'>
                  <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                  <p className='single-item__type'>Artista</p>
                </div>
            
            </div>
            <div className="single-item">
              <div className='single-item__div-image-button'>
                <div className="single-item__div-image">
                  

                  <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                </div>
                  
                  <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                
                </div>
              <div className='single-item__text'>
                <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                <p className='single-item__type'>Artista</p>
              </div>
              
          </div>
          <div className="single-item">
              <div className='single-item__div-image-button'>
                <div className="single-item__div-image">
                  

                  <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                </div>
                  
                  <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                
                </div>
              <div className='single-item__text'>
               <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                <p className='single-item__type'>Artista</p>
              </div>
              
          </div>
          <div className="single-item">
              <div className='single-item__div-image-button'>
                <div className="single-item__div-image">
                  

                  <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                </div>
                  
                  <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                
                </div>
              <div className='single-item__text'>
                <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                <p className='single-item__type'>Artista</p>
              </div>
              
          </div>
          <div className="single-item">
              <div className='single-item__div-image-button'>
                <div className="single-item__div-image">
                  

                  <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                </div>
                  
                  <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                
                </div>
              <div className='single-item__text'>
               <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                <p className='single-item__type'>Artista</p>
              </div>
              
          </div>
          <div className="single-item">
              <div className='single-item__div-image-button'>
                <div className="single-item__div-image">
                  

                  <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                </div>
                  
                  <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                
                </div>
              <div className='single-item__text'>
                <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                <p className='single-item__type'>Artista</p>
              </div>
              
          </div>
          <div className="single-item">
              <div className='single-item__div-image-button'>
                <div className="single-item__div-image">
                  

                  <img className='single-item__image'  src="https://i.scdn.co/image/ab676161000051740673281edec44d5b28ca0f33" alt="imagem do cantor Avine Vinny" />
                </div>
                  
                  <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                
                </div>
              <div className='single-item__text'>
               <div className='single-item__2line'>
                    <p className='single-item__text-title'>Me Apaixonei Pela Pessoa Errada</p>
                  </div>
                <p className='single-item__type'>Artista</p>
              </div>
              
          </div>
          </div>
        </div>*/}

    </div>
  )
}

export default Main;