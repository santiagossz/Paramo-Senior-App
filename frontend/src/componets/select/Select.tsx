import React from 'react'
import { CentralBox } from './Select.styles'
import Button from '../layout/Button'
import { useHistory } from "react-router-dom";


type Props ={
title:string;
buttons:string[][];
}

const Select=({title,buttons}:Props)=> {

    const history=useHistory()

    const buttonStructure =buttons.map(i=>
        <Button text={i[0]} icon={i[1]} onClick={()=>{history.push(`/${i[2]}`)}}/>)
    return (
        <>
            <CentralBox>
                <h3>{title}</h3>
                {buttonStructure}
            </CentralBox>
            
        </>
    )
}

export default Select
