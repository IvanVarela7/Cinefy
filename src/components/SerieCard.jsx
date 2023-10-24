import React, { useState } from "react";
import "../styles/SerieCard.css";

function SerieCard(props) {
  const [favorito, setFavorito] = useState(false);

  const handleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <div className="card-serie">
      <img
        className="img-poster-serie"
        src={`https://image.tmdb.org/t/p/w500/${props.serie.poster_path}`}
      />
      <h2 className="h2-titulo">{props.serie.name}</h2>
      <div className="contenedor-btn">
        <button className="btn-agregar-fav" onClick={handleFavorito}>
          {favorito ? "💖" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default SerieCard;
