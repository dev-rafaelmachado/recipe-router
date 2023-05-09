import "./css/Card.css";
const Card = ({ recipe }) => {
  return (
    <article className="card">
      <img
        className="card__background"
        src={recipe.img}
        alt={recipe.nome}
        width={1920}
        height={2193}
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{recipe.nome}</h2>
          <p className="card__description">
            Tipo:{"  " + recipe.tipo} <br/>
            Tempo de Preparo:{"  " + recipe.tempo}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
