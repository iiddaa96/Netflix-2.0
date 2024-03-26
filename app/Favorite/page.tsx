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
import movies from "../Data/movies";

function MyFavorites() {
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
      <Favorite />
    </div>
  );
}

export default MyFavorites;
