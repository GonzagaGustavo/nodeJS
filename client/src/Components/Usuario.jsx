import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Usuario({usuario}) {

// função para deletar
  function deleteUsuario(id) {
    axios.post("/usuario/deleteusuario", { id: id }).then(res => {
      console.log(res.data)
      alert(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
        <ul>
          <li>{usuario.id}</li>
          <li>{usuario.name}</li>
          <li>{usuario.email}</li>
          <li>{usuario.senha}</li>
        </ul>
        <Link to={`/EditarUsuario/${usuario.id}`}><button>Editar</button></Link>
        <button onClick={() => {deleteUsuario(usuario.id)}}>Deletar</button>
        <hr />
    </div>
  )
}

export default Usuario