import React, { useState } from "react";

import ViewHeader from "../ViewHeader";
import ViewFooter from "../ViewFooter";
import MainContainer from "../MainContainer";

import {ImageListContext} from "./context";

function App() {
  const [data, setData] = useState({ imageList: [], isLoading: false });

  function updateImageListContext(newData) {
    setData(newData);
  }

  const providerValue = { data: data, updateImageListContext };

  return (
    <div className="container" role="app">
      <ViewHeader />
      <ImageListContext.Provider value={providerValue}>
        <MainContainer />
      </ImageListContext.Provider>
      <ViewFooter />
    </div>
  );
}

export default App;
