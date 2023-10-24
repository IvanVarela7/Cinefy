import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FetchMovie() {
  const [movies, setMovies] = useState([]);

   const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 4, // Cambia este valor según tu diseño
    slidesToScroll: 5,
  };

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
      <Slider {...settings}>

        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <Loader />
        )}

      </Slider>

      


    </>
  );
}

export default FetchMovie;
