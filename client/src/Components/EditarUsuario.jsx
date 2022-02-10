import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditarUsuario() {
  const params = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    axios.post("/usuario/datausuario", { id: params.id }).then((res) => {
      const data = res.data[0];
      setName(data.name);
      setEmail(data.email);
      setSenha(data.senha);
    });
  }, []);

  //Função para atualizar usuario
  function EditaUsuario() {
    const atualizarusuario = {
      name: name,
      email: email,
      senha: senha,
      id: params.id,
    };
    axios
      .post("/usuario/atualizausuario", atualizarusuario)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .then((err) => console.log(err));
  }

  return (
    <div>
      <h1>Editar o Usuario</h1>
      <h3>O ID do usuario é {params.id}</h3>
      <input
        type="text"
        placeholder="Nome:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Nova senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <button onClick={EditaUsuario}>Editar</button>
    </div>
  );
}

export default EditarUsuario;
