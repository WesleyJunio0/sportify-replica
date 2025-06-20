import React from 'react';
import logosportify from '../assets/Spotify_Primary_Logo_RGB_Green.png';
import { Link } from 'react-router-dom';


const Header = () => {
return (
   <div className="header">
              <Link className='header-link' to="/">
  
               <img src={logosportify}
                   alt="Spotify logo with green text Spotify on a white background, conveying a modern and energetic tone"
                />
              </Link>

              <Link className='header-link' to="/"> 
            <h1>Spotify</h1>
              
              </Link>    
    </div>
)
}

export default Header;