import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = () => {
  return (
    <Link to="/song/1" class="song-item">
    <p>1</p>

    <img src="https://janiel.com.br/wp-content/uploads/2025/05/avine-vinny-lanca-segunda-edicao-do-projeto-avine-love-1024x683.jpg" alt="0" />

    <p>projeto-avine-love</p>
    <p>2:30</p>
    
    </Link>
    

  )
}

export default SongItem