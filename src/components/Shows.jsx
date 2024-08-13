import React, { useState } from 'react'
import { espectaculos } from '../utils/espectaculos'
import Espectaculo from './Espectaculo'
import Form from './Form'

const Shows = () => {

    const [selected, setSelected] = useState(null)
    console.log(selected)

  return (
    <>
    {selected? <Form selected={selected} setSelected={setSelected}/> : <>{
        espectaculos.map(espectaculo => {
            return <Espectaculo key={espectaculo.id} espectaculo={espectaculo} setSelected={setSelected}/>
            
        })
    }</>}
    </>
    
  )
}

export default Shows