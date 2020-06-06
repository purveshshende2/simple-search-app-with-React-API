import React from 'react';
import './Searchbox.css';
const Searchbox = ({ searchfield, searchChange }) =>{
    return(
        <div className = 'pa2'>
            <input
                className = 'mt4 br4 pa3 ba b--white bg-white center w-30 shadow-5'
                type = 'search'
                placeholder = ' 🔎 Eg: Avengers Endgame'
                onChange={searchChange}
            />  
        </div>
    );
}
export default Searchbox;