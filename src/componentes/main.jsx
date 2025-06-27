import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';
import { Artists } from "../database_banco_de_dados/Artists"
import { songs } from '../database_banco_de_dados/songs'; 


const Main = ({type}) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
      <ItemList title="Artistas populares" items={7} itemsArray={Artists} path='/artists' idpath='artist'/>) : (<></>)
       }

      {type === "songs" || type === undefined ? (
      <ItemList title="Músicas populares" items={10} itemsArray={songs} path='/songs' idpath='song'/>) : (<></>)
    }
      {/*colocar o valores entre "" significar texto se queremos passar um valor para props utilizamos {...} */}

    </div>
  )
}

export default Main;