import React from 'react';
import {
  BrowserRouter,
   Switch,
  Route
} from "react-router-dom";
import Navbar from'./components/Navbar';
import Sexualhealth from './components/Sexualhealth';
import Parentalpressure from './components/Parentalpressure';
import Peerpressure from './components/Peerpressure';



function App() {
  return (
    <BrowserRouter>
    
    
    <div className="App">
    
    <Navbar/>
    
    <Switch>
    <Route exact path='/'component={Sexualhealth}/>
    <Route path='/Peerpressure'component={Peerpressure}/>
    <Route path='/Parentalpressure'component={Parentalpressure}/>
    </Switch>
    
   
    
   
    </div>
    </BrowserRouter>
    
    
    
  );
}

export default App;

