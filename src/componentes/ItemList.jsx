import React from 'react';
import SingleItem from './SingleItem';
import { Artists } from '../database (banco de dados)/Artists';
import { Link } from 'react-router-dom';

const ItemList = ({title, items, itemsArray, path, idpath}) => {

  return (
    <div className="item__lista">
              <div className="item-list__header item-list__headerr ">
                  <h2>{title} populares</h2>
                  <Link to={path} className="main__link">Mostrar mais</Link>
              </div>

        <div className="item-list__container">  
           {itemsArray.filter((currentValue, index) => index < items).map((currObj, index) => (<SingleItem idpath={idpath} {...currObj} key={`${title}-${index}`} 
           {...currObj}
           />))}


        </div>
              
    </div>
              

 )
  
}

export default ItemList
//rafce