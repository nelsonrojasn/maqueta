import React, { useState, useEffect } from "react";

import Selector from "../Selector";
import SearchButton from "../SearchButton";
import InfoFiltros from "../InfoFiltros";
import { fetchAllBreeds } from "../../services/FetchData";

function Search() {
  const [razas, setRazas] = useState([]);
  const [subRazas, setSubRazas] = useState([]);
  const [selectedRaza, setSelectedRaza] = useState("");
  const [selectedSubRaza, setSelectedSubRaza] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    fetchAllBreeds()
      .then((arrayResult) => {
        setRazas(arrayResult);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  function handleChangeRaza(event) {
    let currentValue = event.target.value;
    setSelectedRaza(currentValue);
    setSelectedSubRaza("");

    let subRazas = razas.filter((item) => {
      return item.nombre === currentValue;
    });

    setSubRazas(subRazas[0].items);
    setSelectedFilter(currentValue);
  }

  function handleChangeSubRaza(event) {
    let currentValue = event.target.value;
    setSelectedSubRaza(currentValue);

    let selectedFilter =
      selectedRaza + (currentValue.length > 0 ? "/" + currentValue : "");
    setSelectedFilter(selectedFilter);
  }

  return (
    <div className="card">
      <div className="card-body">
        <label>Seleccione Raza</label>
        <Selector dataSource={razas} handleChange={handleChangeRaza} />
        <label>Seleccione Sub Raza</label>
        <Selector dataSource={subRazas} handleChange={handleChangeSubRaza} />

        <InfoFiltros
          selectedRaza={selectedRaza}
          selectedSubRaza={selectedSubRaza}
          selectedFilter={selectedFilter}
        />

        <SearchButton selectedFilter={selectedFilter} />
      </div>
    </div>
  );
}

export default Search;
