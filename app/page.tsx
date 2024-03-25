import movies from "./Data/movies";

function MovieList() {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <img
            src={movie.thumbnail}
            alt={movie.title}
            style={{ maxWidth: "200px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
