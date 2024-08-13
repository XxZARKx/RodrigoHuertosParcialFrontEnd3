import React, { useState } from 'react'

const FormCopy = ({selected}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const preventDefaultForm = (e) => {
    e.preventDefault()
  }

  return (
    <div>
        <form onSubmit={preventDefaultForm}>
            <label>Nombre:</label>
            <input type='text' value={name} onChange={handleChangeName} />
            <label>Email:</label>
            <input type='email' value={email} onChange={handleChangeEmail}/>
            <button>Comprar entrada de: {selected.artista}</button>
        </form>
    </div>
  )
}

export default Form