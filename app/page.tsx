// import movies from "./Data/movies";

// function MovieList() {
//   return (
//     <div>
//       {movies.map((movie, index) => (
//         <div key={index}>
//           <h2>{movie.title}</h2>
//           <img
//             src={movie.thumbnail}
//             alt={movie.title}
//             style={{ maxWidth: "200px" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MovieList;
"use client";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import movies from "./Data/movies";

function TrendingMovies() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Trending Movies
      </Typography>
      <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
        {movies.map((movie, index) => (
          <div key={index}>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="400"
                    image={movie.thumbnail}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {movie.synopsis}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingMovies;
