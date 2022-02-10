import "./App.css";
import CriarUsuario from "./Components/CriarUsuario";
import EditarUsuario from "./Components/EditarUsuario";
import ListadeUsuarios from "./Components/ListadeUsuarios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <a href="/">Início</a>
          <a href="CriarUsuario">Criar Usuário</a>
        </div>
        <Routes>
        <Route path="/" exact element={<ListadeUsuarios />} />
        <Route path="/CriarUsuario" exact element={<CriarUsuario />} />
        <Route path="/EditarUsuario/:id" exact element={<EditarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
