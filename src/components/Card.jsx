import React from 'react'

const Card = ({user, selectMovie}) => {
  return (
    <div>
      <h3>Gracias por tu compra: {user.name} {user.lastName}</h3>
      <h3>Te enviaremos la informacion necesaria a tu correo: {user.email}</h3>
      <h3>Entrada comprada: {selectMovie.nombre}</h3>
    </div>
  )
}

export default Card