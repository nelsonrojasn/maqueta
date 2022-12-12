import React, { useContext } from "react";

import { DataContext } from "../App/context";

function ClearButton({ handleClearContent }) {
  const contextData = useContext(DataContext);


  function handleButtonClick()
  {
    handleClearContent();
    contextData.updateContextData({ imageList: [], isLoading: false });
  }


  return (
    <button
      className="btn btn-secondary w-100 mt-1"
      onClick={(event) => handleButtonClick()}
    >
      <i className="fa-solid fa-xmark"></i> Limpiar filtros
    </button>
  );
}
export default ClearButton;
