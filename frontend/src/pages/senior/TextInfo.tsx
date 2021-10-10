import React from 'react'
import {TextField } from '@material-ui/core';

type Props={
    label:string
    value:any
    onChange:(e:any,i:any,j:any)=>void;
    val:any
}

const TextInfo=({label,value,onChange,val}:Props)=> {
    return (
        <div>
            <TextField  label={label} value={value} className='input' onChange={(e)=>onChange(e,val[0],val[1])}/>
        </div>
    )
}

export default TextInfo
