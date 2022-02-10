import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Usuario from './Usuario';
import './ListadeUsuarios.css'

function ListadeUsuarios() {
const [dataUsuarios, setDataUsuarios] = useState([])

useEffect(() => {
  axios.get('/usuario/obterUsuarios').then(res => {
    setDataUsuarios(res.data)
  }).catch(err => {
    console.log(err)
  })
}, [])

const listausuarios = dataUsuarios.map(usuario => {
  return(
    <div>
      <Usuario usuario={usuario}/>
    </div>
  )
})

  return (
    <div>
        <h1>Lista de usuarios</h1>
        {listausuarios}
    </div>
  )
}
export default ListadeUsuarios;