import { useState } from 'react'
import '../styles/MovieCardResult.css'
import { Link } from 'react-router-dom';

function MovieCardResult(props) {

	const [favorito, setFavorito] = useState(false);

  const handleFavorito = () => {
    setFavorito(!favorito);
	}

	return (
		 <div className="card-rsultado">
      <button className="btn-result-agregar-fav" onClick={handleFavorito}>
        {favorito ? "💖" : "🤍"}
      </button>
      <div className="imagen">
        <img
          className="img-poster-pelicula-resultado"
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.original_title}
        />
        <div className="resultado-detalles-pelicula">
          <h2 className="h2-titulo">{props.movie.original_title}</h2>
          <button className="btn-result-ver-detalle"><Link to={`/detalle/movie/${props.movie.id}`}>Detalles</Link></button>
        </div>
      </div>
    </div>
  )
}

export default MovieCardResult