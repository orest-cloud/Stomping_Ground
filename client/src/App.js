//Modules import
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components import
import Home from './Pages/Home/Home.jsx';

//SCSS
import './Styles/global.scss';

export default function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter >
    
  )

}
