import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import "../styles/Movie.css";
import Footer from "../components/Footer";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=72e080e3f5cfa3f1fd7c526eac6e69b9"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="contenedor-movie-principal">
        <h1>Peliculas</h1>
        <div className="contenedor-movie">
          {movies.length > 0 ? (
            movies.slice(0, 20).map((movie) => <MovieCard movie={movie} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Movie;
