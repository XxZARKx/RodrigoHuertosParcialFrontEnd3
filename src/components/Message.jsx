import React from 'react'

const Message = ({name, email}) => {
  return (
    <div>
        <h4>Gracias {name}</h4>
        <h4>Enviamos su entrada a: {email}</h4>
    </div>
  )
}

export default Message