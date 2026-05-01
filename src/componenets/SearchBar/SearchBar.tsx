import React from "react";
// import { useNavigate } from "react-router-dom";
import type { SearchBarProps } from "./types";

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = "Search Products",
  className = "",
  onChange,
  onSubmit,
}) => {
  // const navigate = useNavigate();
  // // const makeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  // //   const val = event.target.value;
  // //   navigate(`/search?keyword=${val}`);
  // // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter && onSubmit") {
      if (onSubmit) {
        onSubmit(value);
         onChange(value);
      }
    }
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      value={value}
      name="input"
      className={`border-1 rounded-sm px-2 ${className}`}
    />
  );
};

export default SearchBar;
