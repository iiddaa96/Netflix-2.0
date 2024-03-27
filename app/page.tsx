import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movies from "./Data/movies";
import Carousell from "./components/Carousell";

function MovieList() {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* Trailer */}
      <div
        className="trailer-box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: "30rem",
            display: "flex",
            alignContent: "center",
          }}
          src="/gladiator.mp4"
          title="Dune Part Two Trailer"
          allowFullScreen
        ></iframe>
      </div>
      {/* -------Karuseller här------ */}
      <Carousell
        title="Trending"
        movies={movies.filter((movie) => movie.id >= 20 && movie.id <= 28)}
      />
      <Carousell
        title="Recommended for you"
        movies={movies.filter((movie) => movie.id >= 13 && movie.id <= 19)}
      />
      <Carousell title="All movies" movies={movies} />
    </div>
  );
}

export default MovieList;
