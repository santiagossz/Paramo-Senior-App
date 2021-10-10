import React,{useState,createContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle,Container} from './App.styles'
import Navbar from './componets/layout/Navbar';
import User from './pages/User';
import Senior from './pages/senior/Senior';
import Perfil from './pages/senior/Perfil'
import Curso from './pages/senior/Curso';
import AnadirCurso from './pages/senior/AnadirCurso';
import AñadirInfo from './pages/senior/AñadirInfo';


export const perfilSenior = createContext<any>({'NA':'','BD':'','C':''});
export const videoClases = createContext<any>([]);


const App=()=>{
  const [perfil,setPerfil]=useState({'NA':'','BD':'','C':''})
  const [video,setVideo]=useState([])
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
        <Route path='/Curso' exact component={Curso}/>
        <Route path='/Añadir-Curso' exact component={AnadirCurso}/>
        <Route path='/Añadir-Info' exact component={AñadirInfo}/>
        </perfilSenior.Provider>
      </Switch>
    </Router>
    </Container>

    </>
  );
}

export default App;
