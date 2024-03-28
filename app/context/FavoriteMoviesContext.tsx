"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type Movie = {
  id: number;
  year: number;
  rating: string;
  title: string;
  genre: string;
  thumbnail: string;
  synopsis?: string;
  actors: string[];
};

type FavoriteMoviesContextType = {
  favoriteMovies: Movie[];
  toggleFavorite: (movie: Movie) => void;
};

const FavoriteMoviesContext = createContext<
  FavoriteMoviesContextType | undefined
>(undefined);

export const useFavoriteMovies = () => {
  const context = useContext(FavoriteMoviesContext);
  if (!context) {
    throw new Error(
      "useFavoriteMovies must be used within a FavoriteMoviesProvider"
    );
  }
  return context;
};

interface FavoriteMoviesProviderProps {
  children: ReactNode;
}

export const FavoriteMoviesProvider: React.FC<FavoriteMoviesProviderProps> = ({
  children,
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const toggleFavorite = (movie: Movie) => {
    const isFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    if (isFavorite) {
      const updatedFavorites = favoriteMovies.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFavoriteMovies(updatedFavorites);
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, toggleFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
