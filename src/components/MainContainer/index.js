import React, { useContext } from "react";

import BreedsGalleryContainer from "../BreedsGalleryContainer";
import BreedsSearch from "../BreedsSearchContainer";

import { ImageListContext } from "../App/context";

export default function MainContainer() {
  const imageListContext = useContext(ImageListContext);

  return (
    <main className="row mt-4 mb-2" role="main">
      <BreedsSearch />
      <BreedsGalleryContainer
        dataSource={imageListContext.data.imageList}
        isLoading={imageListContext.data.isLoading}
      />
    </main>
  );
}


