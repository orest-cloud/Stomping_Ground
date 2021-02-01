//Modules import
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages import
import Home from './Pages/Home/Home.jsx';
import Results from './Pages/Results/Results.jsx';
import Details from './Pages/Details/Details.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import CreateAccount from './Pages/CreateAccount/CreateAccount.jsx';

//SCSS
import './Styles/global.scss';

export default function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results/:id" exact component={Results} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/signin" component={SignIn} />
        <Route path="/createaccount" component={CreateAccount} />
      </Switch>
    </BrowserRouter >
    
  )

}
