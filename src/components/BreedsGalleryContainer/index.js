import React from "react";

import InfoWelcomeMessage from "../InfoWelcomeMessage";
import InfoLoadingMessage from "../InfoLoadingMessage";
import BreedImagesContainer from "../BreedImagesContainer";

export default function BreedsGalleryContainer({ dataSource, isLoading }) {
  return (
    <section className="col-md-8 col-sm-12">
      <InfoWelcomeMessage isLoading={isLoading} dataSource={dataSource} />
      
      <InfoLoadingMessage isLoading={isLoading} />

      <BreedImagesContainer dataSource={dataSource} />
    </section>
  );
}


