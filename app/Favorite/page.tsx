"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useFavoriteMovies } from "../context/FavoriteMoviesContext";

const FavoritePage: React.FC = () => {
  const { favoriteMovies } = useFavoriteMovies();

  // console.log("Favorite Movies:", favoriteMovies);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div>
        <Typography variant="h3" gutterBottom>
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
    </div>
  );
};

export default FavoritePage;
