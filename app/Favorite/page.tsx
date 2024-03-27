"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useFavoriteMovies } from "../context/FavoriteMoviesContext";

const FavoritePage: React.FC = () => {
  const { favoriteMovies } = useFavoriteMovies();

  console.log("Favorite Movies:", favoriteMovies);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Typography sx={{ textAlign: "center", textColor: "white" }} variant="h4">
        My Favorite Movies
      </Typography>
      <Grid container spacing={3}>
        {favoriteMovies.map((movie) => (
          <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
            <div style={{ textAlign: "center" }}>
              <img
                src={movie.thumbnail}
                alt={movie.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              <Typography variant="h6" gutterBottom>
                {movie.title}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FavoritePage;
