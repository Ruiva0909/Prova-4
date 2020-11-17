import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './LandingPage/Home/Home';
import Footer from './LandingPage/Footer';


function App () {
  return(
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          
        </Switch>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;