import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';
import { songs } from '../database (banco de dados)/songs';
import { Artists } from '../database (banco de dados)/Artists';


const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas populares" items={7} itemsArray={Artists} path='/artist' idpath='artist'/>

      <ItemList title="Músicas populares" items={10} itemsArray={songs} path='/songs' idpath='song'/>
      {/*colocar o valores entre "" significar texto se queremos passar um valor para props utilizamos {...} */}

    </div>
  )
}

export default Main;