import React from 'react'
import Select from '../../componets/select/Select'

const Senior=()=>{
    const buttons=[['Cursos','graduation-cap','Curso'],['Mentorías','hands-helping','Mentorías']]

    
    return (
        <>
        <Select title='Mis Productos' buttons={buttons}  />
            
        </>
    )
}

export default Senior
