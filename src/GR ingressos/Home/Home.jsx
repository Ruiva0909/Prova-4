import React from 'react'
import ImgHome from './ImgHome';
import Header from '../Header/Header';

function Home(){
    return(
        <div className="main">
          <Header/>
          <ImgHome/>
       
        <div className="buscar">
          <input type="search" className="input-large" id="searchInput"
          placeholder="buscar evento..." value> </input>
        </div>
        </div>     
    );
}

export default Home;