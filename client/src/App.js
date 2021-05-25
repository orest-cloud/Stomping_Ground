//Modules import
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Pages import
import Home from './Pages/Home/Home.jsx';
import Details from './Pages/Details/Details.jsx';
import Results from './Pages/Results/Results.jsx';

// Components import
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';

//SCSS
import './Styles/Global.scss';

// Environment variables
require('dotenv').config();

export default function App() {
  return (
    
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results/:id" exact component={Results} />
        <Route path="/details/:id" exact component={Details} />
      </Switch>
    </BrowserRouter >
    
  )

}
