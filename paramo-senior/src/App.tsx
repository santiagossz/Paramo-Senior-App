import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle,Container} from './App.styles'
import Navbar from './componets/layout/Navbar';

const App=()=>{
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
      <Navbar/>
        <Route path='/' exact/>
      </Switch>

    </Router>
    </>
  );
}

export default App;
