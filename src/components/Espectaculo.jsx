import React, { useState } from 'react'
const Espectaculo = ({espectaculo, setSelected}) => {
 
  return (
    <div>
        <img src={espectaculo.img} alt={espectaculo.artista} width={500} height={300}/>
        <h2>{espectaculo.artista}</h2>
        <h3>{espectaculo.precio}</h3>
        <h4>{espectaculo.fecha}</h4>
        <button onClick={() => setSelected(espectaculo)}>Comprar entrada</button>
    </div>
  )
}

export default Espectaculo