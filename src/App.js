import "./App.css";
import Card from "./components/Card";
import Types from "./components/Types";
import { Link } from "react-router-dom";
import { useState } from "react";

function App({ recipes }) {
  const [tipo, setTipo] = useState("");
  return (
    <div className="App">
      <Types tipo={tipo} setTipo={setTipo} />
      <div className="cards">
      {recipes
          .filter((item) => (tipo !== "" ? item.tipo === tipo : true))
          .map((recipe) => (
            <Link className="link" key={recipe.id} to={"/recipe/" + recipe.id}>
              <Card recipe={recipe} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default App;
