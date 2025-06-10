import React from 'react';
import SingleItem from './SingleItem';

const ItemList = ({title}) => {
    console.log(title);
  return (
    <div className="item__lista">
              <div className="item-list__header item-list__headerr ">
                  <h2>{title} populares</h2>
                  <a href="" className="main__link">Mostrar mais</a>
              </div>
        <div className="item-list__container">  
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />


        </div>
              
    </div>
              

 )
  
}

export default ItemList
//rafce