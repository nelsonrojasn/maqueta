import React from "react";

import Card from "../Card";

function Gallery({ dataSource, isLoading }) {
  return (
    <section className="col-md-8 col-sm-12">
      {!isLoading && dataSource.length === 0 && (
        <span className="alert alert-success">
          Nada que mostrar aún. Vamos, anímate a buscar
        </span>
      )}

      {isLoading && (
        <span className="alert alert-info">Cargando lista de imágenes...</span>
      )}

      {dataSource && (
        <div className="row" role="gallery">
          {dataSource.map((item) => (
            <Card key={"card-" + item.key} imageLink={item.url} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;
