import React from 'react'
import styled from 'styled-components'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


type Props ={
    text:string
    icon?:string
    onClick?:(e:any)=>void;
}

const Button=({icon,text,onClick}:Props)=>{


    return (
        <ButtonStyle onClick={onClick} >
        {text}
        {icon ? <FontAwesomeIcon icon={icon as IconProp} className='icon'/>  : ''}
        </ButtonStyle>
    )
}

export default Button


const ButtonStyle = styled.button`

    padding:0.75rem 4rem; 
    font-size: 1.25rem;
    margin-bottom: 2rem;
    width: 20rem;
    
    cursor: pointer;
    border: none;
    border-radius: 0.75rem;
    background-color:#c0d6e1;
    position: relative;
    color: #663e2c;
    font-weight: 500;
    text-align: left;
    &:hover{
        background-color:#ccff90
    }
    

    .icon{
        color: white;
        position: absolute;
        left:1.5rem;
        font-size: 1.25rem;
        top:1rem;

    
    }

`