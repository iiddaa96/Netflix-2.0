"use client";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FavouriteButton from "./FavouriteButton";

export interface FilmViewProps {
  movie: Movie;
  onClose: () => void;
}

export interface Movie {
  id: any;
  thumbnail: string;
  title: string;
  actors: string[];
  genre: string;
  synopsis: string;
  year: number;
  rating: string;
}

const FilmView: React.FC<FilmViewProps> = ({ movie, onClose }) => {
  const filmViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // om man klickar utanför bilden försvinner film-view
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(".film-view-content") === null) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (filmViewRef.current) {
      const { width: thumbnailWidth, height: thumbnailHeight } =
        filmViewRef.current.getBoundingClientRect();
      const aspectRatio = thumbnailWidth / thumbnailHeight;
      const maxWidth = window.innerWidth * 0.8;
      const maxHeight = window.innerHeight * 0.8;

      let newWidth = thumbnailWidth;
      let newHeight = thumbnailHeight;

      // Justera bredd och höjd samtidigt som aspect ratio bibehålls
      if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newHeight = newWidth / aspectRatio;
      }
      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * aspectRatio;
      }

      filmViewRef.current.style.width = `${newWidth}px`;
      filmViewRef.current.style.height = `${newHeight}px`;
    }
  }, [movie.thumbnail]);

  return (
    <Box
      className="film-view-overlay"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        ref={filmViewRef}
        className="film-view-content"
        sx={{
          backgroundColor: "rgba(211, 211, 211, 0.4)",
          color: "white",
          textShadow: "1px 1px 2px black",
          padding: "20px",
          borderRadius: "8px",
          overflowY: "auto",
          maxHeight: "80vh",
          width: "90%",
          maxWidth: "600px", // Set a fixed width for the gray box
          mt: "7vh",
          minHeight: "75vh",
        }}
      >
        <Card sx={{ marginBottom: 2, width: "40vh" }}>
          <CardMedia
            component="img"
            image={movie.thumbnail}
            alt="Movie Thumbnail"
            sx={{ height: "auto", width: "100%" }}
          />
        </Card>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {movie.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Genre:</strong> {movie.genre}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Synopsis:</strong> {movie.synopsis}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Actors:</strong> {movie.actors.join(", ")}
        </Typography>
        <FavouriteButton movie={movie} />
      </Box>
    </Box>
  );
};

export default FilmView;
