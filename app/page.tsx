// "use client";

// import { Box } from "@mui/material";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import movies from "./Data/movies";

// const MovieCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 2,
//   };

//   return (
//     // Karusell för alla filmer

//     <Box>
//       <Slider {...settings}>
//         {movies.map((movie, index) => (
//           <div key={index}>
//             <img
//               src={movie.thumbnail}
//               style={{ maxWidth: "100%", height: "auto" }}
//             />
//           </div>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default MovieCarousel;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import movies from "./Data/movies";

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
    <div>
      {/* Trailer Box */}
      <div className="trailer-box">
        <iframe
          width="1386"
          height="450"
          src="https://www.youtube.com/embed/U2Qp5pL3ovA"
          title="Dune Part Two Trailer"
          allowFullScreen
        ></iframe>
      </div>

      {/* Movie Carousel */}
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <img src={movie.thumbnail} style={{ maxWidth: "200px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieList;
