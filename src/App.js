import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './GR ingressos/Home/Home';
import Cidades from './GR ingressos/LandingPage/Cidades';
import Ajuda from './GR ingressos/LandingPage/Ajuda';
import Contato from './GR ingressos/LandingPage/Contato';
import Eventos from './GR ingressos/LandingPage/Eventos';
import Error from './GR ingressos/LandingPage/Error';
import Footer from './GR ingressos/Footer/Footer';


function App () {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Cidades"  component={Cidades}/>
          <Route path="/Ajuda" component={Ajuda}/>
          <Route path="/Contato"  component={Contato}/>
          <Route path="/Eventos" component={Eventos}/>
          <Route path="/Error"  component={Error}/>
        </Switch>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;