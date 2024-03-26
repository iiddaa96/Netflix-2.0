"use client";
import { Favorite } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movies from "./Data/movies";
import MyFavorites from "./Favorite/page";

function MovieList() {
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
          src="https://www.youtube.com/embed/U2Qp5pL3ovA" //Får byta till bild eller filma in trailer o lägga till själva
          title="Dune Part Two Trailer"
          allowFullScreen
        ></iframe>
      </div>

      {/* Movie Carousel */}
      <div>
        <h2 style={{ color: "white", paddingLeft: "20px" }}>All movies</h2>
      </div>
      {/* Karusell för filmerna */}
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <Card sx={{ width: 297 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="460"
                  image={movie.thumbnail}
                  alt={movie.title}
                />
              </CardActionArea>
              {/* Knapp för favoriter */}
              <Box>
                <CardActions sx={{ backgroundColor: "black" }}>
                  <IconButton
                    sx={{ backgroundColor: "black" }}
                    color="error"
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
      <MyFavorites />
      <Favorite />
    </div>
  );
}

export default MovieList;
