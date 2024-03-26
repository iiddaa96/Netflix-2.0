"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movies from "./Data/movies";
import FilmView, { Movie } from "./components/Film-view";
import Trending from "./components/Trending";

function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const toggleFavorite = (movie: Movie) => {
    const isFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    if (isFavorite) {
      const updatedFavorites = favoriteMovies.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFavoriteMovies(updatedFavorites);
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  const isFavorite = (movie: Movie) => {
    return favoriteMovies.some((favMovie) => favMovie.id === movie.id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <Trending />
      {/* Movie Carousel */}
      <div>
        <h2 style={{ color: "white", paddingLeft: "20px" }}>All movies</h2>
      </div>
      {/* Carousel for movies */}
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <Card sx={{ width: 297 }}>
              <CardActionArea onClick={() => handleMovieClick(movie)}>
                <CardMedia
                  component="img"
                  height="300"
                  image={movie.thumbnail}
                  alt={movie.title}
                />
              </CardActionArea>
              {/* Button for favorites */}
              <Box>
                <CardActions sx={{ backgroundColor: "black" }}>
                  <IconButton
                    color={"error"}
                    aria-label="add to favorites"
                    onClick={() => toggleFavorite(movie)}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <Typography variant="subtitle2" sx={{ color: "white" }}>
                    Year: {movie.year}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "white" }}>
                    Rating: {movie.rating}
                  </Typography>
                </CardActions>
              </Box>
            </Card>
          </div>
        ))}
      </Slider>
      {selectedMovie && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FilmView
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        </div>
      )}
    </div>
  );
}

export default MovieList;
