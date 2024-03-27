"use client";

import { useFavoriteMovies } from "../context/FavoriteMoviesContext";
const FavoritePage = () => {
  const { favoriteMovies } = useFavoriteMovies();

  console.log("Favorite Movies:", favoriteMovies);

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <div>
        {/* Loopa igenom favoritfilmerna och skapa JSX-element för varje film */}
        {favoriteMovies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.thumbnail} alt={movie.title} />
            {/* Du kan lägga till ytterligare information om filmen här */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
