import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white'
    }

    function onSearch(oEvt) {

    }
  return (
      <div>
   <nav>
       {/* <h3>Logo</h3> */}
       <ul className="nav-links">
       <Link style={navStyle} to="/ReactRouting">
           <li>Home</li>
           </Link>
           <Link style={navStyle} to="/movies">
           <li>Movies</li>
           </Link>
           <Link style={navStyle} to="/series">
           <li>Series</li>
           </Link>
       </ul>
       <input onChange={() => onSearch()}></input>
   </nav>
  
   </div>
  );
}

export default Nav;