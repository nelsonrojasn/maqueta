import React from "react";

export default function BreedsSelectedFilters({ selectedBreed, selectedSubBreed, selectedFilter }) {
  return (
    <div className="card mb-2">
      <div className="card-header">Selected Filters</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Breed: {selectedBreed}</li>
        <li className="list-group-item">Sub-breed: {selectedSubBreed}</li>
        <li className="list-group-item">Current Selection: {selectedFilter}</li>
      </ul>
    </div>
  );
}
