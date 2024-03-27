import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
          src="https://www.youtube.com/embed/U2Qp5pL3ovA"
          title="Dune Part Two Trailer"
          allowFullScreen
        ></iframe>
      </div>
      {/* -------Karusell här------ */}
      <Carousell />
    </div>
  );
}

export default MovieList;
