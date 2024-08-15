import React, { useState } from 'react'
import Card from './Card'

const FormParcial = ({selectMovie, setSelectMovie}) => {

  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: ''
  })

  const [error, setError] = useState(false)
  const [flag, setFlag] = useState(false)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const handleSubmit = (e) => {
    e.preventDefault()

    if(user.name.trim().length < 3 || user.lastName.trim().length < 6 || !emailRegex.test(user.email)){
        setError(true)
        setFlag(false)
    }else{
        setError(false)
        setFlag(true)
    }
  }

  const handleName = (e) => {
    setUser({...user, name: e.target.value})
  }

  const handleLastName = (e) => {
    setUser({...user, lastName: e.target.value})
  }

  const handleEmail = (e) => {
    setUser({...user, email: e.target.value})
  }

  const cambiarPelicula = (e) => {
    setSelectMovie(null)
  }

  return (
    <>
        {flag ? <Card user={user} selectMovie={selectMovie}/> : 
            <>
                <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombres: </label>
                <input type='text' value={user.name} name='name' id='name' onChange={handleName}/>
                <label htmlFor='lastName'>Apellidos: </label>
                <input type='text' value={user.lastName} name='lastName' id='lastName' onChange={handleLastName}/>
                <label htmlFor='email'>Email: </label>
                <input type='email' value={user.email} name='email' id='email' onChange={handleEmail}/>
                {selectMovie &&
                <>
                    <button type='submit'>Reservar entrada para: {selectMovie? selectMovie.nombre: ''}</button>
                    <br/>
                    <button onClick={cambiarPelicula}>Elegir Otra Pelicula</button>
                </>}
                
                </form>
            </>}
        {error && <h3 style={{color: "red"}}>Por favor chequea que la información sea correcta</h3>}
    </>
  )
}

export default FormParcial