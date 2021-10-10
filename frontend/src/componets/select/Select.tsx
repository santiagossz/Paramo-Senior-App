import React from 'react'
import { CentralBox } from './Select.styles'
import Button from '../layout/Button'
import { useHistory } from "react-router-dom";


type Props ={
title:string;
buttons?:string[][];
input?:string[]
}

const Select=({title,buttons,input}:Props)=> {

    const history=useHistory()

    const cargarImagenes=(e:any)=>{
        const files=e.target.files
        history.push('/Añadir-Info',files)
    }

    const buttonStructure =buttons? buttons.map(i=>
        <Button text={i[0]} icon={i[1]} onClick={()=>{history.push(`/${i[2]}`)}}/>):null

    const inputStructure = input?<>
            <input type="file"  accept="video/*" id="file" multiple name="file" onChange={cargarImagenes}/>
            <label className="cargar-imagen-label" htmlFor="file" >
            Seleccionar todos los vídeos</label>
            </>
            :null
    return (
        <>
            <CentralBox>
                <h3>{title}</h3>
                {buttonStructure}
                {inputStructure}
            </CentralBox>
            
        </>
    )
}

export default Select
