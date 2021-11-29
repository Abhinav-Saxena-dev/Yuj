import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Header from "./Components/Header/header.component.jsx";

import LandingPage from './Pages/LandingPage/LandingPage.component';

import SignUpPage from './Pages/Sign-Up/sign-up-page.component.jsx';

import './App.css';

class App extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        <Switch>
        <Route exact path = "/" component = {LandingPage}/>
        <Route path="/signup" component = {SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
