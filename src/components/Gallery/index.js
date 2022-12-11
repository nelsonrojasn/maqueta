import React from "react";

import AlertMessage from "../AlertMessage";
import LoadingMessage from "../LoadingMessage";
import ListImages from "../ListImages";

function Gallery({ dataSource, isLoading }) {
  return (
    <section className="col-md-8 col-sm-12">
      <AlertMessage isLoading={isLoading} dataSource={dataSource} />
      
      <LoadingMessage isLoading={isLoading} />

      <ListImages dataSource={dataSource} />
    </section>
  );
}

export default Gallery;
