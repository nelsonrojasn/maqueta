import React from "react";

import Card from "../Card";

function Gallery({ dataSource, isLoading }) {
  return (
    <section className="col-md-8 col-sm-12">
      <div className="row">
        {!isLoading && dataSource.length === 0 && (
          <span className="alert alert-info">
            Nada que mostrar aún. Vamos, anímate a buscar
          </span>
        )}

        {isLoading && <p>Cargando lista de imágenes...</p>}

        {dataSource &&
          dataSource.map((item) => (
            <div key={"column" + item.key} className="col-md-4 col-sm-12">
              <Card key={"img" + item.key} imageLink={item.url} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Gallery;
