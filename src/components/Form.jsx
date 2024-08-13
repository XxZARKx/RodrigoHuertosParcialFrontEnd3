import React, { useState } from 'react'
import Message from './Message'

const Form = ({selected, setSelected}) => {

  const [custommer, setCustommer] = useState({
    name: '',
    email: ''
  })

  const [flag, setFlag] = useState(false)
  const [error, setError] = useState(false)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const handleChangeName = (e) => {
    setCustommer({...custommer, name: e.target.value})
  }

  const handleChangeEmail = (e) => {
    setCustommer({...custommer, email: e.target.value})
  }

  const preventDefaultForm = (e) => {
    e.preventDefault()
    if(emailRegex.test(custommer.email)){
        setError(false)
        setFlag(true)
    }else {
        setError(true)
        setFlag(false)
    }
  }

  return (
    <div>
        <form onSubmit={preventDefaultForm}>
            <label>Nombre:</label>
            <input type='text' value={custommer.name} onChange={handleChangeName} />
            <label>Email:</label>
            <input type='email' value={custommer.email} onChange={handleChangeEmail}/>
            <button>Comprar entrada de: {selected.artista}</button>
        </form>
        {flag? <Message name={custommer.name} email={custommer.email}/>: null}
        {error? <h4 style={{color: 'red'}}>Los datos de email son invalidos, intentelo nuevamente</h4> : null}
        <button onClick={() => setSelected(null)}>Cancelar</button>
    </div>
  )
}

export default Form