import React, { useContext } from "react";

import { DataContext } from "../App/context";
import { fetchImageListBySelectedFilter } from "../../services/FetchData";

function SearchButton({ selectedFilter }) {
  const contextData = useContext(DataContext);

  function handleImageListUpdate(selectedFilter) {
    if (selectedFilter.length > 0) {
      contextData.updateContextData({ imageList: [], isLoading: true });
      getImageList(selectedFilter);
    } else {
      contextData.updateContextData({ imageList: [], isLoading: false });
    }
  }

  async function getImageList(selectedFilter) {
    const arrayResult = await fetchImageListBySelectedFilter(selectedFilter);
    contextData.updateContextData({
      imageList: arrayResult,
      isLoading: false,
    });
  }

  return (
    <button
      className="btn btn-primary"
      onClick={(event) => handleImageListUpdate(selectedFilter)}
    >
      Ver imágenes
    </button>
  );
}
export default SearchButton;
