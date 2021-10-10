import React from 'react'
import Select from '../componets/select/Select'


const User=()=>{



    const buttons=[['Soy un Senior','fingerprint','Senior'],['Necesito un Senior','hand-point-up','Usuario']]

    
    return (
        <>
        <Select title='Educación con Experiencia' buttons={buttons}  />
            
        </>
    )
}

export default User
