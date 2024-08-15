import React, { useState } from 'react'
import Peliculas from './Peliculas'
import { peliculas } from '../utils/peliculas'
import FormParcial from './FormParcial'
import styles from '../styles/styles.module.css'

const ComprarEntrada = () => {
 
  const [selectMovie, setSelectMovie] = useState(null)

  return (
    <>
        <FormParcial selectMovie={selectMovie} setSelectMovie={setSelectMovie}/>
        <div className={styles.moviesContainer}>
            {selectMovie? null: <>{
                peliculas.map(pelicula => {
                    return <Peliculas key={pelicula.id} pelicula={pelicula} setSelectMovie={setSelectMovie}/>
                })
            }</>}
        </div>
    </>
  )
}

export default ComprarEntrada