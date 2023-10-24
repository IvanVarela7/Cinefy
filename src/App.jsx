import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Movie from "./screens/Movie";
import NotFound404 from "./screens/NotFound404";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import logo from "./images/cinefy-logo.jpg";
import Favourites from "./screens/Favourites";
import Detail from "./screens/Detail";
import Results from "./screens/Results";


function App() {
  return (
    <BrowserRouter>
      <Navbar urlImagen={logo} />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Movie />} />
        <Route path="/favoritos" element={<Favourites />} />
        <Route path="/detalle/movie/:idDetalleMovie" element={<Detail />} />
        <Route path="/detalle/serie/:idDetalleSerie" element={<Detail />} />
        <Route path="/resultado/:query" element={<Results />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
