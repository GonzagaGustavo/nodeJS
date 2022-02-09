import "./App.css";
import CriarUsuario from "./Components/CriarUsuario";
import EditarUsuario from "./Components/EditarUsuario";
import ListadeUsuarios from "./Components/ListadeUsuarios";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <a href="/">Início</a>
          <a href="CriarUsuario">Criar Usuário</a>
        </div>
        <Route path="/" exact render={() => {
          return (
            <ListadeUsuarios />
          )
        }} />
        <Route path="/CriarUsuario" exact component={CriarUsuario} />
        <Route path="/EditarUsuario" exact component={<EditarUsuario />} />
      </div>
    </Router>
  );
}

export default App;
