import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = () => {
  return (
    <Link to="/song/1" className="song-item">

    <div className='song-item__number-album'>
      <p>1</p>
      <div className='song-item__album'>
        <img src="https://janiel.com.br/wp-content/uploads/2025/05/avine-vinny-lanca-segunda-edicao-do-projeto-avine-love-1024x683.jpg" alt="0"  className='song-item__image'/>
      <p className='song-item__name'>projeto-avine-love</p>
      </div>
    </div>
    <p>2:30</p>
    
    </Link>
    

  )
}

export default SongItem