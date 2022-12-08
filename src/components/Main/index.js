import React, { useState } from "react";
import { fetchImageListBySelectedFilter } from "../../services/FetchData";
import {normalizeArrayImagesForSimpleSearch} from "../../services/UtilsHelper"; 

import Gallery from "../Gallery";
import Aside from "../Aside";

function Main() {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleImageListUpdated(selectedFilter) {
    setImageList([]);
    if (selectedFilter.length > 0) {
      setIsLoading(true);
      getImageList(selectedFilter);
    }
  }

  function getImageList(selectedFilter) {
    fetchImageListBySelectedFilter(selectedFilter)
      .then((res) => {
        //console.log(res);
        let arrayResult = normalizeArrayImagesForSimpleSearch(res.message);

        //console.log("~~~~", arrayResult);
        setImageList(arrayResult);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <main className="row mt-4 mb-2">
      <Aside handleImageListUpdated={handleImageListUpdated} />
      <Gallery dataSource={imageList} isLoading={isLoading} />
    </main>
  );
}

export default Main;
