import React, { useState, useContext } from "react";

import Gallery from "../Gallery";
import Aside from "../Aside";

import {DataContext} from "../App";

import { fetchImageListBySelectedFilter } from "../../services/FetchData";
import { normalizeArrayImagesForSimpleSearch } from "../../services/UtilsHelper";

function Main() {

  const contextData = useContext(DataContext);

  function handleImageListUpdated(selectedFilter) {
    
    if (selectedFilter.length > 0) {
      contextData.updateContextData({imageList: [], isLoading: true})
      getImageList(selectedFilter);
    }
  }

  function getImageList(selectedFilter) {
    fetchImageListBySelectedFilter(selectedFilter)
      .then((res) => {
        let arrayResult = normalizeArrayImagesForSimpleSearch(res.message);

        contextData.updateContextData({imageList: arrayResult, isLoading: false})

      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <main className="row mt-4 mb-2">
      <Aside handleImageListUpdated={handleImageListUpdated} />
      <Gallery dataSource={contextData.data.imageList} isLoading={contextData.data.isLoading} />
    </main>
  );
}

export default Main;
