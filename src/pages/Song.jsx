import React from 'react'
import Player from '../componentes/Player'
import { Link } from 'react-router-dom'


const Song = () => {
  return (
    <div className='song'>
      <div className="song__container">
        <div className='song__image-container'><img src="https://i.scdn.co/image/ab67616d00001e0277606320b7ae8d7f0fc43902" alt="" /></div>
      </div>
      <div className="song__bar">
        <Link to="/artist/1" className='song__artist-image'>
          <img width={75}
          height={75} src="https://i.scdn.co/image/ab6761610000517449727bf298cb5fe23ab10154" alt="imagem do artista x" />
        </Link>
        <Player />
        <div>
          <p  className='song__name'>Baile de Favela</p>
          <p>MC João</p>
        </div>
      </div>


    </div>
  )
}

export default Song