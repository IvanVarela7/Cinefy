import React from "react";
import "../styles/NotFound404.css";
import Img404 from "../images/not-found-404.jpg";

export default function NotFound404() {
  return (
    <div className="contenedor-img404">
      <img
        className="img-404NotFound"
        src={Img404}
        alt="imagen not found 404"
      />
    </div>
  );
}
