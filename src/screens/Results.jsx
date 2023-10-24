import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import '../styles/Results.css'
import MovieCardResult from "../components/MovieCardResult";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Results() {
  const { query } = useParams();

  const [busqueda, setBusqueda] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=72e080e3f5cfa3f1fd7c526eac6e69b9`
    )
      .then((res) => res.json())
      .then((data) => setBusqueda(data.results));
  }, [busqueda]);

  return(
	<>
		<div className="contenedor-principal-result">
			
				{busqueda.length > 0 ?(
				busqueda.slice(0,20).map((movie)=> <MovieCardResult movie={movie}/> )
			):(
				<Loader />
			)}

		</div>
		<Footer />
	</>) 
}

export default Results;
