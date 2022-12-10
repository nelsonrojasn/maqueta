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
    //cargar lista de razas
    fetchAllBreeds()
      .then((arrayResult) => {
        setRazas(arrayResult);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  useEffect(() => {
    //actualizar filtro seleccionado
    const selectedFilter =
      selectedRaza + (selectedSubRaza.length > 0 ? "/" + selectedSubRaza : "");
    setSelectedFilter(selectedFilter);
  }, [selectedRaza, selectedSubRaza]);

  useEffect(() => {
    //actualizar lista de subrazas
    setSelectedSubRaza("");

    const subRazas = razas.filter((item) => {
      return item.nombre === selectedRaza;
    });

    subRazas.length > 0 && setSubRazas(subRazas[0].items);
  }, [selectedRaza, razas]);

  
  return (
    <div className="card">
      <div className="card-body">
        <Selector
          labelText="Seleccione Raza"
          dataSource={razas}
          handleChange={(e) => setSelectedRaza(e.target.value)}
        />

        <Selector
          labelText="Seleccione Sub Raza"
          dataSource={subRazas}
          handleChange={(e) => setSelectedSubRaza(e.target.value)}
        />

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
