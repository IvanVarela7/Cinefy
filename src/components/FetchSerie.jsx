import React, { useEffect, useState } from "react";
import SerieCard from "./SerieCard";
import Loader from "./Loader";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FetchSerie() {
  const [series, setSeries] = useState([]);

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 4, // Cambia este valor según tu diseño
    slidesToScroll: 5,
  };
  

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=72e080e3f5cfa3f1fd7c526eac6e69b9"
    )
      .then((res) => res.json())
      .then((data) => setSeries(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    <Slider {...settings}>
      {series.length > 0 ? (
              series.map((serie) => <SerieCard serie={serie} key={serie.id} />)
            ) : (
              <Loader />
            )}

    </Slider>
      
    </>
  );
}

export default FetchSerie;
