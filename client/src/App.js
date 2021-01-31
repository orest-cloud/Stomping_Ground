//Modules import
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components import
import Home from './Pages/Home/Home.jsx';
import Results from './Pages/Results/Results.jsx';
import Details from './Pages/Details/Details.jsx';

//SCSS
import './Styles/global.scss';

export default function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter >
    
  )

}
