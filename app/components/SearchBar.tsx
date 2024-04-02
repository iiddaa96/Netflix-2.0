"use client";
import { useState } from "react";
import movies from "../Data/movies";
import FilmView, { Movie } from "../components/FilmView";

interface SearchInputProps {
  defaultValue: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [, setSearchResults] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      const suggestions = movies
        .filter((movie: any) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
        )
        .map((movie: any) => movie.title);
      setSuggestions(suggestions);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      const results = movies.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const clickedMovie = movies.find(
      (movie) => movie.title.toLowerCase() === suggestion.toLowerCase()
    );
    if (clickedMovie) {
      handleMovieClick(clickedMovie);
    }
    setSuggestions([]);
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        id="inputId"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
        list="suggestions"
        style={{
          marginTop: "1rem",
          marginLeft: "9rem",
          padding: "8px 12px",
          borderRadius: "20px",
          backgroundColor: "#f8f8f8",
          width: "50%",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      <ul
        style={{
          padding: 0,
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "5px",
          color: "black",
          marginLeft: "9rem",
        }}
      >
        {suggestions.map((suggestion, index) => (
          // Styleing på listan som dyker upp när man söker
          <li
            key={index}
            style={{
              display: "flex",
              cursor: "pointer",
              margin: "0.5rem",
            }}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <FilmView
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default SearchInput;
