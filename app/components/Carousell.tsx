"use client";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FilmView, { Movie } from "../components/Film-view";
import FavoriteButton from "./FavouriteButton";

interface ICarousell {
  title: string;
  movies: Movie[];
}

function Carousell({ title, movies }: ICarousell) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // const { toggleFavorite } = useFavoriteMovies();
  // const handleMovieClick = (movie: Movie) => {
  //   setSelectedMovie(movie);
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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
      {/* Karusell */}
      <div>
        <h3
          style={{
            color: "white",
            paddingLeft: "20px",
          }}
        >
          {title}
        </h3>
      </div>
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ padding: "0 10px" }}>
            <div style={{ position: "relative" }}>
              <img
                src={movie.thumbnail}
                alt={movie.title}
                style={{ width: "100%" }}
              />
              <FavoriteButton movie={movie} />
            </div>
            <div style={{ color: "white", textAlign: "center" }}>
              <p>{movie.title}</p>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* Popup fönster när man klickar på utvald film */}
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
// Pil för att svipe till höger
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      style={{
        ...style,
        backgroundColor: "transparent",
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
// Pil för att svipe till vänster
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      style={{
        ...style,
        backgroundColor: "transparent",
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

export default Carousell;
