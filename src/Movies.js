import React from 'react';
import './App.css';
import data from './data/data.json';

function Movies() {

  function onWatchnow(url) {
    window.open(url)
  }
  
  return (
    <div className="mainDivCSS">
  {data.filter(data => data.type === 'movie').map( data => 
    <div className="cardCss">
      <img src={data.img} className="imgCSS"></img>
      {/* <img src='img1.png' className="imgCSS" /> */}
      
      <div >

      </div>
    <label style={{marginTop: '5px'}}>{data.name}</label>
    <button className="btnCSS" onClick={() => onWatchnow(data.url)}>Watch Now</button>
    </div>)}
    </div>
  )
}


export default Movies;