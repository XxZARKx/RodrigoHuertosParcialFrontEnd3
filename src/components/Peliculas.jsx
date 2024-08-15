import React from 'react'

const Peliculas = ({pelicula, setSelectMovie}) => {
  return (
    <div>
        <img src={pelicula.img} alt={pelicula.nombre} width={300} height={200}/>
        <h3>{pelicula.nombre}</h3>
        <h3>{pelicula.precio}</h3>
        <button onClick={() => setSelectMovie(pelicula)}>Comprar Entrada</button>
    </div>
  )
}

export default Peliculas