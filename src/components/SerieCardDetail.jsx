import React from 'react'

function SerieCardDetail(props) {

	const [favorito, setFavorito] = useState(false);

  const handleFavorito = () => {
    setFavorito(!favorito);
  };

	return (
		<div className="card-detalle">
      <img
        className="img-poster-serie"
        src={`https://image.tmdb.org/t/p/w500/${props.serie.poster_path}`}
      />
      <h2 className="h2-titulo">{props.serie.name}</h2>
      <div className="contenedor-btn">
        <button className="btn-agregar-fav-detalle" onClick={handleFavorito}>
          {favorito ? "💖" : "🤍"}
        </button>
      </div>
    </div>
	)
}

export default SerieCardDetail