import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import movies from "../Data/movies";
import FilmView, { Movie } from "../components/Film-view";

function Trending() {
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

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{
          ...style,
          color: "white",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
          marginRight: "1.2rem",
        }}
        onClick={onClick}
      ></IconButton>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{
          ...style,
          color: "white",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
          marginLeft: "1rem",
        }}
        onClick={onClick}
      ></IconButton>
    );
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      {/* Movie Carousel */}
      <div>
        <h2 style={{ color: "white", paddingLeft: "20px" }}>Trending</h2>
      </div>
      {/* Carousel for movies */}
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        {movies.slice(0, 10).map((movie, index) => (
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
                    sx={{ backgroundColor: "black" }}
                    color={"error"}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon />
                  </IconButton>
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

export default Trending;
