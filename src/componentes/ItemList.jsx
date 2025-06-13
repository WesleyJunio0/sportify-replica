import React from 'react';
import SingleItem from './SingleItem';
import { Artists } from '../database (banco de dados)/Artists';

const ItemList = ({title, items, itemsArray}) => {

  return (
    <div className="item__lista">
              <div className="item-list__header item-list__headerr ">
                  <h2>{title} populares</h2>
                  <a href="" className="main__link">Mostrar mais</a>
              </div>

        <div className="item-list__container">  
           {itemsArray.filter((currentValue, index) => index < items).map((currObj, index) => (<SingleItem key={`${title}-${index}`} 
           {...currObj}
           />))}


        </div>
              
    </div>
              

 )
  
}

export default ItemList
//rafce