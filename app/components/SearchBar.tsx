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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
        {searchResults.map((movie) => (
          <li
            key={movie.id}
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <button
              style={{
                backgroundColor: "lightgray",
                color: "white",
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
