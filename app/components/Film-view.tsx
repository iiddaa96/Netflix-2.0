"use client";
import React, { useEffect, useRef } from "react";

interface FilmViewProps {
  movie: Movie;
  onClose: () => void;
}

export interface Movie {
  thumbnail: string;
  title: string;
  actors: string[];
  genre: string;
  synopsis: string;
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
      const maxWidth = window.innerWidth * 0.8; // 80% of the window width
      const maxHeight = window.innerHeight * 0.8; // 80% of the window height

      let newWidth = thumbnailWidth;
      let newHeight = thumbnailHeight;

      // Adjust width and height while maintaining aspect ratio
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
    <div
      className="film-view-overlay"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={filmViewRef}
        className="film-view-content"
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          overflowY: "auto", // Enable vertical scrolling
          maxHeight: "80vh", // Set max height for scrolling
        }}
      >
        <button
          className="close-button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          Close FilmView
        </button>
        <img
          src={movie.thumbnail}
          alt="Movie Thumbnail"
          style={{ width: "auto", height: "auto" }}
        />
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
      </div>
    </div>
  );
};

export default FilmView;
