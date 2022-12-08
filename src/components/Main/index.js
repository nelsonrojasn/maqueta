import React, { useState, useContext } from "react";

import Gallery from "../Gallery";
import Aside from "../Aside";

import { DataContext } from "../App";

function Main() {
  const contextData = useContext(DataContext);

  return (
    <main className="row mt-4 mb-2">
      <Aside />
      <Gallery
        dataSource={contextData.data.imageList}
        isLoading={contextData.data.isLoading}
      />
    </main>
  );
}

export default Main;
