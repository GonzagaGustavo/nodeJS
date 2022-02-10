import React, { useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'

function CriarUsuario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function CriaUsuario() {
    let usuario = {
      name: name,
      email: email,
      senha: senha,
      id: uniqid()
    }
    console.log(usuario)

    axios.post("/usuario/CriarUsuario", usuario).then(res => {
      alert(res.data)
    }).then(err => console.log(err))
  }
  return (
    <div>
      <h1>Crie um Usuário</h1>
      <input type="text" placeholder="Nome:" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input type="email" placeholder="email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input type="text" placeholder="Crie uma Senha"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <button onClick={CriaUsuario}>Criar</button>
    </div>
  );
}

export default CriarUsuario;
