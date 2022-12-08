import React, {useState} from "react";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState({ imageList: [], isLoading: false });

  function updateContextData(newData)
  {
    console.log("~~~~", newData);
    setData(newData);
  }

  const providerValue = {data: data, updateContextData};

  return (
    <div className="container">
      <Header />
      <DataContext.Provider value={providerValue}>
        <Main />
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
