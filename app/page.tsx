"use client";
import { Box } from "@mui/material";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movies from "./Data/movies";

interface Movie {
  title: string;
  thumbnail: string;
}

function MovieList() {
  const settings: Settings = {
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

  return (
    <Box style={{ backgroundColor: "black" }}>
      {/* Trailer Box */}
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

      {/* Movie Carousel */}
      <div>
        <h2 style={{ color: "white", paddingLeft: "20px" }}>All movies</h2>
      </div>
      <Slider {...settings}>
        {movies.map((movie: Movie, index: number) => (
          <div key={index}>
            <img
              src={movie.thumbnail}
              style={{ maxWidth: "275px", paddingLeft: "20px" }}
              alt={movie.title}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default MovieList;
