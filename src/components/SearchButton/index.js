import React, { useState, useContext } from "react";

import { DataContext } from "../App";

import { fetchImageListBySelectedFilter } from "../../services/FetchData";
import { normalizeArrayImagesForSimpleSearch } from "../../services/UtilsHelper";

function SearchButton({ selectedFilter }) {
  const contextData = useContext(DataContext);

  function handleImageListUpdated(selectedFilter) {
    if (selectedFilter.length > 0) {
      contextData.updateContextData({ imageList: [], isLoading: true });
      getImageList(selectedFilter);
    }
  }

  function getImageList(selectedFilter) {
    fetchImageListBySelectedFilter(selectedFilter)
      .then((res) => {
        let arrayResult = normalizeArrayImagesForSimpleSearch(res.message);

        contextData.updateContextData({
          imageList: arrayResult,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

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
