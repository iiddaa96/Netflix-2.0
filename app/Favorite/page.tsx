"use client";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteButton from "../components/FavouriteButton";
import { Movie, useFavoriteMovies } from "../context/FavoriteMoviesContext";

const FavoritePage: React.FC = () => {
  const { favoriteMovies, toggleFavorite } = useFavoriteMovies();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        padding: "20px",
      }}
    >
      <Typography
        sx={{ textAlign: "center", color: "white", marginBottom: "20px" }}
        variant="h4"
        gutterBottom
      >
        My favorite movies
      </Typography>
      <Grid container spacing={3}>
        {favoriteMovies &&
          favoriteMovies.map((movie) => (
            <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
              <Card
                sx={{
                  maxWidth: "95%",
                  width: "auto",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <CardActionArea onClick={() => handleMovieClick(movie)}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={movie.thumbnail}
                    alt={movie.title}
                    style={{ borderRadius: "8px" }}
                  />
                </CardActionArea>
                <CardActions
                  sx={{ backgroundColor: "black", justifyContent: "center" }}
                >
                  <FavoriteButton movie={movie} />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "white", marginLeft: "10px" }}
                  >
                    Year: {movie.year}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "white", marginLeft: "10px" }}
                  >
                    Rating: {movie.rating}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default FavoritePage;
