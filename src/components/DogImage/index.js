import React from "react";

export default function DogImage({ imageLink }) {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card mt-2" role="card">
        <img src={imageLink} className="card-img-top rounded" alt="dog picture" />
      </div>
    </div>
  );
}


