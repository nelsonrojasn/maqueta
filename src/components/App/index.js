import React, { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

import {DataContext} from "./context";

function App() {
  const [data, setData] = useState({ imageList: [], isLoading: false });

  function updateContextData(newData) {
    setData(newData);
  }

  const providerValue = { data: data, updateContextData };

  return (
    <div className="container" role="app">
      <Header />
      <DataContext.Provider value={providerValue}>
        <Main />
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
