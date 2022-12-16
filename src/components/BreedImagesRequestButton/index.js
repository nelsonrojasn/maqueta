import React, { useContext } from "react";

import { ImageListContext } from "../App/context";
import { fetchImageListBySelectedFilter } from "../../services/FetchData";

export default function BreedImagesRequestButton({ selectedFilter }) {
  const imageListContext = useContext(ImageListContext);

  function handleImageListUpdate(selectedFilter) {
    if (selectedFilter.length > 1) {
      imageListContext.updateImageListContext({ imageList: [], isLoading: true });
      if (selectedFilter.endsWith('/')) {
        selectedFilter = selectedFilter.slice(0, -1);
      }
      getImageListByFilter(selectedFilter);
    } else {
      imageListContext.updateImageListContext({ imageList: [], isLoading: false });
    }
  }

  async function getImageListByFilter(selectedFilter) {
    const arrayResult = await fetchImageListBySelectedFilter(selectedFilter);
    imageListContext.updateImageListContext({
      imageList: arrayResult,
      isLoading: false,
    });
  }

  return (
    <button
      className="btn btn-primary w-100"
      onClick={(event) => handleImageListUpdate(selectedFilter)}
    >
      <i className="fa-solid fa-image"></i> Apply filters
    </button>
  );
}
