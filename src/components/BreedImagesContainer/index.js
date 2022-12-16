import React from "react";

import DogImage from "../DogImage";

export default function BreedImagesContainer({ dataSource }) {
  return (
    dataSource &&
    dataSource.length > 0 && (
      <>
        <span className="badge bg-primary text-wrap d-block p-2">
          {dataSource.length} images found
        </span>
        <div className="row" role="gallery">
          {dataSource.map((item) => (
            <DogImage key={"card-" + item.key} imageLink={item.url} />
          ))}
        </div>
      </>
    )
  );
}