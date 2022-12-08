import React from "react";

function SearchButton({ handleImageListUpdated, selectedFilter }) {
  return (
    <button
      className="btn btn-primary"
      onClick={(event) => handleImageListUpdated(selectedFilter)}
    >
      Ver imágenes
    </button>
  );
}
export default SearchButton;
