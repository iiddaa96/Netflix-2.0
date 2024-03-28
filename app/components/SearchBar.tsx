"use client";
import { useState } from "react";
import movies from "../Data/movies";
import FilmView, { Movie } from "../components/FilmView";

interface SearchInputProps {
  defaultValue: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");

  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // lagt till autocomplete och search funktionalitet för att få up suggestions
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
    } else {
      setSuggestions([]);
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        id="inputId"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
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

      <ul style={{ listStyle: "none", padding: 0, position: "absolute" }}>
        <datalist id="suggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>

        {searchResults.map((movie) => (
          <li
            key={movie.id}
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {movie.title}
              </p>
            </button>
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
