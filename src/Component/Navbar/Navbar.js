import React from 'react';
import './Navbar.css';
const Navbar = (onRouteChange) => {
    return (
        <nav>
            <div className = 'mylogo'>
               <p  onClick = { () => onRouteChange ('App') } className = 'one f3 fl dim  white  pa3 pointer' ><span>▷ </span><b>FindMy!</b>Robos</p>
            </div>
            <div  style = {{display : 'flex',justifyContent : 'flex-end'}}>
            <p onClick = { () => onRouteChange ('About') } className = 'f3 link dim white  pa3 pointer' >About </p>
            </div>
        </nav>
        
 );
}

export default Navbar;