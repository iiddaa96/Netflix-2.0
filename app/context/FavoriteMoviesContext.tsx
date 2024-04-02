"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Movie = {
  id: number;
  year: number;
  rating: string;
  title: string;
  genre: string;
  thumbnail: string;
  synopsis: string;
  actors: string[];
};

type FavoriteMoviesContextType = {
  favoriteMovies?: Movie[]; // Making favoriteMovies optional
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
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[] | undefined>(
    () => {
      if (typeof window !== "undefined") {
        const storedFavorites = localStorage.getItem("favoriteMovies");
        return storedFavorites ? JSON.parse(storedFavorites) : undefined;
      }
      return undefined;
    }
  );

  const toggleFavorite = (movie: Movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (!prevFavorites) {
        return [movie];
      }

      const isFavorite = prevFavorites.some(
        (favMovie) => favMovie.id === movie.id
      );
      if (isFavorite) {
        return prevFavorites.filter((favMovie) => favMovie.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  useEffect(() => {
    if (favoriteMovies !== undefined && typeof window !== "undefined") {
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    }
  }, [favoriteMovies]);

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, toggleFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
