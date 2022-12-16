import React, { useContext } from "react";

import { ImageListContext } from "../App/context";

export default function ClearAllBreedFiltersButton({ handleClearContent }) {
  const imageListContext = useContext(ImageListContext);


  function handleButtonClick()
  {
    handleClearContent();
    imageListContext.updateImageListContext({ imageList: [], isLoading: false });
  }


  return (
    <button
      className="btn btn-secondary w-100 mt-1"
      onClick={(event) => handleButtonClick()}
    >
      <i className="fa-solid fa-xmark"></i> Clear all filters
    </button>
  );
}
