"use client";
import { useState } from "react";
import movies from "../Data/movies";

interface SearchInputProps {
  defaultValue: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [searchResults, setSearchResults] = useState<any[]>([]);
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
      const results = movies.filter((movie: any) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
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
          padding: "8px 12px",
          borderRadius: "20px",
          backgroundColor: "#f8f8f8",
          width: "100%",
          boxSizing: "border-box",
          outline: "none",
        }}
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <img src={movie.thumbnail} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
