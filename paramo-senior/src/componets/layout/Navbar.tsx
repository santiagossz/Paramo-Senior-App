import React from 'react'
import { Nav } from './Navbar.sytles'

const Navbar=()=>{

    const img=require('../../assets/imgs/tagtag.png').default
    return (
        <Nav>
            <h3>Parämo Senior</h3>     
            <img src={img} alt="" /> 

        </Nav>
    )
}

export default Navbar
