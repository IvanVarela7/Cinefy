import { useState } from "react";
import "../styles/MovieCardDetail.css";

function MovieCardDetail(props) {
  const [favorito, setFavorito] = useState(false);

  const handleFavorito = () => {
    setFavorito(!favorito);
  };
  return (
    <div className="card-detalle">
      <button className="btn-agregar-fav" onClick={handleFavorito}>
        {favorito ? "💖" : "🤍"}
      </button>
      <div className="imagen-y-detalles">
        <img
          className="img-poster-pelicula-detalle"
          src={`https://image.tmdb.org/t/p/w500/${props.data_movie.poster_path}`}
          alt={props.data_movie.original_title}
        />
        <div className="detalles-pelicula">
          <h2 className="h2-titulo">{props.data_movie.original_title}</h2>
          <p className="detalle-pelicula">{props.data_movie.overview}</p>
          <div className="info-adicional">
            <p className="fecha-lanzamiento">
              Fecha de Lanzamiento: {new Date(props.data_movie.release_date).toLocaleDateString("es-ES")}
            </p>
            <p className="lenguaje">Idioma: {props.data_movie.original_language.toUpperCase()}</p>
            <p className="vote-average">Calificación Promedio: {props.data_movie.vote_average.toFixed(1)}</p>
            <p className="vote-count">Total de Votos: {props.data_movie.vote_count}</p>
            <p className="runtime">Duración: {props.data_movie.runtime} minutos</p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default MovieCardDetail;
