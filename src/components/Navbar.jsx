import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      <img className="img-logo" src={props.urlImagen} alt="arbol" />
      <ul className="lista-desordenada">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/peliculas">Peliculas</Link>
        </li>
        <li>
          <Link to="/favoritos">Mis Favoritos</Link>
        </li>
      </ul>

      <div className="contenedor-search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search"
          type="text"
          placeholder="Buscar"
        ></input>
        <button className="btn-buscar">
          <Link to={`/resultado/${search}`}>Buscar</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
