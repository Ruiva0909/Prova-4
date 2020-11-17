import React from 'react';
import '../Home/ImgHome.css';


function ImgHome () {
    return(
            <div className="HomeImg">
                <img src={require("../img/img.jpg")}alt="HomeImg"></img>
            </div>
    );
}

export default ImgHome;