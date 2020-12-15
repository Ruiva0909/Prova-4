import React from 'react';
import './ImgHome.css'
import ingressos from '../../img/gr-ingressos.jpeg'


function ImgHome () {
    return(
            <div className="ingressos">
                <img src= {ingressos} alt="logo"></img>
            </div>
    );
}

export default ImgHome;