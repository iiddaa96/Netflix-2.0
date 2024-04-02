"use client";
import { Box } from "@mui/material";
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
        minHeight: "0vh",
      }}
    >
      <Box
        ref={filmViewRef}
        className="film-view-content"
        sx={{
          display: "flex",
          backgroundColor: "rgba(211, 211, 211, 0.4)",
          color: "white",
          textShadow: "1px 1px 2px black",
          padding: "20px",
          borderRadius: "8px",
          overflowY: "auto",
          maxHeight: { xs: "55vh", md: "80vh" },
          marginTop: "7vh",
          maxWidth: { xs: "100vw", md: "80vw" },
        }}
      >
        <Box
          component="img"
          src={movie.thumbnail}
          alt="Movie Thumbnail"
          sx={{
            width: { xs: "70%", md: "25%" },
            height: { xs: "35vh", md: "25vh" },
            mr: { xs: 2, md: 2 },
          }}
        />
        <section style={{ width: "50%" }}>
          <h2>{movie.title}</h2>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Synopsis:</strong> {movie.synopsis}
          </p>
          <p>
            <strong>Actors:</strong> {movie.actors.join(", ")}
          </p>
          <FavouriteButton movie={movie} />
        </section>
      </Box>
    </Box>
  );
};

export default FilmView;
