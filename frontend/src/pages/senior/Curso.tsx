import React from 'react'
import Select from '../../componets/select/Select'


const Curso=()=>{

     const buttons=[['Editar Cursos','edit','Editar-Cursos'],['Añadir Curso','folder-plus','Añadir-Curso']]

    
    return (
        <>
        <Select title='Mis Cursos' buttons={buttons}  />
            
        </>
    )
}

export default Curso
