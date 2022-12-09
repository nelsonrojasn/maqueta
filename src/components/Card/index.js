import React from "react";

function Card({ imageLink }) {
  return (
    <div className="card mt-2" role="card">
      <img src={imageLink} className="card-img-top" alt="dog picture" />
    </div>
  );
}

export default Card;
