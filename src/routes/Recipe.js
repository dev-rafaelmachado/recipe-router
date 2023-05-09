import { Link, useParams } from "react-router-dom";
import "./css/Recipe.css";
const Recipe = ({ recipes }) => {
  const { id } = useParams();

  return (
    <div className="Recipe">
      <header>
        <Link to="/">
          <svg
            className="back"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </Link>
        <h1>{recipes[id - 1].nome}</h1>
      </header>
      <div className="ingr">
          <h2>Ingredientes</h2>
          {recipes[id - 1].ingredientes.map((item,index) => {
            return <li key={index}>{item}</li>
          })}
        </div>
      <div className="desc">
      <h2>Preparo</h2>
      <p>{recipes[id - 1].preparo}</p>
      </div>
      <div className="shadow"> </div>
      <img className="image" src={recipes[id - 1].img} alt={recipes[id - 1].nome} />
    </div>
  );
};

export default Recipe;
