import React from "react";

export const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="container-fluid my-3 input-group">
      <input
        className="form-control py-2"
        type="text"
        placeholder="Search for Movies, Actors or TV Shows "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="btn btn-light px-4 search-btn"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
