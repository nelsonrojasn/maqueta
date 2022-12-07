import React from "react";

import Card from "../Card";

function Gallery() {
  return (
    <section className="col-md-8 col-sm-12">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
