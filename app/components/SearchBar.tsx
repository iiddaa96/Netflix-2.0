// "use client";
// import { useState } from "react";
// import movies from "../Data/movies";

// interface SearchInputProps {
//   defaultValue: string | null;
// }

// const SearchInput: React.FC<SearchInputProps> = ({ defaultValue }) => {
//   const [inputValue, setInputValue] = useState(defaultValue || "");
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleSearch = () => {
//     if (inputValue.trim() !== "") {
//       //används för att söka genom data filen
//       const results = movies.filter((movie: any) =>
//         movie.title.toLowerCase().includes(inputValue.toLowerCase())
//       );
//       setSearchResults(results);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="inputId"
//         placeholder="Search"
//         value={inputValue}
//         onChange={handleChange}
//         onKeyDown={handleKeyPress}
//         style={{
//           marginTop: "1rem",
//           padding: "8px 12px",
//           borderRadius: "20px",
//           backgroundColor: "#f8f8f8",
//           width: "100%",
//           boxSizing: "border-box",
//           outline: "none",
//         }}
//       />
//       <ul>
//         {searchResults.map((movie) => (
//           <li key={movie.id}>
//             <img src={movie.thumbnail} alt={movie.title} />
//             <p>{movie.title}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchInput;

"use client";
import { useState } from "react";
import movies from "../Data/movies";

interface Movie {
  id: number;
  thumbnail: string;
  title: string;
}

interface SearchInputProps {
  defaultValue: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

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
      <ul style={{ listStyle: "none", padding: 0 }}>
        {searchResults.map((movie) => (
          <li
            key={movie.id}
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {movie.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
