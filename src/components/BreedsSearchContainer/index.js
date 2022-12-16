import React, { useState, useEffect } from "react";

import BreedSelector from "../BreedSelector";
import BreedImagesRequestButton from "../BreedImagesRequestButton";
import ClearAllBreedFiltersButton from "../ClearAllBreedFiltersButton";
import BreedsSelectedFilters from "../BreedsSelectedFilters";

import { useAllBreeds } from "../../hooks/useAllBreeds";

export default function BreedsSearchContainer() {
  const breedsArray = useAllBreeds();
  const [subBreedsArray, setSubBreedsArray] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSubBreed, setSelectedSubBreed] = useState("");

  const selectedFilter = `${selectedBreed}/${selectedSubBreed}`;

  useEffect(() => {
    //actualizar lista de subbreeds
    setSelectedSubBreed("");
    setSubBreedsArray([]);

    const subBreedsArray = breedsArray.filter((item) => {
      return item.name === selectedBreed;
    });

    subBreedsArray.length > 0 && setSubBreedsArray(subBreedsArray[0].items);
  }, [selectedBreed, breedsArray]);

  function handleClearContent() {
    setSelectedBreed("");
    setSelectedSubBreed("");
  }

  return (
    <aside className="col-md-4 col-sm-12" role="aside">
      <div className="card">
      <div className="card-body">
        <BreedSelector
          key="ddBreedSelector"
          labelText="Select a breed"
          dataSource={breedsArray}
          handleChange={(event) => setSelectedBreed(event.target.value)}
          value={selectedBreed}
        />

        <BreedSelector
          key="ddSelectorDeSubBreeds"
          labelText="Select Sub-breed"
          dataSource={subBreedsArray}
          handleChange={(event) => setSelectedSubBreed(event.target.value)}
          value={selectedSubBreed}
        />

        <BreedsSelectedFilters
          selectedBreed={selectedBreed}
          selectedSubBreed={selectedSubBreed}
          selectedFilter={selectedFilter}
        />

        <BreedImagesRequestButton selectedFilter={selectedFilter} />
        <ClearAllBreedFiltersButton handleClearContent={handleClearContent} />
      </div>
    </div>
    </aside>
  );
}
