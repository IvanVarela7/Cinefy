import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard(props) {
  const [favorito, setFavorito] = useState(false)

  const handleFavorito = ()=>{
    setFavorito(!favorito);
  }

  return (
    <div className="card">
      <img
        className="img-poster-pelicula"
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
      />
      <h2 className="h2-titulo">{props.movie.title}</h2>
      <div className="contenedor-btn">
        <button className="btn-ver-detalle"><Link to={`/detalle/movie/${props.movie.id}`}>Detalles</Link></button>
        <button className="btn-agregar-fav" onClick={handleFavorito}>{favorito ? '💖' :'🤍' }</button>
      </div>
    </div>
  );
}

export default MovieCard;
