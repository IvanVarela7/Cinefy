import "../styles/Home.css";
import FetchMovie from "../components/FetchMovie";
import FetchSerie from "../components/FetchSerie";

import Footer from '../components/Footer'

function Home() {
  return (
    <div className="contenedor-home">
      <div className="contenedor-peliculas">
        <h1>Peliculas</h1>
        <FetchMovie />
      </div>
      <div className="contenedor-series">
        <h1>Series</h1>
        <FetchSerie/>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
