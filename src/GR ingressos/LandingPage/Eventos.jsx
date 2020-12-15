import React from 'react'; 
import Header from '../Header/Header';
import '../Styles/Eventos.css';

function Eventos(){
    return(
     <div>
         <Header/>
        <div className="evento">
             <h1><strong>Nenhum evento programado ainda.</strong></h1>
        </div>
    </div>           
    );
}        
export default Eventos;  