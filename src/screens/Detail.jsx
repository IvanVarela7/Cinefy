import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import Loader from "../components/Loader";
import '../styles/Detail.css'
import Footer from "../components/Footer";

function Detail() {
  const [detalleMovie, setDetalleMovie] = useState(null);

  const {idDetalleMovie }  = useParams();

  // Fetch movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idDetalleMovie}?api_key=72e080e3f5cfa3f1fd7c526eac6e69b9`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetalleMovie(data);
      })
  }, [])

  return (
    <div className="contenedor-principal-detalle">
      <h1>Detalle de Pelicula</h1>
      <div className="contenedor-detalle-pelicula">
        {detalleMovie !== null ? (
                <MovieCardDetail data_movie={detalleMovie} />
              ) : (
                <Loader />
              )}

      </div>
      
    </div>
  );
}

export default Detail;
