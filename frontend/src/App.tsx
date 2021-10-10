import React,{useState,createContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle,Container} from './App.styles'
import Navbar from './componets/layout/Navbar';
import User from './pages/User';
import Senior from './pages/senior/Senior';
import Perfil from './pages/senior/Perfil'


export const perfilSenior = createContext<any>({'NA':'','BD':'','C':''});


const App=()=>{
  const [perfil,setPerfil]=useState({'NA':'','BD':'','C':''})
  return (
    
    <>
    <GlobalStyle/>
    <Container>

    <Router>
      
    <Navbar/>

      <Switch>
        <perfilSenior.Provider value={{perfil,setPerfil}}>
        <Route path='/' exact component={User}/>
        <Route path='/Senior' exact component={Senior}/>
        <Route path='/Perfil' exact component={Perfil}/>
        </perfilSenior.Provider>
      </Switch>
    </Router>
    </Container>

    </>
  );
}

export default App;
