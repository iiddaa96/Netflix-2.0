"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Movie } from "../components/Film-view"; // Anta att Movie är filnamnet
import { useFavoriteMovies } from "../context/FavoriteMoviesContext";

interface FavoriteButtonProps {
  movie: Movie;
}

function FavoriteButton({ movie }: FavoriteButtonProps) {
  const { toggleFavorite, favoriteMovies } = useFavoriteMovies();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isMovieFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    setIsFavorite(isMovieFavorite);
  }, [favoriteMovies, movie.id]);

  const handleClick = () => {
    toggleFavorite(movie);
    setIsFavorite(!isFavorite);
  };

  return (
    <IconButton
      aria-label="toggle favorite"
      onClick={handleClick}
      style={{
        backgroundColor: "transparent",
        padding: 0,
      }}
    >
      {isFavorite ? (
        <FavoriteIcon style={{ fontSize: 24, color: "white" }} />
      ) : (
        <FavoriteBorderIcon
          style={{
            fontSize: 24,
            color: "white",

            borderRadius: "50%",
          }}
        />
      )}
    </IconButton>
  );
}

export default FavoriteButton;
