// "use client";
// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import movies from "./Data/movies";

// function TrendingMovies() {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Trending Movies
//       </Typography>
//       <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
//         {movies.map((movie, index) => (
//           <div key={index}>
//             <Grid container justifyContent="center">
//               <Grid item xs={12} sm={6} md={4} lg={3}>
//                 <Card>
//                   <CardMedia
//                     component="img"
//                     height="400"
//                     image={movie.thumbnail}
//                     alt={movie.title}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" gutterBottom>
//                       {movie.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default TrendingMovies;
"use client";

import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movies from "./Data/movies";

const MovieCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    // Karusell för alla filmer
    <Box>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <img
              src={movie.thumbnail}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default MovieCarousel;
