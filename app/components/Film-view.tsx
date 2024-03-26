"use client";

import React, { useEffect } from "react";

interface FilmViewProps {
  movie: Movie;
  onClose: () => void;
}

export interface Movie {
  thumbnail: string;
}

const FilmView: React.FC<FilmViewProps> = ({ movie, onClose }) => {
  useEffect(() => {
    // Add event listener to handle clicks outside of the pop-up
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
        className="film-view-content"
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "80%",
          maxHeight: "80%",
          overflow: "auto",
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
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        {/* Additional movie information such as title and description can be added here */}
      </div>
    </div>
  );
};

export default FilmView;
