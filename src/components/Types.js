import "./css/Types.css";
const Types = ({ tipo, setTipo }) => {
  const handleFilterClick = (type) => {
    setTipo(type);
  };
  return (
    <div className="types">
      <span
        className={tipo === "" ? "selected" : ""}
        onClick={() => handleFilterClick("")}
      >
        Todos
      </span>
      <span
        className={tipo === "Sobremesa" ? "selected" : ""}
        onClick={() => handleFilterClick("Sobremesa")}
      >
        Sobremesa
      </span>
      <span
        className={tipo === "Prato principal" ? "selected" : ""}
        onClick={() => handleFilterClick("Prato principal")}
      >
        Prato principal
      </span>
      <span
        className={tipo === "Lanche" ? "selected" : ""}
        onClick={() => handleFilterClick("Lanche")}
      >
        Lanche
      </span>
      <span
        className={tipo === "Acompanhamento" ? "selected" : ""}
        onClick={() => handleFilterClick("Acompanhamento")}
      >
        Acompanhamento
      </span>
    </div>
  );
};

export default Types;
