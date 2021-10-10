import React from 'react'
import { Nav } from './Navbar.sytles'
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Navbar=()=>{

    const img=require('../../assets/imgs/tagtag.png').default
    const text=useLocation().pathname=='/'?'':'Perfil'

    const history =useHistory()

    return (
        <Nav>
            <h3 onClick={()=>{history.push('/')}}>Parämo Senior</h3>    
            <div className='img'>
            <img src={img} alt="" /> 
            <div className='navButton' onClick={()=>{history.push(`/${text?text:''}`)}}>{text?text:'Entrar'}</div>

            </div> 

        </Nav>
    )
}

export default Navbar
