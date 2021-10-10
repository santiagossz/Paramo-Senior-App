import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ReactPlayer from "react-player";

import TextInfo from './TextInfo';



const AñadirInfo=()=>{

    const location= useLocation<any>()


    const [video,setVideo]=useState<any>({'T':[],'B':[],'V':[]})
    const handleChange=(e:any,i:any,j:any)=>{
        console.log(i)
        // setVideo((state:any)=>({ ...state, [i]:{...state[i],[j]:e.target.value }}))
    }


    const videos=Object.keys(location.state).map((i:any,j:any)=>
    <div className='video'>
    <TextInfo onChange={handleChange} label="Titulo" value={video['T'][j]} val={['T',j]}/>
    <TextInfo onChange={handleChange} label="Breve Descripción" value={video['B'][j]} val={['B',j]}/>
    
    <ReactPlayer url={URL.createObjectURL(location.state[i])} width='100%' height='100%' controls={true}/></div>)

useEffect(()=>{
    console.log(video)
},[video])


    console.log(location.state[0])
    return (
        <>
        <Info>
        {videos}

        </Info>
  
                    
        </>
    )
}

export default AñadirInfo

const Info = styled.div`
    padding:5rem;
    display: inline-flex;
    background-color: white;
    .video{
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
    }
    .input{
        margin-bottom: 1rem;
        width: 100%;
    }

`