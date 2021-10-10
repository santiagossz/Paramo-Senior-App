import React,{useState,useContext} from 'react'
import {TextField } from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab'
import styled from 'styled-components';
import axios from'axios' 
import Button from '../../componets/layout/Button'
import {perfilSenior} from '../../App'

const Perfil=()=>{

  
    const {perfil,setPerfil}=useContext(perfilSenior)
 

    const reqs = async()=>{
  
    const req=axios.post(`http://localhost:5001/perfil`,{'perfil':perfil},
    {headers: {"Content-Type": "application/json"}})
        
    setPerfil( (await req).data)

}

    const options =['Agricultura','Comercio','Trabajos Manuales','Arte','Administración Pública']
    
    return (
        <>
       <Container>
           <h3>Actualizar Perfil</h3>
    
        <TextField  label="Nombre y Apellido" value={perfil.NA} className='input' onChange={(e)=>setPerfil({ ...perfil, NA: e.target.value })}/>
        <TextField  label="Breve Descripción" value={perfil.BD} className='input' onChange={(e)=>setPerfil({ ...perfil, BD: e.target.value })}/>

        <Autocomplete
        value={perfil.C}
        options={options}
              onInputChange={(e,val) => {
            val?setPerfil({ ...perfil, C: val }):setPerfil({ ...perfil, C: '' });
        }}
        // id="controllable-states-demo"
  
        renderInput={(params:any) => <TextField {...params} label="Categorías" size='small'/>}
        
        className='selectClass'/>
        <div className='b'><Button text='Actualizar Perfil' icon='user' onClick={()=>reqs()}/></div>

        

            </Container>
       
        </>
    )
}

export default Perfil

const Container =styled.div`
    margin-top: 1rem;
    padding: 4rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 45%;
    height: 50%;
    display: flex;
    flex-direction:column;
    align-items: center;

    h3{
        color:#575757;
        font-size: 1.5rem;
        /* margin-bottom: 3rem; */
    }

    .selectClass{
        width: 20rem;
        margin-top: 2rem;
    }

    .input{
        margin-top: 1rem;
        width: 20rem;
    }

    .b button{
        margin-top: 2rem;
        width: 17rem;
        font-size: 1rem;
        .icon{
            font-size: 1rem;
        }
    }

`