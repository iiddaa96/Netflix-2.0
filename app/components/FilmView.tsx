"use client";
import React, { useEffect, useRef } from "react";

interface FilmViewProps {
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
    <div
      className="film-view-overlay"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        ref={filmViewRef}
        className="film-view-content"
        style={{
          display: "flex",
          backgroundColor: "rgba(211, 211, 211, 0.2)",
          color: "white",
          textShadow: "1px 1px 2px black",
          padding: "20px",
          borderRadius: "8px",
          overflowY: "auto",
          maxHeight: "80vh",
          maxWidth: "80vw",
        }}
      >
        <img
          src={movie.thumbnail}
          alt="Movie Thumbnail"
          style={{ width: "35%", marginRight: "20px" }}
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
        </section>
      </div>
    </div>
  );
};

export default FilmView;
